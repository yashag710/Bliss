"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Ubuntu, Nunito } from "next/font/google";
import Link from "next/link";

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const programsContent = [
  {
    title: 'Child Counseling Services',
    description: 'Our experienced counselors provide a safe and nurturing environment for children to express themselves. Through play therapy, art therapy, and individual counseling sessions, we help children develop emotional resilience and coping mechanisms.',
    image: '/images/yoga_man.webp',
    link: '/programs/counseling'
  },
  {
    title: 'Environmental Education',
    description: 'We integrate environmental awareness into our counseling programs. Children learn about sustainability, climate change, and their role in protecting the planet through interactive workshops and nature-based activities.',
    image: '/images/yoga_woman.webp',
    link: '/programs/environmental'
  },
  {
    title: 'Nature Therapy Programs',
    description: 'Experience the healing power of nature through our outdoor therapy sessions. Children connect with the environment while developing emotional well-being through guided nature walks and eco-friendly activities.',
    image: '/images/yoga_man.webp',
    link: '/programs/therapy'
  },
  {
    title: 'Sustainable Development',
    description: 'Learn about sustainable practices through hands-on projects. Children develop critical thinking skills while understanding the importance of environmental conservation and sustainable living.',
    image: '/images/yoga_woman.webp',
    link: '/programs/sustainable'
  },
];

const OurProgramsLap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="relative w-full bg-[#0e5457] hidden lg:block">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ecfccb] to-transparent opacity-30" />

      <div className="text-center py-12">
        <h2 className={`text-5xl font-bold text-[#ecfccb] mb-6 drop-shadow-lg ${ubuntu.className}`}>
          Our Programs
        </h2>
        <p className={`text-white/90 max-w-3xl mx-auto text-lg ${nunito.className}`}>
          Empowering children through counseling and environmental awareness
        </p>
      </div>

      <div ref={containerRef} className="relative h-[400vh]">
        <div className="sticky top-0 flex items-center justify-center min-h-screen overflow-hidden py-12">
          <div className="relative w-full max-w-7xl mx-auto">
            {programsContent.map((program, index) => {
              const progress = useTransform(
                scrollYProgress,
                [index * 0.25, (index + 1) * 0.25],
                [0, 1]
              );
              
              const opacity = useTransform(
                progress,
                [0, 0.2, 0.8, 1],
                [0, 1, 1, 0]
              );
              
              const x = useTransform(
                progress,
                [0, 1],
                ['100%', '-100%']
              );

              return (
                <motion.div
                  key={index}
                  style={{
                    opacity,
                    x,
                    position: 'absolute',
                    width: '100%',
                    left: 0,
                    right: 0,
                  }}
                  className="px-8"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-2xl mx-auto max-w-4xl">
                    <div className="flex flex-row items-stretch">
                      <div className="w-1/2 relative aspect-[4/3]">
                        <Image
                          src={program.image}
                          alt={program.title}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                      <div className="w-1/2 p-8 flex flex-col justify-between">
                        <div>
                          <h3 className={`text-3xl font-bold text-[#0e5457] mb-4 ${ubuntu.className}`}>
                            {program.title}
                          </h3>
                          <p className={`text-gray-600 text-lg leading-relaxed ${nunito.className}`}>
                            {program.description}
                          </p>
                        </div>
                        <Link href={program.link}>
                          <button 
                            className={`mt-6 px-8 py-3 bg-[#0e5457] text-white rounded-full 
                              hover:bg-[#0e5457]/90 transition-all duration-300 
                              transform hover:scale-105 ${nunito.className} font-medium`}
                          >
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProgramsLap;