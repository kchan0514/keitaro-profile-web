
export default function CareerSection() {
  const businessCareer = [
    {
      period: '2024~',
      company: 'NVIDIA合同会社',
      position: 'Senior Solution Architect'
    },
    {
      period: '2023~2024',
      company: 'Unity Technologies Japan株式会社',
      position: 'Senior Program Manager'
    },
    {
      period: '2022~',
      company: '株式会社Play Life Studio',
      position: '代表取締役'
    },
    {
      period: '2019~2022',
      company: '株式会社博報堂',
      position: '研究ディレクター'
    },
    {
      period: '2016~2019',
      company: '株式会社リコー',
      position: 'プロジェクトマネージャー / ソフトウェアエンジニア'
    },
    {
      period: '2015~2016',
      company: '株式会社スクウェア・エニックス',
      position: 'ゲームプログラマー'
    },
    {
      period: '2012~2015',
      company: 'ソニー株式会社',
      position: 'ソフトウェアエンジニア'
    }
  ];

  const education = [
    {
      period: '2021~',
      institution: '東京大学大学院',
      degree: '学際情報学府 博士課程',
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
    <section id="career" className="py-20 bg-gradient-to-b from-gray-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Career
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-3">
              History
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            これまでの経歴と学歴
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Business Career */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <i className="ri-briefcase-line text-white text-xl"></i>
              </div>
              Business
            </h3>
            
            <div className="space-y-4">
              {businessCareer.map((job, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 border-l-4 border-l-blue-500"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-400">
                      {job.period}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-1">
                    {job.company}
                  </h4>
                  
                  <p className="text-sm text-gray-300">
                    {job.position}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                <i className="ri-graduation-cap-line text-white text-xl"></i>
              </div>
              Education
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 border-l-4 border-l-green-500"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-green-400">
                      {edu.period}
                    </span>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      edu.status === '在学中' 
                        ? 'text-orange-300 bg-orange-500/20 border border-orange-500/30' 
                        : 'text-gray-300 bg-gray-500/20 border border-gray-500/30'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-1">
                    {edu.institution}
                  </h4>
                  
                  <p className="text-sm text-gray-300">
                    {edu.degree}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Technical Skills</h3>
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <p className="text-lg text-gray-300 text-center mb-6">
              I cover wide range of software skills.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Unity', 'Android', 'AWS', 'Machine Learning', 'TensorFlow', 'YOLO',
                'Raspberry Pi', 'OpenCV', 'OpenGL', 'Google Apps Script', 'React'
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-gray-300 rounded-full text-sm font-medium hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-200"
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
