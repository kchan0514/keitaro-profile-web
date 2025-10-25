
export default function MediaSection() {
  const mediaLinks = [
    {
      type: 'YouTube',
      title: 'RePro3D デモンストレーション',
      description: 'さわれる多視点裸眼立体ディスプレイのデモ動画',
      url: 'https://www.youtube.com/watch?v=oYOvL-iVvYQ',
      icon: 'ri-youtube-fill',
      color: 'from-red-500 to-red-600',
      thumbnail: 'https://img.youtube.com/vi/oYOvL-iVvYQ/maxresdefault.jpg'
    },
    {
      type: 'Project',
      title: 'Adaptive Parallax 3D LED Display',
      description: '適応視差3D LEDディスプレイプロジェクト',
      url: 'http://embodiedmedia.org/project/adjustive-parallax-3d-display/',
      icon: 'ri-computer-line',
      color: 'from-blue-500 to-blue-600'
    },
    {
      type: 'Portfolio',
      title: 'Company Portfolio',
      description: '企業向けプロジェクトポートフォリオ',
      url: 'https://www.xr-edtechlab.com/projects-3-1',
      icon: 'ri-briefcase-line',
      color: 'from-purple-500 to-purple-600'
    }
  ];


  const socialMedia = [
    {
      platform: 'LinkedIn',
      username: 'keitaroshimizu',
      url: 'https://www.linkedin.com/in/keitaroshimizu/',
      icon: 'ri-linkedin-fill',
      color: 'from-blue-600 to-blue-700',
      description: 'プロフェッショナルなネットワーキング'
    },
    {
      platform: 'Twitter',
      username: '@GIZAGIZAHEART',
      url: 'https://twitter.com/GIZAGIZAHEART',
      icon: 'ri-twitter-fill',
      color: 'from-blue-400 to-blue-500',
      description: '研究や技術に関する情報発信'
    },
    {
      platform: 'Email',
      username: 'keitaro@iis-lab.org',
      url: 'mailto:keitaro@iis-lab.org',
      icon: 'ri-mail-fill',
      color: 'from-green-500 to-green-600',
      description: '直接のお問い合わせ'
    }
  ];

  return (
    <section id="media" className="py-20 bg-gradient-to-b from-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Media &
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-3">
              Links
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            研究成果やプロジェクト、メディアへのリンク
          </p>
        </div>

        {/* Project Links */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Projects & Media</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                {link.thumbnail && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={link.thumbnail} 
                      alt={link.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`${link.icon} text-white text-xl`}></i>
                    </div>
                    <span className="absolute top-4 right-4 text-sm font-medium text-white/80 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                      {link.type}
                    </span>
                  </div>
                )}
                
                <div className={`p-6 ${!link.thumbnail ? 'pt-6' : ''}`}>
                  {!link.thumbnail && (
                    <div className="flex items-start mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <i className={`${link.icon} text-white text-xl`}></i>
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                          {link.type}
                        </span>
                      </div>
                      <i className="ri-external-link-line text-gray-400 group-hover:text-blue-400 transition-colors duration-200"></i>
                    </div>
                  )}
                  
                  {link.thumbnail && (
                    <div className="flex items-center justify-between mb-3">
                      <div></div>
                      <i className="ri-external-link-line text-gray-400 group-hover:text-blue-400 transition-colors duration-200"></i>
                    </div>
                  )}
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-200 leading-tight">
                    {link.title}
                  </h4>
                  
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {link.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-8">Social Media</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target={social.platform === 'Email' ? '_self' : '_blank'}
                rel={social.platform === 'Email' ? '' : 'noopener noreferrer'}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${social.icon} text-white text-2xl`}></i>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-2">
                    {social.platform}
                  </h4>
                  
                  <p className="text-blue-400 font-medium mb-3">
                    {social.username}
                  </p>
                  
                  <p className="text-gray-300 text-sm">
                    {social.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              共同研究・開発のご相談
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              大学・業界とらわれず、さまざまな方と共同研究や開発などを積極的に進めて行こうと思っています。ぜひお気軽にお声がけください。
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-message-3-line mr-2"></i>
              お問い合わせ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
