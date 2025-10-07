
export default function CareerSection() {
  const businessCareer = [
    {
      period: '2024~',
      company: 'NVIDIA合同会社',
      position: 'Senior Solution Architect',
      description: 'AI・GPU技術を活用したソリューション設計とコンサルティング'
    },
    {
      period: '2023~2024',
      company: 'Unity Technologies Japan株式会社',
      position: 'Senior Program Manager',
      description: 'Unity技術の普及とエコシステム構築のプログラム管理'
    },
    {
      period: '2022~',
      company: '株式会社Play Life Studio',
      position: '代表取締役',
      description: 'XR・EdTech分野での事業開発と研究成果の社会実装'
    },
    {
      period: '2019~2022',
      company: '株式会社博報堂',
      position: '研究ディレクター',
      description: '新技術を活用したマーケティング・コミュニケーション研究'
    },
    {
      period: '2016~2019',
      company: '株式会社リコー',
      position: 'プロジェクトマネージャー / ソフトウェアエンジニア',
      description: 'プロジェクト管理とソフトウェア開発'
    },
    {
      period: '2015~2016',
      company: '株式会社スクウェア・エニックス',
      position: 'ゲームプログラマー',
      description: 'ゲーム開発におけるプログラミング'
    },
    {
      period: '2012~2015',
      company: 'ソニー株式会社',
      position: 'ソフトウェアエンジニア',
      description: 'ソフトウェア開発とエンジニアリング'
    }
  ];

  const education = [
    {
      period: '2021~',
      institution: '東京大学大学院',
      degree: '学際情報学府 博士課程',
      lab: '矢谷研究室 (Interactive Intelligent Systems Lab)',
      status: '在学中'
    },
    {
      period: '2010~2012',
      institution: '慶應義塾大学大学院',
      degree: 'メディアデザイン研究科 修士課程',
      status: '修了'
    },
    {
      period: '2006~2010',
      institution: '慶應義塾大学',
      degree: '環境情報学部 環境情報学科',
      status: '卒業'
    }
  ];

  return (
    <section id="career" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Career
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-3">
              History
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            これまでの経歴と学歴
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Business Career */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <i className="ri-briefcase-line text-white text-xl"></i>
              </div>
              Business
            </h3>
            
            <div className="space-y-6">
              {businessCareer.map((job, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {job.period}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {job.company}
                  </h4>
                  
                  <p className="text-lg font-medium text-blue-600 mb-3">
                    {job.position}
                  </p>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                <i className="ri-graduation-cap-line text-white text-xl"></i>
              </div>
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      edu.status === '在学中' 
                        ? 'text-orange-600 bg-orange-100' 
                        : 'text-gray-600 bg-gray-100'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {edu.institution}
                  </h4>
                  
                  <p className="text-lg font-medium text-green-600 mb-2">
                    {edu.degree}
                  </p>
                  
                  {edu.lab && (
                    <p className="text-gray-600 text-sm">
                      {edu.lab}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Technical Skills</h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 text-center mb-6">
              I cover wide range of software skills.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Unity', 'Android', 'AWS', 'Machine Learning', 'TensorFlow', 'YOLO',
                'Raspberry Pi', 'OpenCV', 'OpenGL', 'Google Apps Script', 'React'
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
