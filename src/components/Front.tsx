"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Ubuntu } from "next/font/google";
import { Inter } from "next/font/google";
import { Dancing_Script } from "next/font/google";
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });
const dancing_Script = Dancing_Script({ subsets: ['latin'], weight: ['400', '500', '700']});
const slides = [
  {
    title: "ASER 2024",
    text: "ASER 2024 generates estimates of the schooling status of children aged 3 to 16 years.",
    image: "/images/4.png",
  },
  {
    title: "Education for All",
    text: "Empowering children through education and community support.",
    image: "/images/2.png",
  },
  {
    title: "Brighter Future",
    text: "Ensuring every child has access to quality learning opportunities.",
    image: "/images/3.png",
  },
];
const Front: React.FC = () => {
  return (
    <div className="relative w-full h-[550px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <Image src={slide.image} alt={slide.title} fill={true}/>
            <div className="absolute inset-0 bg-black/50 flex items-center">
              <div className="text-white max-w-xl p-6 ml-10">
                <h1 className={`text-4xl font-bold text-yellow-400 ${ubuntu.className} text-5xl`}>{slide.title}</h1>
                <p className={`text-lg mt-3 ${inter.className}`}>{slide.text}</p>
                <button className={`mt-5 py-2 text-[#F8F7BE] text-3xl hover:text-yellow-300 transition ${dancing_Script.className}`}>
                  Read more
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Front;
