// トップページ（採用デザイン「越境する群島」）の動き：実績の領域フィルターとお問い合わせフォーム
const FORM_ENDPOINT = 'https://readdy.ai/api/form/d3h6januqofrij837dlg';

export function initArchHome(root: HTMLElement, lang: string): () => void {
  const en = lang === 'en';
  const entries = [...root.querySelectorAll<HTMLElement>('.project')];
  const result = root.querySelector<HTMLElement>('#result-count');
  const filters = [...root.querySelectorAll<HTMLButtonElement>('[data-filter]')];

  const apply = (key: string) => {
    let n = 0;
    entries.forEach((el) => {
      const show = key === 'all' || (el.dataset.fields ?? '').split(' ').includes(key);
      el.hidden = !show;
      if (show) n++;
    });
    filters.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === key)));
    if (result) result.textContent = en ? `${n} of ${entries.length} projects` : `${entries.length}件中 ${n}件を表示`;
  };
  filters.forEach((b) => b.addEventListener('click', () => apply(b.dataset.filter!)));
  root.querySelectorAll<HTMLElement>('[data-field-jump]').forEach((a) => a.addEventListener('click', () => apply(a.dataset.fieldJump!)));
  apply('all');

  const form = root.querySelector<HTMLFormElement>('#cform');
  const onSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    if (!form) return;
    const btn = form.querySelector<HTMLButtonElement>('button[type=submit]')!;
    const st = form.querySelector<HTMLElement>('.cform-status')!;
    const data = new FormData(form);
    const sel = form.querySelector<HTMLSelectElement>('select[name=topic]');
    if (sel) data.set('topic', sel.selectedOptions[0]?.textContent ?? sel.value);
    btn.disabled = true;
    st.textContent = en ? 'Sending…' : '送信しています…';
    try {
      const r = await fetch(FORM_ENDPOINT, { method: 'POST', body: data });
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
  return () => form?.removeEventListener('submit', onSubmit);
}
