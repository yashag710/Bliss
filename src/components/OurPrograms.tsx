"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const programsContent = [
    {
      title: 'Child Counseling Services',
      description:
        'Our experienced counselors provide a safe and nurturing environment for children to express themselves. Through play therapy, art therapy, and individual counseling sessions, we help children develop emotional resilience and coping mechanisms.',
      image: '/images/yoga_man.webp'
    },
    {
      title: 'Environmental Education',
      description:
        'We integrate environmental awareness into our counseling programs. Children learn about sustainability, climate change, and their role in protecting the planet through interactive workshops and nature-based activities.',
      image: '/images/yoga_woman.webp'
    },
    {
      title: 'Nature Therapy Programs',
      description:
        'Experience the healing power of nature through our outdoor therapy sessions. Children connect with the environment while developing emotional well-being through guided nature walks and eco-friendly activities.',
      image: '/images/yoga_man.webp'
    },
    {
      title: 'Sustainable Development',
      description:
        'Learn about sustainable practices through hands-on projects. Children develop critical thinking skills while understanding the importance of environmental conservation and sustainable living.',
      image: '/images/yoga_woman.webp'
    },
  ];

function OurPrograms() {
  return (
    <div className="w-full py-12 sm:py-24 bg-gradient-to-b from-[#009688] to-[#006064]">
      <div className="text-center mb-12 sm:mb-20 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">Our Programs</h2>
        <p className="text-[#E0F2F1] max-w-3xl mx-auto text-base sm:text-lg font-medium">
          Empowering children through counseling and environmental awareness
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StickyScroll content={programsContent} />
      </div>
    </div>
  )
}

export default OurPrograms;