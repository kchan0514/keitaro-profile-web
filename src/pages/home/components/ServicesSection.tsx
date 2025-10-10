
export default function ResearchSection() {
  const awards = [
    {
      year: '2011年3月',
      title: 'ISVRI2011 Honorable Mention Award',
      description: 'RePro3D: Full-parallax 3D Display with Haptic Feedback using Retro-reflective Projection Technology',
      authors: 'Takumi Yoshida, Keitaro Shimizu, Tadatoshi Kurogi, Sho Kamuro, Kouta Minamizawa, Hideki Nii, Susumu Tachi'
    },
    {
      year: '2011年9月',
      title: 'CEDEC2011 インタラクティブセッション大賞',
      description: 'さわれる多視点裸眼立体ディスプレイ「RePro3D」',
      authors: '清水啓太郎, 柴崎美奈, 黒木帝聡, 家室匠, 吉田匠, 南澤孝太, 舘日章'
    }
  ];

  const publications = [
    {
      type: '国際学会',
      papers: [
        {
          title: 'RePro3D: Full-Parallax 3D Display with Haptic Feedback using Retro-Reflective Projection Technology',
          venue: 'IEEE International Symposium on Virtual Reality Innovations (ISVRI 2011)',
          pages: 'pp. 49-54',
          location: 'Singapore',
          year: '2011.3',
          authors: 'Takumi Yoshida, Keitaro Shimizu, Tadatoshi Kurogi, Sho Kamuro, Kouta Minamizawa, Hideaki Nii, Susumu Tachi'
        },
        {
          title: 'Adaptive Parallax Autostereoscopic LED Display',
          venue: 'ACM SIGGRAPH ASIA 2011, Emerging Technologies',
          location: 'Hongkong',
          year: '2011.12',
          authors: 'Kouta Minamizawa, Keitaro Shimizu, Masahiko Inami, Naohisa Ohta, Susumu Tachi, Shigeto Yoshida, Noriaki Yamaguchi, Shigeki Imai'
        }
      ]
    },
    {
      type: '国内学会',
      papers: [
        {
          title: '没入型VR環境における体験者の影のレンダリング',
          venue: '日本バーチャルリアリティ学会第15回大会',
          pages: '1C1-1',
          location: '石川県',
          year: '2010年9月',
          authors: '清水啓太郎, 吉田匠, 渡邊孝一, 舘日章'
        },
        {
          title: 'RePro3D:さわれる3次元視触覚ディスプレイ- バーチャルキャラクタの能動的インタラクション-',
          venue: 'エンタテインメントコンピューティング2011',
          pages: '03A-02',
          location: '東京',
          year: '2011年10月',
          authors: '清水啓太郎, 柴崎美奈, 黒木帝聡, 家室証, 吉田匠, 南澤孝太, 舘'
        }
      ]
    }
  ];

  return (
    <section id="research" className="py-20 bg-gradient-to-b from-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Research
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-3">
              History
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            これまでの研究成果と受賞歴
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
              <i className="ri-trophy-line text-white text-xl"></i>
            </div>
            Awards
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 group"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-award-line text-white text-xl"></i>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-yellow-400 bg-yellow-500/20 border border-yellow-500/30 px-3 py-1 rounded-full backdrop-blur-sm">
                      {award.year}
                    </span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                  {award.title}
                </h4>
                
                <p className="text-gray-300 font-medium mb-2">
                  {award.description}
                </p>
                
                <p className="text-sm text-gray-400">
                  {award.authors}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Publications Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
              <i className="ri-book-line text-white text-xl"></i>
            </div>
            Publications
          </h3>
          <div className="space-y-12">
            {publications.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-file-text-line text-white text-lg"></i>
                  </div>
                  {category.type}
                </h4>
                
                <div className="space-y-6">
                  {category.papers.map((paper, paperIndex) => (
                    <div
                      key={paperIndex}
                      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300 group"
                    >
                      <h5 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                        {paper.title}
                      </h5>
                      
                      <div className="space-y-2 text-sm text-gray-300">
                        <p>
                          <span className="font-medium text-blue-400">会議:</span> {paper.venue}
                        </p>
                        {paper.pages && (
                          <p>
                            <span className="font-medium text-blue-400">ページ:</span> {paper.pages}
                          </p>
                        )}
                        <p>
                          <span className="font-medium text-blue-400">開催地:</span> {paper.location} ({paper.year})
                        </p>
                        <p>
                          <span className="font-medium text-blue-400">著者:</span> {paper.authors}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
