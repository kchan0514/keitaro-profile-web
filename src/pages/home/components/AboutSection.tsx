
export default function AboutSection() {
  const interests = [
    {
      icon: 'ri-vr-line',
      title: 'XR技術',
      description: 'VR、AR、MRなどの拡張現実技術を活用した革新的な体験設計'
    },
    {
      icon: 'ri-brain-line',
      title: 'HCI研究',
      description: 'ヒューマンコンピュータインタフェースの研究と実装'
    },
    {
      icon: 'ri-graduation-cap-line',
      title: 'EdTech',
      description: '教育技術とゲーミフィケーションを融合した学習体験'
    },
    {
      icon: 'ri-gamepad-line',
      title: 'ゲーミフィケーション',
      description: 'ゲーム要素を活用したエンゲージメント向上'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-3">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            技術を通じて教育とコミュニケーションに革新をもたらす研究者
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Description */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">研究への想い</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                技術領域としてXRや機械学習、IoTなど幅広く興味を持っており、これらの技術を柔軟に組み合わせて研究や開発をしています。
              </p>
              <p>
                技術を使って教育やコミュニケーション、ゲーミフィケーションで革新を生み出すことに取り組んでいます。大学・業界とらわれず、さまざまな方と共同研究や開発などを積極的に進めて行こうと思っています。
              </p>
              <p>
                現在は東京大学大学院で博士課程に在籍しながら、株式会社Play Life Studioの代表取締役として、研究成果の社会実装にも取り組んでいます。
              </p>
            </div>
          </div>

          {/* Current Position */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">現在のポジション</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-graduation-cap-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">東京大学大学院</h4>
                  <p className="text-gray-600 text-sm">学際情報学府 博士課程</p>
                  <p className="text-gray-600 text-sm">矢谷研究室 (IIS-Lab)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-building-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">株式会社Play Life Studio</h4>
                  <p className="text-gray-600 text-sm">代表取締役CEO</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-computer-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">NVIDIA合同会社</h4>
                  <p className="text-gray-600 text-sm">Senior Solution Architect</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Interests */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Research Interests</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${interest.icon} text-white text-2xl`}></i>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {interest.title}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
