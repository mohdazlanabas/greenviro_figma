import { Button } from './ui/button';
import { Input } from './ui/input';
import { Leaf, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const footerSections = [
  {
    title: 'Services',
    links: [
      'Water Treatment',
      'Waste Management', 
      'Renewable Energy',
      'Industrial Solutions',
      'Environmental Consulting',
      'Compliance Auditing'
    ]
  },
  {
    title: 'Industries',
    links: [
      'Manufacturing',
      'Healthcare',
      'Hospitality',
      'Food & Beverage',
      'Oil & Gas',
      'Government'
    ]
  },
  {
    title: 'Resources',
    links: [
      'Case Studies',
      'White Papers',
      'Sustainability Guide',
      'Compliance Center',
      'Technical Support',
      'Training Programs'
    ]
  },
  {
    title: 'Company',
    links: [
      'About Us',
      'Our Team',
      'Careers',
      'News & Updates',
      'Certifications',
      'Contact Us'
    ]
  }
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl text-white mb-2">Stay Updated</h3>
              <p className="text-blue-100">
                Get the latest environmental insights, industry news, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                placeholder="Enter your email address"
                className="bg-white border-white text-gray-900 placeholder:text-gray-500 flex-1"
              />
              <Button 
                className="bg-white text-primary hover:bg-gray-100 px-8 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl text-white tracking-tight">GreenViro</span>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                Leading environmental technology solutions provider, helping businesses 
                achieve sustainability goals for over 15 years.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+60 3-2181 8000</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>info@greenviro.my</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <span>Kuala Lumpur, Malaysia</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-white">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-gray-400 hover:text-primary transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <span>© 2025 GreenViro. All rights reserved.</span>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>ISO 14001 Certified</span>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <span>Carbon Neutral Company</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}