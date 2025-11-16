import { useEffect } from 'react';
import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SUPPORTED_LANGUAGES = ['ja', 'en'];

export default function LanguageWrapper() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && SUPPORTED_LANGUAGES.includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  // Redirect to Japanese if language is not supported
  if (!lang || !SUPPORTED_LANGUAGES.includes(lang)) {
    return <Navigate to="/ja" replace />;
  }

  return <Outlet />;
}
