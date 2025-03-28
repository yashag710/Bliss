"use client";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from 'next/font/google';
import { FloatingNav } from "./ui/floating-navbar";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });
const Navbar: React.FC = () => {
  return (
    <div className="z-10">
      <nav className="bg-[#009688] text-white h-24 flex flex-row justify-center items-center">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          {/* Logo Section */}
          <div className="flex items-center ml-4 space-x-2">
            <div className="rounded-full p-2">
              <Image
                src="/images/bliss_logo.png"
                alt="Logo"
                width={77}
                height={77}
                layout="intrinsic"
              />
            </div>
          </div>

          {/* Links Section */}
          <ul className={`hidden text-base md:flex space-x-6 font-medium ${poppins.className}`}>
            {['ABOUT','PROGRAMS','GET INVOLVED', 'RESOURCES','CONTACT'].map((item , index) => (
              <li className="group relative" key={index}>
               <Link href={`/${item.toLowerCase()}`}>
                 <span className="cursor-pointer after:block after:w-0 after:h-[2px] after:bg-[#F8F7BE] after:transition-all after:duration-300 hover:after:w-full"> {item} </span>
               </Link>
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="flex text-base items-center space-x-4 mr-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaTwitter />
            </a>
          </div>
        </div>
      </nav>
        <div className="bg-[#F8F7BE] h-[1] w-full"></div>
    </div>
  );
};
export default Navbar;
