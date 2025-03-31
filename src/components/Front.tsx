"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Ubuntu } from "next/font/google";
import { Nunito } from "next/font/google";
import { Dancing_Script } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const dancing_Script = Dancing_Script({ subsets: ['latin'], weight: ['400', '500', '700'] });

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
        modules={[Autoplay, Pagination, Navigation]} // Add Navigation module
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }} // Navigation buttons
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
                <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 ${ubuntu.className}`}>
                  {slide.title}
                </h1>
                <p className={`text-base sm:text-lg mt-2 sm:mt-3 ${nunito.className}`}>
                  {slide.text}
                </p>
                <button className={`mt-4 sm:mt-5 py-2 text-[#F8F7BE] text-2xl sm:text-3xl hover:text-yellow-300 transition ${dancing_Script.className}`}>
                  Read more
                </button>
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
          background-color: #F8F7BE !important; /* Change pagination dots to match theme */
          opacity: 0.6;
        }
        :global(.swiper-pagination-bullet-active) {
          background-color: #FFD700 !important; /* Active dot in yellow */
        }
        :global(.swiper-button-next), :global(.swiper-button-prev) {
          color: rgba(255, 255, 255, 0.5) !important; /* Light faded arrows */
        }
        :global(.swiper-button-next:hover), :global(.swiper-button-prev:hover) {
          color: #F8F7BE !important; /* Brighten on hover */
        }
      `}</style>
    </div>
  );
};

export default Front;
