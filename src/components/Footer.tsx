import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#006064] text-white">
      {/* Top Border Line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#F8F7BE] to-transparent opacity-50"></div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/bliss_logo.png"
                alt="Bliss Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <p className="text-[#E0F2F1] text-sm leading-relaxed">
              Empowering children through counseling and environmental awareness. Creating a brighter future for our children and our planet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#F8F7BE] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Programs', 'Get Involved', 'Resources', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    className="text-[#E0F2F1] hover:text-[#F8F7BE] transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#F8F7BE] mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-[#E0F2F1] text-sm">
                <FaPhone className="text-[#F8F7BE]" />
                <span>+9999999999</span>
              </li>
              <li className="flex items-center space-x-3 text-[#E0F2F1] text-sm">
                <FaEnvelope className="text-[#F8F7BE]" />
                <span>bliss1234@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-[#E0F2F1] text-sm">
                <FaMapMarkerAlt className="text-[#F8F7BE]" />
                <span>Kota</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-[#F8F7BE] mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: FaFacebookF, href: "https://facebook.com" },
                { icon: FaLinkedinIn, href: "https://linkedin.com" },
                { icon: FaYoutube, href: "https://youtube.com" },
                { icon: FaInstagram, href: "https://instagram.com" },
                { icon: FaTwitter, href: "https://twitter.com" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#009688] flex items-center justify-center text-[#F8F7BE] hover:bg-[#F8F7BE] hover:text-[#009688] transition-all duration-300"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#009688]/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#E0F2F1] text-sm">
              © {new Date().getFullYear()} Bliss. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-[#E0F2F1] hover:text-[#F8F7BE] text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#E0F2F1] hover:text-[#F8F7BE] text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;