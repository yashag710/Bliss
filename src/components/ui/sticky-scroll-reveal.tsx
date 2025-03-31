"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { Ubuntu, Nunito } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

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
    // Calculate breakpoints for each card
    const cardsBreakpoints = content.map((_, index) => {
      // Start from 0 and increment by 1/cardLength
      return index / (cardLength - 1);
    });

    // Find the active card based on scroll position
    for (let i = 0; i < cardsBreakpoints.length; i++) {
      if (latest <= cardsBreakpoints[i]) {
        setActiveCard(i);
        break;
      }
      // If we're at the last card and past its breakpoint
      if (i === cardsBreakpoints.length - 1) {
        setActiveCard(i);
      }
    }
  });

  return (
    <motion.div
      className="h-[40rem] overflow-y-auto flex justify-center relative space-x-10 rounded-xl p-10 bg-[#0e5457]/20 backdrop-blur-sm custom-scrollbar border border-[#E0F2F1]/20"
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
                className={`text-3xl font-bold text-white drop-shadow-md ${ubuntu.className}`}
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
                className={`text-lg text-[#E0F2F1] max-w-xl mt-8 leading-relaxed font-medium ${nunito.className}`}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        className="hidden lg:block h-[32rem] w-96 rounded-xl bg-[#0e5457]/10 sticky top-10 overflow-hidden border border-[#E0F2F1]/20 shadow-2xl"
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