"use client";
import Image from "next/image";
import { Ubuntu, Nunito, Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const dancing_Script = Dancing_Script({ subsets: ['latin'], weight: ['400', '500', '700']});

const About = () => {
  return (
    <section className="relative py-12 sm:py-20 bg-[#133043] overflow-hidden">
      <div className="absolute inset-0 opacity-80" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/about.jpg"
                alt="Students learning"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-40" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:w-1/2 w-full text-white"
          >
            <h2 className={`${ubuntu.className} text-3xl sm:text-4xl font-bold mb-4 sm:mb-6`}>
              <span className="text-white">
                About Us
              </span>
            </h2>
            
            <div className={`${nunito.className} space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base`}>
              <p>
                Team Green Bliss Initiative is dedicated to transforming education and empowering students throughout their academic journey. We believe in creating an environment where every student can thrive and reach their full potential.
              </p>
              <p>
                Our mission extends beyond traditional education, encompassing holistic development, personal growth, and community building. Through innovative programs and dedicated support, we are helping shape the future of education.
              </p>
              
              <div className="flex flex-col sm:grid sm:grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-8">
                {/* First stat - centered on mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-center sm:col-span-1"
                >
                  <div className={`text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ecfccb] to-[#5fd4c4] ${ubuntu.className}`}>
                    5+
                  </div>
                  <div className={`text-xs sm:text-sm text-gray-400 ${nunito.className}`}>Years Experience</div>
                </motion.div>

                {/* Container for the other two stats */}
                <div className="flex justify-center gap-4 sm:col-span-2">
                  {/* Second stat */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center"
                  >
                    <div className={`text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ecfccb] to-[#5fd4c4] ${ubuntu.className}`}>
                      1000+
                    </div>
                    <div className={`text-xs sm:text-sm text-gray-400 ${nunito.className}`}>Students Helped</div>
                  </motion.div>

                  {/* Third stat */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center"
                  >
                    <div className={`text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ecfccb] to-[#5fd4c4] ${ubuntu.className}`}>
                      50+
                    </div>
                    <div className={`text-xs sm:text-sm text-gray-400 ${nunito.className}`}>Partner Schools</div>
                  </motion.div>
                </div>
              </div>
            </div>
            
            <Link href="/about">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className={`${dancing_Script.className} mt-6 sm:mt-8 text-2xl sm:text-3xl text-[#5fd4c4] hover:text-[#ecfccb] transition-colors duration-300`}
              >
                Read more
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
