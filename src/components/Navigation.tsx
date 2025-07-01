import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  Users, 
  Calculator,
  FileText,
  Building2,
  User,
  Briefcase,
  DollarSign,
  ChevronDown,
  Phone
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Bookkeeping', href: '/services/bookkeeping', icon: Calculator },
    { name: 'Accounting', href: '/services/accounting', icon: FileText },
    { name: 'Corporate Income Tax', href: '/services/corporate-income-tax', icon: Building2 },
    { name: 'Personal Income Tax', href: '/services/personal-income-tax', icon: User },
    { name: 'Business Advisory', href: '/services/business-advisory', icon: Briefcase },
  ];

  const toggleMobile = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container-max">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="font-heading font-bold text-xl text-gray-900">
                IBATS<span className="text-blue-600">.</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="/" 
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                <Home size={16} />
                <span>Home</span>
              </a>

              {/* About - Direct Link */}
              <a 
                href="/about" 
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                <Users size={16} />
                <span>About</span>
              </a>

              {/* Services Dropdown - Hover Based */}
              <div 
                className="relative group"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  <Calculator size={16} />
                  <span>Services</span>
                  <ChevronDown size={14} className={`transform transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                  activeDropdown === 'services' 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}>
                  {services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <a
                        key={service.name}
                        href={service.href}
                        className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                      >
                        <IconComponent size={16} />
                        <span>{service.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <a 
                href="/plans-pricing" 
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                <DollarSign size={16} />
                <span>Plans & Pricing</span>
              </a>
            </div>
          </div>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Contact Us Button - Desktop Only */}
            <a 
              href="/contact" 
              className="hidden lg:flex items-center space-x-2 btn-primary"
            >
              <Phone size={16} />
              <span>Contact Us</span>
            </a>

            {/* Mobile menu button with enhanced animations */}
            <button
              onClick={toggleMobile}
              className="lg:hidden relative inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}></span>
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation with smooth slide animation */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
          <a
            href="/"
            className="flex items-center space-x-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 transform hover:translate-x-1"
            onClick={() => setIsOpen(false)}
          >
            <Home size={18} />
            <span>Home</span>
          </a>

          {/* Mobile About - Direct Link */}
          <a
            href="/about"
            className="flex items-center space-x-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 transform hover:translate-x-1"
            onClick={() => setIsOpen(false)}
          >
            <Users size={18} />
            <span>About</span>
          </a>

          {/* Mobile Services */}
          <div className="space-y-1">
            <div className="flex items-center space-x-3 text-gray-700 px-3 py-2 text-base font-medium">
              <Calculator size={18} />
              <span>Services</span>
            </div>
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <a
                  key={service.name}
                  href={service.href}
                  className="flex items-center space-x-3 text-gray-600 hover:text-blue-700 hover:bg-blue-50 block pl-8 pr-3 py-2 rounded-md text-sm transition-all duration-200 transform hover:translate-x-1"
                  onClick={() => setIsOpen(false)}
                >
                  <IconComponent size={16} />
                  <span>{service.name}</span>
                </a>
              );
            })}
          </div>

          <a
            href="/plans-pricing"
            className="flex items-center space-x-3 text-gray-700 hover:text-blue-700 hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 transform hover:translate-x-1"
            onClick={() => setIsOpen(false)}
          >
            <DollarSign size={18} />
            <span>Plans & Pricing</span>
          </a>

          {/* Contact Us - Mobile Only */}
          <a
            href="/contact"
            className="flex items-center space-x-3 text-white bg-blue-600 hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 transform hover:translate-x-1 mx-3 mt-2"
            onClick={() => setIsOpen(false)}
          >
            <Phone size={18} />
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 