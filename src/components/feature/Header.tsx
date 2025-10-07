
import { useState } from 'react';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: '"Pacifico", serif' }}>
              Keitaro Shimizu
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('#home')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('#about')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('#research')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Research
            </button>
            <button
              onClick={() => scrollToSection('#career')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Career
            </button>
            <button
              onClick={() => scrollToSection('#media')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Media
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <button
                onClick={() => scrollToSection('#home')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('#about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('#research')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 cursor-pointer"
              >
                Research
              </button>
              <button
                onClick={() => scrollToSection('#career')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 cursor-pointer"
              >
                Career
              </button>
              <button
                onClick={() => scrollToSection('#media')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 cursor-pointer"
              >
                Media
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
