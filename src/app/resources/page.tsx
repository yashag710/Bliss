"use client";
import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0e5457] to-[#006064] flex items-center justify-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto"
      >
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-[#F8F7BE]/5 blur-xl rounded-full"></div>
          <FaLeaf className="w-16 h-16 text-[#E0F2F1] mx-auto relative" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Coming Soon
        </h1>
        <p className="text-lg sm:text-xl text-[#E0F2F1]/90 max-w-md mx-auto">
          We're preparing something special for you
        </p>
      </motion.div>
    </div>
  );
};

export default Resources;