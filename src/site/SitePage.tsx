import { useEffect, useMemo, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import headerHtml from './pages/arch-header.html?raw';
import footerHtml from './pages/arch-footer.html?raw';
import homeHtml from './pages/arch-home.html?raw';
import homeStyle from './pages/arch-style.css?raw';
import homeJourney from './pages/arch-journey.css?raw';
import aboutHtml from './pages/about.html?raw';
import aboutCss from './pages/about.css?raw';
import researchHtml from './pages/research.html?raw';
import researchCss from './pages/research.css?raw';
import yomiHtml from './pages/yomikikase.html?raw';
import yomiCss from './pages/yomikikase.css?raw';
import subCss from './pages/sub.css?raw';
import { D, A } from './dict';
import { initArchHome } from './archHome';
import './common.css';

type PageKey = 'home' | 'about' | 'research' | 'yomikikase';

// トップは採用デザイン（design/approved/build.py で生成）。下層ページは本文を残し、ヘッダー・フッターを共通化
const PAGES: Record<PageKey, { html: string; css: string; wrap: string; title: [string, string] }> = {
  home: { html: homeHtml, css: homeStyle + homeJourney, wrap: 'arch', title: ['清水啓太郎 | 領域を越えて、つくる。', 'Keitaro Shimizu | Dive deep. Build beyond.'] },
  about: { html: aboutHtml, css: subCss + aboutCss, wrap: 'wrap', title: ['この人について｜清水啓太郎', 'About｜Keitaro Shimizu'] },
  research: { html: researchHtml, css: subCss + researchCss, wrap: 'wrap', title: ['研究・論文｜清水啓太郎', 'Research｜Keitaro Shimizu'] },
  yomikikase: { html: yomiHtml, css: subCss + yomiCss, wrap: 'wrap', title: ['読み聞かせ×会話エージェントの研究｜清水啓太郎', 'Read-aloud × conversational agents｜Keitaro Shimizu'] },
};

/** 英語表示：data-en を持つ要素は差し替え、それ以外は日本語の文を対訳表で置き換える */
function translate(root: HTMLElement, useDict: boolean) {
  root.querySelectorAll<HTMLElement>('[data-en]').forEach((el) => {
    el.innerHTML = el.dataset.en!;
  });
  if (!useDict) return;
  const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => (/^(SCRIPT|STYLE)$/.test(n.parentNode?.nodeName ?? '') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
  });
  let n: Node | null;
  while ((n = tw.nextNode())) {
    const v = n.nodeValue ?? '';
    const k = v.trim();
    if (k && D[k] !== undefined) n.nodeValue = v.replace(k, D[k]);
  }
  root.querySelectorAll('[aria-label],[alt]').forEach((el) => {
    for (const at of ['aria-label', 'alt']) {
      const o = el.getAttribute(at);
      if (o && (A[o] || D[o])) el.setAttribute(at, A[o] || D[o]);
    }
  });
}

export default function SitePage({ page }: { page: PageKey }) {
  const { lang = 'ja' } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  const p = PAGES[page];
  const html = useMemo(() => (headerHtml + p.html + footerHtml).split('{L}').join(`/${lang}`), [p, lang]);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (lang === 'en') translate(root, page !== 'home');
    const t = root.querySelector<HTMLButtonElement>('[data-lang-toggle]');
    if (t) t.textContent = lang === 'en' ? 'EN / JP' : 'JP / EN';
    const cleanup = page === 'home' ? initArchHome(root, lang) : undefined;
    document.documentElement.lang = lang;
    document.title = p.title[lang === 'en' ? 1 : 0];
    return cleanup;
  }, [html, page, lang, p]);

  // 遷移後のスクロール位置（#付きはその節へ、それ以外は先頭へ）
  useEffect(() => {
    const id = decodeURIComponent(location.hash.slice(1));
    const el = id ? document.getElementById(id) : null;
    if (el) el.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [location.pathname, location.hash, html]);

  function onClick(e: React.MouseEvent<HTMLDivElement>) {
    const t = e.target as HTMLElement;
    if (t.closest('[data-lang-toggle]')) {
      const to = lang === 'en' ? 'ja' : 'en';
      const rest = location.pathname.replace(/^\/(ja|en)/, '');
      navigate(`/${to}${rest}${location.hash}`);
      return;
    }
    const a = t.closest<HTMLAnchorElement>('a');
    const href = a?.getAttribute('href');
    if (!a || !href || !href.startsWith('/') || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    if (href === location.pathname + location.hash) {
      const id = href.split('#')[1];
      if (id) document.getElementById(id)?.scrollIntoView();
      return;
    }
    navigate(href);
  }

  return (
    <>
      <style>{p.css}</style>
      <div className={p.wrap} ref={ref} onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
