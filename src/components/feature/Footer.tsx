
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: '"Pacifico", serif' }}>
              Keitaro Shimizu
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              XR・EdTech研究者<br />
              東京大学大学院 博士課程<br />
              株式会社Play Life Studio 代表取締役
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  About
                </a>
              </li>
              <li>
                <a href="#research" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  Research
                </a>
              </li>
              <li>
                <a href="#career" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  Career
                </a>
              </li>
              <li>
                <a href="#media" className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                  Media
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/keitaroshimizu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a
                href="https://twitter.com/GIZAGIZAHEART"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-400 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <i className="ri-twitter-fill"></i>
              </a>
              <a
                href="mailto:keitaro@iis-lab.org"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-green-600 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <i className="ri-mail-fill"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Keitaro Shimizu. All rights reserved. | 
            <a 
              href="https://readdy.ai/?origin=logo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="ml-1 hover:text-white transition-colors duration-200"
            >
              Powered by Readdy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
