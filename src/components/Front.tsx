"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Ubuntu } from "next/font/google";
import { Nunito } from "next/font/google";
import { Montserrat } from "next/font/google"; // Add this import
import { motion } from "framer-motion";

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['500', '600'] }); // Add this

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
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ 
          delay: 5000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true 
        }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        loop={true}
        speed={1000} // Increased transition speed
        className="w-full h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative w-full h-full">
              <Image 
                src={slide.image} 
                alt={slide.title} 
                fill
                className="object-cover object-top transition-transform duration-700" 
                priority
              />
            </div>
            <div className="absolute inset-0 bg-black/50 flex items-center">
              <div className="text-white max-w-xl p-4 sm:p-6 ml-4 sm:ml-10">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white ${ubuntu.className}`}
                >
                  {slide.title}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className={`text-base sm:text-lg mt-2 sm:mt-3 text-white/90 ${nunito.className}`}
                >
                  {slide.text}
                </motion.p>
                <motion.button 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  className={`mt-6 px-6 py-2 text-white text-sm sm:text-base uppercase tracking-wider border border-white/30 hover:bg-white/10 transition-all duration-300 ${montserrat.className} font-semibold`}
                >
                  Read more
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev text-white opacity-40 hover:opacity-100 transition-opacity duration-300"></div>
        <div className="swiper-button-next text-white opacity-40 hover:opacity-100 transition-opacity duration-300"></div>
      </Swiper>

      {/* Updated gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/40 to-transparent pointer-events-none z-10"></div>

      {/* Custom styles for navigation */}
      <style jsx>{`
        :global(.swiper-button-next), :global(.swiper-button-prev) {
          color: rgba(255, 255, 255, 0.9) !important;
          transform: scale(0.8);
          transition: all 0.3s ease;
        }
        :global(.swiper-button-next:hover), :global(.swiper-button-prev:hover) {
          color: white !important;
          transform: scale(0.9);
        }
      `}</style>
    </div>
  );
};

export default Front;
