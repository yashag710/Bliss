"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Ubuntu } from "next/font/google";
import { Nunito } from "next/font/google";
import { motion } from "framer-motion";

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const slides = [
  {
    title: "BLISS 2025",
    text: "BLISS 2025 generates estimates of the schooling status of children aged 3 to 16 years.",
    image: "/images/first.jpg",
  },
  {
    title: "Education for All",
    text: "Empowering children through education and community support.",
    image: "/images/second.jpg",
  },
  {
    title: "Brighter Future",
    text: "Ensuring every child has access to quality learning opportunities.",
    image: "/images/third.jpg",
  },
];

const Front: React.FC = () => {
  return (
    <div className="relative w-full h-[80vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative w-full h-full">
              <Image 
                src={slide.image} 
                alt={slide.title} 
                fill
                className="object-cover object-top" 
                priority
              />
            </div>
            <div className="absolute inset-0 bg-black/50 flex items-center">
              <div className="text-white max-w-xl p-4 sm:p-6 ml-4 sm:ml-10">
                <motion.h1 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white ${ubuntu.className}`}
                >
                  {slide.title}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className={`text-base sm:text-lg mt-2 sm:mt-3 text-white/90 ${nunito.className}`}
                >
                  {slide.text}
                </motion.p>
                <motion.button 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className={`mt-4 sm:mt-2 py-2 text-white text-sm sm:text-lg hover:text-white/80 transition ${nunito.className}`}
                >
                  Read more
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev text-white opacity-50 hover:opacity-100 transition-opacity"></div>
        <div className="swiper-button-next text-white opacity-50 hover:opacity-100 transition-opacity"></div>
      </Swiper>

      {/* Custom styles for pagination and navigation */}
      <style jsx>{`
        :global(.swiper-pagination-bullet) {
          background-color: white !important;
          opacity: 0.6;
        }
        :global(.swiper-pagination-bullet-active) {
          background-color: white !important;
          opacity: 1;
        }
        :global(.swiper-button-next), :global(.swiper-button-prev) {
          color: rgba(255, 255, 255, 0.5) !important;
        }
        :global(.swiper-button-next:hover), :global(.swiper-button-prev:hover) {
          color: white !important;
        }
      `}</style>
    </div>
  );
};

export default Front;
