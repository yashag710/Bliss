"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const programsContent = [
    {
      title: 'Child Counseling Services',
      description:
        'Our experienced counselors provide a safe and nurturing environment for children to express themselves. Through play therapy, art therapy, and individual counseling sessions, we help children develop emotional resilience and coping mechanisms.',
      image: '/images/child-counseling.jpg'
    },
    {
      title: 'Environmental Education',
      description:
        'We integrate environmental awareness into our counseling programs. Children learn about sustainability, climate change, and their role in protecting the planet through interactive workshops and nature-based activities.',
      image: '/images/environmental-ed.jpg'
    },
    {
      title: 'Nature Therapy Programs',
      description:
        'Experience the healing power of nature through our outdoor therapy sessions. Children connect with the environment while developing emotional well-being through guided nature walks and eco-friendly activities.',
      image: '/images/nature-therapy.jpg'
    },
    {
      title: 'Community Green Initiatives',
      description:
        'Join our community-driven environmental projects. From tree planting to waste management workshops, we empower children to become environmental stewards while building strong community bonds.',
      image: '/images/community-green.jpg'
    },
    {
      title: 'Parent-Child Bonding',
      description:
        'Strengthen family relationships through our eco-conscious family activities. Parents and children work together on environmental projects while learning effective communication and emotional support.',
      image: '/images/family-bonding.jpg'
    },
    {
      title: 'Sustainable Development',
      description:
        'Learn about sustainable practices through hands-on projects. Children develop critical thinking skills while understanding the importance of environmental conservation and sustainable living.',
      image: '/images/sustainable-dev.jpg'
    },
  ];

function OurPrograms() {
  return (
    <div className="w-full py-24 bg-gradient-to-b from-[#009688] to-[#006064]">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">Our Programs</h2>
        <p className="text-[#E0F2F1] max-w-3xl mx-auto text-lg font-medium">
          Empowering children through counseling and environmental awareness
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <StickyScroll content={programsContent} />
      </div>
    </div>
  )
}

export default OurPrograms;