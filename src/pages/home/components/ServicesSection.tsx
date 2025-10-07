
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
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Research
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-3">
              History
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            これまでの研究成果と受賞歴
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Awards</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-award-line text-white text-xl"></i>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {award.year}
                    </span>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {award.title}
                </h4>
                
                <p className="text-gray-700 font-medium mb-2">
                  {award.description}
                </p>
                
                <p className="text-sm text-gray-600">
                  {award.authors}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Publications Section */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Publications</h3>
          <div className="space-y-12">
            {publications.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-file-text-line text-white text-lg"></i>
                  </div>
                  {category.type}
                </h4>
                
                <div className="space-y-6">
                  {category.papers.map((paper, paperIndex) => (
                    <div
                      key={paperIndex}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                    >
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">
                        {paper.title}
                      </h5>
                      
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>
                          <span className="font-medium">会議:</span> {paper.venue}
                        </p>
                        {paper.pages && (
                          <p>
                            <span className="font-medium">ページ:</span> {paper.pages}
                          </p>
                        )}
                        <p>
                          <span className="font-medium">開催地:</span> {paper.location} ({paper.year})
                        </p>
                        <p>
                          <span className="font-medium">著者:</span> {paper.authors}
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
