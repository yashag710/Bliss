"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Ubuntu, Inter, Nunito } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const teamMembers = [
  {
    name: "Amit Kumar",
    role: "Environmental Educator",
    image: "/images/ishan.webp",
    description: "Expert in sustainable education and nature-based learning approaches.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "michael@bliss.org"
    }
  },
  {
    name: "Anand Agarwal",
    role: "Family Counselor",
    image: "/images/ishan.webp",
    description: "Specialized in family dynamics and eco-conscious parenting techniques.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "priya@bliss.org"
    }
  },
  {
    name: "Dr. Isha Pathak",
    role: "Youth Mentor",
    image: "/images/ishan.webp",
    description: "Focused on adolescent development and environmental leadership.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "david@bliss.org"
    }
  }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0e5457] to-[#006064] pt-[80px]">
      {/* Title Section with Background Image */}
      <div className="relative w-full">
        <div className="absolute inset-0 h-[300px]">
          <Image
            src="/images/about.jpg"
            alt="About Us Hero"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e5457]/30 to-[#0e5457]"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 pt-16 pb-24">
          <div className="text-center">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F7BE] mb-4 drop-shadow-lg ${ubuntu.className}`}>Our Story</h2>
            <p className={`text-white/90 text-lg sm:text-xl ${nunito.className}`}>
              A journey of nurturing minds and nature
            </p>
          </div>
        </div>
      </div>

      {/* Organization Info Section */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <p className={`text-[#E0F2F1] text-base sm:text-lg leading-relaxed ${inter.className}`}>
              Bliss Initiative was founded with a vision to create a holistic approach to children&apos;s mental health and environmental awareness. We believe that a child's well-being is deeply connected to their understanding and relationship with the environment. Our unique approach combines professional counseling services with environmental education, creating a nurturing space where children can grow both emotionally and intellectually.
            </p>
            <p className={`text-[#E0F2F1] text-base sm:text-lg leading-relaxed ${inter.className}`}>
              Through our programs, we aim to empower children with the tools they need to navigate life&apos;s challenges while fostering a deep appreciation for nature. We understand that each child is unique, and our personalized approach ensures that every child receives the support they need to thrive. Our initiative is more than just a counseling service; it's a movement towards creating a more sustainable and emotionally healthy future for our children.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#F8F7BE] to-transparent opacity-50"></div>

      {/* Lead Organizer Section */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative w-full md:w-1/3 aspect-square max-w-[250px] overflow-hidden border-2 border-[#F8F7BE]/20">
              <Image
                src="/images/ishan.webp"
                alt="Ishan Gupta"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
              <div>
                <h3 className={`text-3xl sm:text-4xl font-bold text-[#F8F7BE] mb-2 ${ubuntu.className}`}>Ishan Gupta</h3>
                <p className={`text-xl sm:text-2xl text-white/90 ${nunito.className}`}>Lead Organizer & Founder</p>
              </div>
              <p className={`text-[#E0F2F1] text-base sm:text-lg leading-relaxed ${inter.className}`}>
                Ishan Gupta is a passionate advocate for children&apos;s mental health and environmental sustainability. With over a decade of experience in child psychology and environmental education, he founded the Bliss Initiative to bridge the gap between mental health support and environmental awareness.
              </p>
              <p className={`text-[#E0F2F1] text-base sm:text-lg leading-relaxed ${inter.className}`}>
                His vision is to create a world where children are not only emotionally resilient but also environmentally conscious. Through his leadership, the initiative has helped hundreds of children develop a deeper understanding of themselves and their connection to the environment.
              </p>
              <div className="flex justify-center md:justify-start space-x-6">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                   className="text-[#F8F7BE] hover:text-white transition-colors">
                  <FaLinkedinIn size={28} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                   className="text-[#F8F7BE] hover:text-white transition-colors">
                  <FaTwitter size={28} />
                </a>
                <a href="mailto:ishan@bliss.org" 
                   className="text-[#F8F7BE] hover:text-white transition-colors">
                  <FaEnvelope size={28} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#F8F7BE] to-transparent opacity-50"></div>

      {/* Team Members Section */}
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl sm:text-4xl font-bold text-[#F8F7BE] mb-2 ${ubuntu.className}`}>Our Team</h2>
          <p className={`text-xl sm:text-2xl text-white/90 ${nunito.className}`}>
            Meet the dedicated professionals behind our initiative
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white/5 backdrop-blur-sm p-4 border border-[#F8F7BE]/20 hover:border-[#F8F7BE]/40 transition-all duration-300 hover:bg-white/10"
            >
              <div className="relative w-full aspect-square max-w-[180px] mx-auto mb-3 overflow-hidden border-2 border-[#F8F7BE]/20">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className={`text-lg sm:text-xl font-bold text-[#F8F7BE] mb-1 ${ubuntu.className}`}>{member.name}</h3>
              <p className={`text-base sm:text-lg text-white/90 mb-3 ${nunito.className}`}>{member.role}</p>
              <p className={`text-[#E0F2F1] text-sm mb-4 ${inter.className}`}>{member.description}</p>
              <div className="flex justify-center space-x-4">
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#F8F7BE] hover:text-white transition-colors">
                  <FaLinkedinIn size={20} />
                </a>
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-[#F8F7BE] hover:text-white transition-colors">
                  <FaTwitter size={20} />
                </a>
                <a href={`mailto:${member.social.email}`} className="text-[#F8F7BE] hover:text-white transition-colors">
                  <FaEnvelope size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;