"use client";
import Image from "next/image";
import { Ubuntu, Inter, Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });
const dancing_Script = Dancing_Script({ subsets: ['latin'], weight: ['400', '500', '700']});

const About = () => {
  return (
    <section className="relative py-20 bg-[#0A192F] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0A192F] opacity-80" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/about-image.jpg"
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
            className="lg:w-1/2 text-white"
          >
            <h2 className={`${ubuntu.className} text-4xl font-bold mb-6`}>
              <span className="text-white">
                About Us
              </span>
            </h2>
            
            <div className={`${inter.className} space-y-4 text-gray-300`}>
              <p>
                Team Green Bliss Initiative is dedicated to transforming education and empowering students throughout their academic journey. We believe in creating an environment where every student can thrive and reach their full potential.
              </p>
              <p>
                Our mission extends beyond traditional education, encompassing holistic development, personal growth, and community building. Through innovative programs and dedicated support, we are helping shape the future of education.
              </p>
              
              <div className="grid grid-cols-3 gap-4 my-8">
                {[
                  { number: "5+", label: "Years Experience" },
                  { number: "1000+", label: "Students Helped" },
                  { number: "50+", label: "Partner Schools" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ecfccb] to-[#5fd4c4]">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className={`${dancing_Script.className} mt-8 text-3xl text-[#5fd4c4] hover:text-[#ecfccb] transition-colors duration-300`}
            >
              Read more
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
