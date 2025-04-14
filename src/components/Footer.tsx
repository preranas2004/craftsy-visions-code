import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/config/contact';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-crafty-dark-bg text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 gradient-text">CraftsyVisions</h3>
            <p className="mb-4 text-gray-300">Transforming your vision into reality with creative and innovative web solutions.</p>
            <div className="flex space-x-4">
              <a href={CONTACT_INFO.socialMedia.facebook} className="text-gray-300 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href={CONTACT_INFO.socialMedia.instagram} className="text-gray-300 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href={CONTACT_INFO.socialMedia.twitter} className="text-gray-300 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href={CONTACT_INFO.socialMedia.linkedin} className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-primary transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Custom Website Design</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">E-Commerce Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Ongoing Support</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-primary mt-1" />
                <span className="text-gray-300">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-gray-300 hover:text-primary transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-300 hover:text-primary transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {currentYear} CraftsyVisions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
