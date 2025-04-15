"use client";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Cantarell } from "next/font/google";
import { useState } from "react";

// Import font with weights
const cantarell = Cantarell({ subsets: ["latin"], weight: ["400", "700"] });

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 80;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionPosition - navbarHeight, behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const navItems = [
    { label: "ABOUT", href: "/about" },
    { label: "PROGRAMS", href: "/programs" },
    { label: "GET IN TOUCH", href: "/get_in_touch"},
    { label: "RESOURCES", href: "/resources" },
    { label: "CONTACT", href: "#contact", isAnchor: true },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-[#0e5457] text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <Link href="/" className="flex items-center cursor-pointer">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.9, rotate: -2 }}
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <Image
                    src="/images/bliss_logo.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className={`hidden md:flex space-x-8 font-medium ${cantarell.className}`}>
              {navItems.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  {item.isAnchor ? (
                    <a 
                      href={item.href} 
                      onClick={(e) => handleContactClick(e, item.href.slice(1))}
                      className="cursor-pointer text-[#E0F2F1] hover:text-[#F8F7BE] transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href}>
                      <span className="cursor-pointer text-[#E0F2F1] hover:text-[#F8F7BE] transition-colors duration-300">
                        {item.label}
                      </span>
                    </Link>
                  )}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F8F7BE] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#E0F2F1] hover:text-[#F8F7BE] transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden"
              >
                <div className="py-4 space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="border-b border-[#E0F2F1]/10 pb-4 last:border-0"
                    >
                      {item.isAnchor ? (
                        <a
                          href={item.href}
                          onClick={(e) => handleContactClick(e, item.href.slice(1))}
                          className="block text-[#E0F2F1] hover:text-[#F8F7BE] transition-colors duration-300 py-2"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-[#E0F2F1] hover:text-[#F8F7BE] transition-colors duration-300 py-2"
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
