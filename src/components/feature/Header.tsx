import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const changeLanguage = (newLang: string) => {
    i18n.changeLanguage(newLang);
    navigate(`/${newLang}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('#home')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer font-medium"
            >
              {t('header.home')}
            </button>
            <button
              onClick={() => scrollToSection('#about')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer font-medium"
            >
              {t('header.about')}
            </button>
            <button
              onClick={() => scrollToSection('#research')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer font-medium"
            >
              {t('header.research')}
            </button>
            <button
              onClick={() => scrollToSection('#career')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer font-medium"
            >
              {t('header.career')}
            </button>
            <button
              onClick={() => scrollToSection('#media')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer font-medium"
            >
              {t('header.media')}
            </button>
            <button
              onClick={() => scrollToSection('#blog')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer font-medium"
            >
              {t('header.blog')}
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 cursor-pointer font-medium"
            >
              {t('header.contact')}
            </button>
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-2 ml-auto">
            <button
              onClick={() => changeLanguage('ja')}
              className={`px-3 py-1 rounded-md transition-colors duration-200 cursor-pointer font-medium ${
                lang === 'ja'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
              }`}
            >
              JP
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1 rounded-md transition-colors duration-200 cursor-pointer font-medium ${
                lang === 'en'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
              }`}
            >
              EN
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-300 hover:text-white hover:bg-gray-800"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
              <button
                onClick={() => scrollToSection('#home')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200 cursor-pointer font-medium"
              >
                {t('header.home')}
              </button>
              <button
                onClick={() => scrollToSection('#about')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200 cursor-pointer font-medium"
              >
                {t('header.about')}
              </button>
              <button
                onClick={() => scrollToSection('#research')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200 cursor-pointer font-medium"
              >
                {t('header.research')}
              </button>
              <button
                onClick={() => scrollToSection('#career')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200 cursor-pointer font-medium"
              >
                {t('header.career')}
              </button>
              <button
                onClick={() => scrollToSection('#media')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200 cursor-pointer font-medium"
              >
                {t('header.media')}
              </button>
              <button
                onClick={() => scrollToSection('#blog')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200 cursor-pointer font-medium"
              >
                {t('header.blog')}
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors duration-200 cursor-pointer font-medium"
              >
                {t('header.contact')}
              </button>

              {/* Mobile Language Switcher */}
              <div className="flex items-center space-x-2 px-3 py-2">
                <button
                  onClick={() => changeLanguage('ja')}
                  className={`flex-1 px-3 py-2 rounded-md transition-colors duration-200 cursor-pointer font-medium ${
                    lang === 'ja'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800 border border-gray-700'
                  }`}
                >
                  JP
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`flex-1 px-3 py-2 rounded-md transition-colors duration-200 cursor-pointer font-medium ${
                    lang === 'en'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800 border border-gray-700'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
