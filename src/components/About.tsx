"use client";
import Image from "next/image";
import { Ubuntu, Nunito } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const About = () => {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-[#0e5457] overflow-hidden">
      {/* Decorative theme lines */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center gap-2 py-2">
        <div className="h-[0.5px] w-16 bg-[#ecfccb] opacity-60" />
        <div className="h-1 w-1 rounded-full bg-[#ecfccb] opacity-60" />
        <div className="h-[0.5px] w-16 bg-[#ecfccb] opacity-60" />
        <div className="h-1 w-1 rounded-full bg-[#ecfccb] opacity-60" />
        <div className="h-[0.5px] w-16 bg-[#ecfccb] opacity-60" />
        <div className="h-1 w-1 rounded-full bg-[#ecfccb] opacity-60" />
        <div className="h-[0.5px] w-16 bg-[#ecfccb] opacity-60" />
      </div>
      
      <div className="absolute inset-0 opacity-80" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Students learning"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e5457] via-transparent to-transparent opacity-40" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:w-1/2 w-full text-white px-4 sm:px-6 md:px-8"
          >
            <h2 className={`${ubuntu.className} text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6`}>
              <span className="text-[#ecfccb]">
                About Us
              </span>
            </h2>
            
            <div className={`${nunito.className} space-y-2 sm:space-y-3 md:space-y-4 text-white/90 text-sm sm:text-base`}>
              <p>
                Team Green Bliss Initiative is dedicated to transforming education and empowering students throughout their academic journey. We believe in creating an environment where every student can thrive and reach their full potential.
              </p>
              <p>
                Our mission extends beyond traditional education, encompassing holistic development, personal growth, and community building. Through innovative programs and dedicated support, we are helping shape the future of education.
              </p>
              
              <div className="flex justify-between items-center my-4 sm:my-6 md:my-8 px-2 sm:px-4 md:px-6">
                {/* First stat */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col items-center"
                >
                  <div className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#ecfccb] ${ubuntu.className}`}>
                    5+
                  </div>
                  <div className={`text-xs sm:text-sm text-white/80 mt-1 ${nunito.className}`}>Years Experience</div>
                </motion.div>

                {/* Second stat */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <div className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#ecfccb] ${ubuntu.className}`}>
                    1000+
                  </div>
                  <div className={`text-xs sm:text-sm text-white/80 mt-1 ${nunito.className}`}>Students Helped</div>
                </motion.div>

                {/* Third stat */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-col items-center"
                >
                  <div className={`text-xl sm:text-2xl md:text-3xl font-bold text-[#ecfccb] ${ubuntu.className}`}>
                    50+
                  </div>
                  <div className={`text-xs sm:text-sm text-white/80 mt-1 ${nunito.className}`}>Partner Schools</div>
                </motion.div>
              </div>
            </div>
            
            <Link href="/about">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className={`${nunito.className} mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base text-[#ecfccb] hover:text-white transition-colors duration-300`}
              >
                Read more...
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
