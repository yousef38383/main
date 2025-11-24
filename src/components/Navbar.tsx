
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const menuItems = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'عني', href: '#about' },
    { name: 'المشاريع', href: '#projects' },
    { name: 'تواصل', href: '#contact' }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <header 
      className={cn(
        'fixed top-0 inset-x-0 z-50 py-5 transition-all duration-300 ease-in-out',
        scrolled ? 'bg-cosmic-navy/90 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <ul className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="text-cosmic-silver hover:text-cosmic-white text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-cosmic-lavender after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          <a 
            href="#home" 
            className="text-cosmic-white text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity flex items-center gap-2"
          >
            <span className="text-gradient bg-gradient-to-r from-cosmic-white via-cosmic-lavender to-cosmic-purple bg-clip-text text-transparent">يوسف عصام</span>
            <div className="relative w-8 h-8 bg-gradient-to-br from-cosmic-purple to-cosmic-pink rounded-full flex items-center justify-center">
              <div className="absolute inset-0.5 bg-cosmic-dark rounded-full"></div>
              <span className="relative text-sm font-bold text-cosmic-white">ي</span>
            </div>
          </a>
          
          <div className="md:hidden">
            <button 
              className="cosmic-glass p-2 rounded-full hover:bg-cosmic-purple/10 transition-colors duration-300"
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-cosmic-white"
              >
                <path 
                  d={mobileMenuOpen 
                    ? "M18 6L6 18M6 6L18 18" 
                    : "M4 6H20M4 12H20M4 18H20"
                  }
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "absolute left-0 right-0 top-full p-6 cosmic-glass bg-cosmic-navy/95 backdrop-blur-xl border-t border-cosmic-purple/10 md:hidden",
          "transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <ul className="flex flex-col space-y-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                className="text-cosmic-silver hover:text-cosmic-white text-lg font-medium block transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
