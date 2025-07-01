import React from 'react';
import { 
  Calculator, 
  FileText, 
  Building2, 
  User, 
  Briefcase,
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'Bookkeeping', href: '/services/bookkeeping', icon: Calculator },
    { name: 'Accounting', href: '/services/accounting', icon: FileText },
    { name: 'Corporate Income Tax', href: '/services/corporate-income-tax', icon: Building2 },
    { name: 'Personal Income Tax', href: '/services/personal-income-tax', icon: User },
    { name: 'Business Advisory', href: '/services/business-advisory', icon: Briefcase },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Mission Vision Value Statement', href: '/about/mission-vision-values' },
    { name: 'Our Team', href: '/about/team' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const resources = [
    { name: 'Plans & Pricing', href: '/plans-pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Client Portal', href: '/client-portal' },
  ];

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-white to-blue-200 rounded-lg flex items-center justify-center">
                <span className="text-primary-900 font-bold text-lg">I</span>
              </div>
              <span className="font-heading font-bold text-xl">
                IBATS<span className="text-blue-400">.</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional accounting, bookkeeping, and tax services for businesses and individuals in the Niagara region. 
              We add value to the businesses we serve by applying our expertise and experience.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/ibatscorp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/company/integrated-bookkeeping-accounting-tax-services" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/ibatscorp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <li key={service.name}>
                    <a 
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                    >
                      <IconComponent size={16} className="group-hover:text-blue-400 transition-colors duration-200" />
                      <span>{service.name}</span>
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 group flex items-center space-x-2"
                  >
                    <span>{item.name}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3 mb-6">
              {resources.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 group flex items-center space-x-2"
                  >
                    <span>{item.name}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-sm">St. Catharines, ON</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:info@ibats.ca" className="text-sm hover:text-white transition-colors duration-200">
                  info@ibats.ca
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} className="text-blue-400" />
                <a href="tel:+1234567890" className="text-sm hover:text-white transition-colors duration-200">
                  Contact for consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 IBATS CORP. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 