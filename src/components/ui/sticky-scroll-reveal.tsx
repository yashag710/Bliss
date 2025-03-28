"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/Utils/cn";
import Image from "next/image";

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
    image: string;
  }[];
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  return (
    <motion.div
      className="h-[40rem] overflow-y-auto flex justify-center relative space-x-10 rounded-xl p-10 bg-[#006064]/20 backdrop-blur-sm custom-scrollbar border border-[#E0F2F1]/20"
      ref={ref}
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(224, 242, 241, 0.2) transparent',
      }}
    >
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(224, 242, 241, 0.2);
          border-radius: 3px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(224, 242, 241, 0.3);
        }
      `}</style>
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-24">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="text-3xl font-bold text-white drop-shadow-md"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="text-lg text-[#E0F2F1] max-w-xl mt-8 leading-relaxed font-medium"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        className="hidden lg:block h-[32rem] w-96 rounded-xl bg-[#006064]/10 sticky top-10 overflow-hidden border border-[#E0F2F1]/20 shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <Image
          src={content[activeCard].image}
          alt={content[activeCard].title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </motion.div>
  );
};