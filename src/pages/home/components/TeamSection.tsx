
export default function MediaSection() {
  const mediaLinks = [
    {
      type: 'YouTube',
      title: 'RePro3D デモンストレーション',
      description: 'さわれる多視点裸眼立体ディスプレイのデモ動画',
      url: 'https://www.youtube.com/watch?v=MWtxpAIFnho',
      icon: 'ri-youtube-fill',
      color: 'from-red-500 to-red-600'
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
      type: 'Blog',
      title: 'Research Blog',
      description: '研究に関するブログ記事',
      url: 'https://www.xr-edtechlab.com/research-blog',
      icon: 'ri-article-line',
      color: 'from-green-500 to-green-600'
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
    <section id="media" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Media &
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-3">
              Links
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            研究成果やプロジェクト、メディアへのリンク
          </p>
        </div>

        {/* Project Links */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Projects & Media</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
              >
                <div className="flex items-start mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${link.icon} text-white text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {link.type}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {link.title}
                    </h4>
                  </div>
                  <i className="ri-external-link-line text-gray-400 group-hover:text-blue-600 transition-colors duration-200"></i>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Social Media</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target={social.platform === 'Email' ? '_self' : '_blank'}
                rel={social.platform === 'Email' ? '' : 'noopener noreferrer'}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 cursor-pointer"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${social.icon} text-white text-2xl`}></i>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {social.platform}
                  </h4>
                  
                  <p className="text-blue-600 font-medium mb-3">
                    {social.username}
                  </p>
                  
                  <p className="text-gray-600 text-sm">
                    {social.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              共同研究・開発のご相談
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
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
