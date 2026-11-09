// トップページの動き：越境マップの描画、領域・媒体の絞り込み、お問い合わせフォーム（試作 index.html のスクリプトを移植）
const NS = 'http://www.w3.org/2000/svg';
const FORM_ENDPOINT = 'https://readdy.ai/api/form/d3h6januqofrij837dlg';

export function initHome(root: HTMLElement, lang: string): () => void {
  const svg = root.querySelector<SVGSVGElement>('#map');
  const gIs: SVGGElement[] = [];
  if (svg) {
    svg.replaceChildren();
    const el = (n: string, a: Record<string, string | number>, p: Element = svg) => {
      const e = document.createElementNS(NS, n);
      for (const k in a) e.setAttribute(k, String(a[k]));
      p.appendChild(e);
      return e;
    };
    // 疑似乱数（毎回同じ形にする）
    let seed = 7;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    const islands = [
      { d: 'xr', name: 'ゲーム・XR', cx: 330, cy: 170, r: 150, fill: 'var(--xr)' },
      { d: 'city', name: '都市・産業', cx: 640, cy: 165, r: 150, fill: 'var(--city)' },
      { d: 'ai', name: '生成AI', cx: 340, cy: 400, r: 145, fill: 'var(--ai)' },
      { d: 'gov', name: '行政', cx: 650, cy: 405, r: 140, fill: 'var(--gov)' },
    ];
    const blob = (cx: number, cy: number, r: number, ph: number[]) => {
      const pts: number[][] = [];
      const N = 90;
      for (let i = 0; i < N; i++) {
        const t = (i / N) * Math.PI * 2;
        const k = 1 + 0.1 * Math.sin(3 * t + ph[0]) + 0.06 * Math.sin(5 * t + ph[1]) + 0.035 * Math.sin(9 * t + ph[2]);
        pts.push([cx + Math.cos(t) * r * k, cy + Math.sin(t) * r * k * 0.86]);
      }
      return 'M' + pts.map((p) => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('L') + 'Z';
    };
    islands.forEach((is) => {
      const g = el('g', { class: 'island', 'data-d': is.d, tabindex: 0, role: 'button', 'aria-label': is.name + 'の取り組みと記事を見る' }) as SVGGElement;
      const ph = [rnd() * 6, rnd() * 6, rnd() * 6];
      el('path', { class: 'base', d: blob(is.cx, is.cy, is.r, ph), fill: is.fill }, g);
      for (let i = 1; i < 9; i++) {
        const s = 1 - i * 0.105;
        const off = (1 - s) * 18;
        el('path', { class: 'ring', d: blob(is.cx + off * 0.6, is.cy + off * 0.9, is.r * s, ph.map((p, j) => p + i * 0.12 * (j + 1))) }, g);
      }
      const t = el('text', { class: 'label', x: is.cx - 50, y: is.cy + 70 }, g);
      t.textContent = is.name;
      gIs.push(g);
    });
    el('path', { class: 'route', d: 'M150 70 C 220 80, 300 120, 345 185 C 390 250, 470 120, 560 120 C 640 120, 640 170, 655 190 C 600 260, 420 250, 380 330 C 350 390, 340 400, 352 415 C 420 470, 520 330, 600 360 C 660 380, 650 420, 668 430 C 720 470, 800 500, 900 520' });
    [[345, 185], [560, 120], [655, 190], [380, 330], [352, 415], [600, 360], [668, 430]].forEach((p) => el('circle', { class: 'stop', cx: p[0], cy: p[1], r: 6 }));
    el('path', { d: 'M888 510 L902 521 L885 527', fill: 'none', stroke: 'var(--vermilion)', 'stroke-width': 2.4, 'stroke-linecap': 'round' });
    el('text', { class: 'hand', x: 470, y: 60 }).textContent = '深く';
    el('text', { class: 'hand', x: 830, y: 500 }).textContent = '渡る';
    const pins: [string, number, number][] = [
      ['XRFlowBuilder', 40, 140], ['Samurai Training', 40, 300], ['AI Talk Studio', 40, 470], ['Playful Habits', 40, 540],
      ['PLATEAU SDK-Toolkits', 800, 90], ['千葉県 インフラDXアドバイザー', 790, 300], ['読み聞かせ×会話エージェント', 780, 420],
    ];
    pins.forEach(([n, x, y]) => { el('text', { class: 'pin', x, y }).textContent = n; });
  }

  // 領域で絞り込み
  const chips = [...root.querySelectorAll<HTMLButtonElement>('.chips button')];
  const items = [...root.querySelectorAll<HTMLElement>('.work,.post,.papers li')];
  let cur: string | null = null;
  const setD = (d: string) => {
    cur = cur === d ? null : d;
    if (cur) document.body.dataset.domain = cur;
    else delete document.body.dataset.domain;
    gIs.forEach((g) => g.classList.toggle('on', g.dataset.d === cur));
    chips.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.d === cur)));
    items.forEach((it) => it.classList.toggle('dim', !!cur && !(it.dataset.d ?? '').split(' ').includes(cur)));
  };
  gIs.forEach((g) => {
    g.addEventListener('click', () => setD(g.dataset.d!));
    g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setD(g.dataset.d!); } });
  });
  chips.forEach((b) => b.addEventListener('click', () => setD(b.dataset.d!)));

  // 媒体で絞り込み
  const mb = [...root.querySelectorAll<HTMLButtonElement>('.mfilter button')];
  mb.forEach((b) => b.addEventListener('click', () => {
    const m = b.dataset.m;
    mb.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    root.querySelectorAll<HTMLElement>('.post').forEach((p) => { p.hidden = m !== 'all' && p.dataset.m !== m; });
  }));

  // お問い合わせ
  const form = root.querySelector<HTMLFormElement>('#cform');
  const en = lang === 'en';
  const onSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    if (!form) return;
    const btn = form.querySelector<HTMLButtonElement>('button[type=submit]')!;
    const st = form.querySelector<HTMLElement>('.cform-status')!;
    btn.disabled = true;
    st.textContent = en ? 'Sending…' : '送信しています…';
    try {
      const r = await fetch(FORM_ENDPOINT, { method: 'POST', body: new FormData(form) });
      if (!r.ok) throw new Error(String(r.status));
      form.reset();
      st.textContent = en ? 'Thank you. Your message has been sent.' : '送信しました。ありがとうございます。';
    } catch {
      st.textContent = en ? 'Sending failed. Please try again later.' : '送信できませんでした。時間をおいて、もう一度お試しください。';
    } finally {
      btn.disabled = false;
    }
  };
  form?.addEventListener('submit', onSubmit);

  return () => {
    delete document.body.dataset.domain;
    form?.removeEventListener('submit', onSubmit);
  };
}
