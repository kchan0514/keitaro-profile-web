
import Button from '../../../components/base/Button';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              清水啓太郎
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Keitaro Shimizu
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-600 font-medium mb-6">
              XR・EdTech研究者 / Ph.D Student
            </p>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
              ヒューマンコンピュータインタフェース(HCI)やXR技術の研究をしています。これらの最新技術と、コミュニケーションや教育、ゲーミフィケーションを連携させ、新たな価値を生み出すことをビジョンとしています。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="min-w-[200px] whitespace-nowrap"
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <i className="ri-user-line mr-2 text-xl"></i>
                プロフィールを見る
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="min-w-[200px] whitespace-nowrap"
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
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a
                href="https://twitter.com/GIZAGIZAHEART"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <i className="ri-twitter-fill text-xl"></i>
              </a>
              <a
                href="mailto:keitaro@iis-lab.org"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <i className="ri-mail-fill text-xl"></i>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="https://static.wixstatic.com/media/4a0913_66eb40565e98422ab9b08ed790bca815~mv2.png/v1/fill/w_259,h_342,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2021_profile.png"
                  alt="清水啓太郎のプロフィール写真"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"></div>
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
