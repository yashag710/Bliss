"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Ubuntu, Nunito } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

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

function OurPrograms() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full py-12 sm:py-24 bg-[#0e5457]">
      {/* Simple gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ecfccb] to-transparent opacity-30" />

      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#ecfccb] mb-4 sm:mb-6 drop-shadow-lg ${ubuntu.className}`}>
          Our Programs
        </h2>
        <p className={`text-white/90 max-w-3xl mx-auto text-base sm:text-lg ${nunito.className}`}>
          Empowering children through counseling and environmental awareness
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          speed={600}
          slidesPerView={1.8}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              coverflowEffect: {
                depth: 50,
                modifier: 1.5,
              }
            },
            640: {
              slidesPerView: 1.5,
              coverflowEffect: {
                depth: 80,
                modifier: 2,
              }
            },
            1024: {
              slidesPerView: 1.8,
              coverflowEffect: {
                depth: 100,
                modifier: 2.5,
              }
            },
          }}
          className="py-8"
        >
          {programsContent.map((program, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  animate={{
                    scale: isActive ? 1 : 0.9,
                    opacity: isActive ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-white shadow-xl overflow-hidden transform transition-all duration-500"
                >
                  <div className="relative h-52 sm:h-64">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6 bg-white">
                    <h3 className={`text-lg sm:text-xl font-bold text-[#0e5457] mb-2 ${ubuntu.className}`}>
                      {program.title}
                    </h3>
                    <p className={`text-gray-600 text-sm mb-4 line-clamp-2 ${nunito.className}`}>
                      {program.description}
                    </p>
                    <button className={`text-sm text-[#0e5457] hover:text-[#ecfccb] transition-colors ${nunito.className}`}>
                      View Program
                    </button>
                  </div>
                </motion.div>
              )}
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !text-[#0e5457] opacity-50 hover:opacity-100 transition-opacity"></div>
          <div className="swiper-button-next !text-[#0e5457] opacity-50 hover:opacity-100 transition-opacity"></div>
        </Swiper>
      </div>

      {/* Custom styles for pagination and navigation */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #0e5457 !important;
          opacity: 0.6;
          width: 8px;
          height: 8px;
        }
        .swiper-pagination-bullet-active {
          background-color: #0e5457 !important;
          opacity: 1;
        }
        .swiper-button-next,
        .swiper-button-prev {
          transform: scale(0.7);
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 24px !important;
        }
      `}</style>
    </div>
  );
}

export default OurPrograms;