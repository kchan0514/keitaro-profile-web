import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t('hero.nameEn')}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('hero.badge')}<br />
              {t('about.position.utokyoRole')}<br />
              {t('about.position.playlife')} {t('about.position.playlifeRole')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                  {t('header.about')}
                </a>
              </li>
              <li>
                <a href="#research" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                  {t('header.research')}
                </a>
              </li>
              <li>
                <a href="#career" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                  {t('header.career')}
                </a>
              </li>
              <li>
                <a href="#media" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                  {t('header.media')}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/keitaroshimizu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a
                href="https://twitter.com/GIZAGIZAHEART"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-twitter-fill"></i>
              </a>
              <a
                href="mailto:keitaro@iis-lab.org"
                className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white hover:border-green-500 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-mail-fill"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            {t('footer.copyright')} |
            <a
              href="https://readdy.ai/?origin=logo"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 hover:text-blue-400 transition-colors duration-200"
            >
              Powered by Readdy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
