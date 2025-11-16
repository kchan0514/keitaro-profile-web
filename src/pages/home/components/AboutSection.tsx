import { useTranslation } from 'react-i18next';

export default function AboutSection() {
  const { t } = useTranslation();

  const interests = [
    {
      icon: 'ri-vr-line',
      titleKey: 'about.interests.xr.title',
      descKey: 'about.interests.xr.desc',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'ri-brain-line',
      titleKey: 'about.interests.hci.title',
      descKey: 'about.interests.hci.desc',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'ri-graduation-cap-line',
      titleKey: 'about.interests.edtech.title',
      descKey: 'about.interests.edtech.desc',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: 'ri-gamepad-line',
      titleKey: 'about.interests.gamification.title',
      descKey: 'about.interests.gamification.desc',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('about.title')}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-3">
              {t('about.titleHighlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Description */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <i className="ri-heart-line text-white text-lg"></i>
              </div>
              {t('about.passion.title')}
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>{t('about.passion.p1')}</p>
              <p>{t('about.passion.p2')}</p>
              <p>{t('about.passion.p3')}</p>
            </div>
          </div>

          {/* Current Position */}
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                <i className="ri-briefcase-line text-white text-lg"></i>
              </div>
              {t('about.position.title')}
            </h3>
            <div className="space-y-6">
              <div className="flex items-start group hover:bg-gray-700/30 rounded-xl p-4 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-graduation-cap-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{t('about.position.utokyo')}</h4>
                  <p className="text-gray-300 text-sm">{t('about.position.utokyoRole')}</p>
                  <p className="text-gray-400 text-sm">{t('about.position.utokyoLab')}</p>
                </div>
              </div>

              <div className="flex items-start group hover:bg-gray-700/30 rounded-xl p-4 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-building-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{t('about.position.playlife')}</h4>
                  <p className="text-gray-300 text-sm">{t('about.position.playlifeRole')}</p>
                </div>
              </div>

              <div className="flex items-start group hover:bg-gray-700/30 rounded-xl p-4 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <i className="ri-computer-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{t('about.position.nvidia')}</h4>
                  <p className="text-gray-300 text-sm">{t('about.position.nvidiaRole')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Interests */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12 flex items-center justify-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
              <i className="ri-lightbulb-line text-white text-xl"></i>
            </div>
            {t('about.interests.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${interest.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <i className={`${interest.icon} text-white text-2xl`}></i>
                </div>

                <h4 className="text-xl font-bold text-white mb-3">
                  {t(interest.titleKey)}
                </h4>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {t(interest.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
