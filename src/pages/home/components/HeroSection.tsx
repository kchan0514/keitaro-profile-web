
import Button from '../../../components/base/Button';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
                XR・EdTech Researcher
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">清水啓太郎</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Keitaro Shimizu
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-300 font-medium mb-6">
              Ph.D Student / CEO
            </p>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              ヒューマンコンピュータインタフェース(HCI)やXR技術の研究をしています。これらの最新技術と、コミュニケーションや教育、ゲーミフィケーションを連携させ、新たな価値を生み出すことをビジョンとしています。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="min-w-[200px] whitespace-nowrap bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg shadow-blue-500/25"
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <i className="ri-user-line mr-2 text-xl"></i>
                プロフィールを見る
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="min-w-[200px] whitespace-nowrap border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <i className="ri-message-3-line mr-2 text-xl"></i>
                お問い合わせ
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 mt-8">
              <a
                href="https://www.linkedin.com/in/keitaroshimizu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a
                href="https://twitter.com/GIZAGIZAHEART"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a
                href="mailto:keitaro@iis-lab.org"
                className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white hover:border-green-500 transition-all duration-300 cursor-pointer"
              >
                <i className="ri-mail-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl shadow-blue-500/20 backdrop-blur-sm">
                <img
                  src="/images/profile.jpg"
                  alt="清水啓太郎のプロフィール写真"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-30 blur-xl"></div>
              <div className="absolute top-1/2 -right-8 w-2 h-32 bg-gradient-to-b from-blue-500 to-transparent opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
        <i className="ri-arrow-down-line text-2xl"></i>
      </div>
    </section>
  );
}
