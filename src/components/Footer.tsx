import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-darkblue-900 via-darkblue-800 to-darkblue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">
              EDIGHT<span className="text-orange-500">(PTY)</span>
            </h3>
            <p className="text-gray-300 text-sm">
              EDGAR BRIGHT GROUP - Empowering Africa's Digital Future with cutting-edge IT solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                  Training Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Hardware Solutions</li>
              <li>Software Development</li>
              <li>Cybersecurity</li>
              <li>Cloud Services</li>
              <li>IT Training</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Pretoria, Gauteng, South Africa
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-400 flex-shrink-0" />
                <a href="mailto:info@edight.co.za" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                  info@edight.co.za
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-400 flex-shrink-0" />
                <a href="tel:+27123456789" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                  +27 12 345 6789
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-darkblue-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} EDIGHT (PTY) - EDGAR BRIGHT GROUP. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
