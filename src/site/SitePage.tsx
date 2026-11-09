import { useEffect, useMemo, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import homeHtml from './pages/home.html?raw';
import homeCss from './pages/home.css?raw';
import aboutHtml from './pages/about.html?raw';
import aboutCss from './pages/about.css?raw';
import researchHtml from './pages/research.html?raw';
import researchCss from './pages/research.css?raw';
import yomiHtml from './pages/yomikikase.html?raw';
import yomiCss from './pages/yomikikase.css?raw';
import subCss from './pages/sub.css?raw';
import { D, A } from './dict';
import { initHome } from './home';
import './common.css';

type PageKey = 'home' | 'about' | 'research' | 'yomikikase';

const PAGES: Record<PageKey, { html: string; css: string; title: [string, string] }> = {
  home: { html: homeHtml, css: homeCss, title: ['清水啓太郎｜Keitaro Shimizu', 'Keitaro Shimizu｜清水啓太郎'] },
  about: { html: aboutHtml, css: subCss + aboutCss, title: ['この人について｜清水啓太郎', 'About｜Keitaro Shimizu'] },
  research: { html: researchHtml, css: subCss + researchCss, title: ['研究・論文｜清水啓太郎', 'Research｜Keitaro Shimizu'] },
  yomikikase: { html: yomiHtml, css: subCss + yomiCss, title: ['読み聞かせ×会話エージェントの研究｜清水啓太郎', 'Read-aloud × conversational agents｜Keitaro Shimizu'] },
};

const HEADER = `<header class="site"><a class="id" href="{L}">清水 啓太郎</a>
<nav aria-label="メイン"><ul>
<li><a href="{L}#values">考え方</a></li>
<li><a href="{L}#works">つくったもの</a></li>
<li><a href="{L}#writing">発信</a></li>
<li><a href="{L}#research">研究</a></li>
<li><a href="{L}/about">この人について</a></li>
<li><a href="{L}#contact">お問い合わせ</a></li>
<li><span class="lang" role="group" aria-label="Language"><button type="button" data-lang="ja">JA</button> / <button type="button" data-lang="en">EN</button></span></li>
</ul></nav></header>`;
const FOOTER = `<footer class="site-foot"><span>© Keitaro Shimizu</span><span>keitaro-shimizu.com</span></footer>`;

/** 日本語の文を対訳表で英語に置き換える（試作 js/i18n.js と同じ方式） */
function translate(root: HTMLElement) {
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
  const html = useMemo(() => (HEADER + p.html + FOOTER).split('{L}').join(`/${lang}`), [p, lang]);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    root.querySelectorAll<HTMLButtonElement>('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    const cleanup = page === 'home' ? initHome(root, lang) : undefined;
    if (lang === 'en') translate(root);
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
    const lb = t.closest<HTMLButtonElement>('[data-lang]');
    if (lb) {
      const to = lb.dataset.lang!;
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
      <div className="wrap" ref={ref} onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
