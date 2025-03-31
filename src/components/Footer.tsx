import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Nunito , Ubuntu} from "next/font/google";

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '700'] });
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] });

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#006064] text-white">

      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#F8F7BE] to-transparent opacity-50"></div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 ${nunito.className}` }>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/bliss_logo.png"
                alt="Bliss Logo"
                width={50}
                height={50}
                className="rounded-full sm:w-[50px] sm:h-[50px]"
              />
            </div>
            <p className="text-[#E0F2F1] text-xs sm:text-sm leading-relaxed">
              Empowering children through counseling and environmental awareness. Creating a brighter future for our children and our planet.
            </p>
          </div>
          
          <div>
            <h3 className={`text-base sm:text-lg font-semibold text-[#F8F7BE] mb-3 sm:mb-4 ${ubuntu.className}`}>Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Programs", "Get Involved", "Resources", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    className="text-[#E0F2F1] hover:text-[#F8F7BE] transition-colors duration-300 text-xs sm:text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`text-base sm:text-lg font-semibold text-[#F8F7BE] mb-3 sm:mb-4 ${ubuntu.className}`}>Contact Us</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center space-x-2 sm:space-x-3 text-[#E0F2F1] text-xs sm:text-sm">
                <FaPhone className="text-[#F8F7BE]" />
                <span>+918441806529</span>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3 text-[#E0F2F1] text-xs sm:text-sm">
                <FaEnvelope className="text-[#F8F7BE]" />
                <span>bliss1234@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 sm:space-x-3 text-[#E0F2F1] text-xs sm:text-sm">
                <FaMapMarkerAlt className="text-[#F8F7BE]" />
                <span>Kota, Rajasthan</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`text-base sm:text-lg font-semibold text-[#F8F7BE] mb-3 sm:mb-4 ${ubuntu.className}`}>Follow Us</h3>
            <div className="flex space-x-3 sm:space-x-4">
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
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#009688] flex items-center justify-center text-[#F8F7BE] hover:bg-[#F8F7BE] hover:text-[#009688] transition-all duration-300"
                >
                  <social.icon className="text-xs sm:text-sm" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#009688]/30 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-[#E0F2F1] text-xs sm:text-sm">
              © {new Date().getFullYear()} Bliss. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <Link href="/privacy" className="text-[#E0F2F1] hover:text-[#F8F7BE] text-xs sm:text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#E0F2F1] hover:text-[#F8F7BE] text-xs sm:text-sm transition-colors duration-300">
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
