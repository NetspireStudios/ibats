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
    <footer className="w-full bg-gray-900 text-white">
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

        {/* Google Maps & Contact Section */}
        <div className="border-t border-white/10 mt-12 pt-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Google Maps */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 text-white">Visit Our Office</h3>
              <div className="relative h-64 rounded-xl overflow-hidden border border-white/20">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23239.82708162644!2d-79.25091!3d43.159718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d350cd8d1bb84b%3A0x2a3e06d2b8bcbfdf!2sSt.%20Catharines%2C%20ON!5e0!3m2!1sen!2sca!4v1672147200000!5m2!1sen!2sca"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
            </div>

            {/* Mini Contact Form */}
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 text-white">Quick Contact</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-200"
                />
                <textarea 
                  placeholder="How can we help you?"
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 transition-colors duration-200 resize-none"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
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