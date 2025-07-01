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

  const about = [
    { name: 'Mission Vision Value Statement', href: '/about/mission-vision-values', icon: Users },
  ];

  const toggleMobile = () => setIsOpen(!isOpen);
  
  const handleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

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
              <div className="w-10 h-10 bg-gradient-to-br from-primary-900 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="font-heading font-bold text-xl text-primary-900">
                IBATS<span className="text-blue-600">.</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="/" 
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                <Home size={16} />
                <span>Home</span>
              </a>

              {/* About Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdown('about')}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  <Users size={16} />
                  <span>About</span>
                  <ChevronDown size={14} className={`transform transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
                
                {activeDropdown === 'about' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fade-in">
                    {about.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-900 transition-colors duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <IconComponent size={16} />
                          <span>{item.name}</span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdown('services')}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  <Calculator size={16} />
                  <span>Services</span>
                  <ChevronDown size={14} className={`transform transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fade-in">
                    {services.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <a
                          key={service.name}
                          href={service.href}
                          className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-900 transition-colors duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <IconComponent size={16} />
                          <span>{service.name}</span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

              <a 
                href="/plans-pricing" 
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                <DollarSign size={16} />
                <span>Plans & Pricing</span>
              </a>
            </div>
          </div>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a 
              href="/contact" 
              className="hidden lg:flex items-center space-x-2 btn-primary"
            >
              <Phone size={16} />
              <span>Contact Us</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobile}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <a
              href="/"
              className="flex items-center space-x-3 text-gray-700 hover:text-primary-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              <Home size={18} />
              <span>Home</span>
            </a>

            {/* Mobile About */}
            <div className="space-y-1">
              <div className="flex items-center space-x-3 text-gray-700 px-3 py-2 text-base font-medium">
                <Users size={18} />
                <span>About</span>
              </div>
              {about.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-600 hover:text-primary-900 hover:bg-gray-50 block pl-8 pr-3 py-2 rounded-md text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <IconComponent size={16} />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>

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
                    className="flex items-center space-x-3 text-gray-600 hover:text-primary-900 hover:bg-gray-50 block pl-8 pr-3 py-2 rounded-md text-sm"
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
              className="flex items-center space-x-3 text-gray-700 hover:text-primary-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              <DollarSign size={18} />
              <span>Plans & Pricing</span>
            </a>

            <a
              href="/contact"
              className="flex items-center space-x-3 text-gray-700 hover:text-primary-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={18} />
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 