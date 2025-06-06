"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Ubuntu, Nunito } from "next/font/google";
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaGraduationCap, FaLeaf } from "react-icons/fa";

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400', '500', '700'] });
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

interface FormData {
  studentName: string;
  age: string;
  email: string;
  phone: string;
  grade: string;
  parentName: string;
  parentPhone: string;
  concerns: string;
  preferredTime: string;
  counselingType: string;
  environmentalInterest: string;
  additionalInfo: string;
}

const GetInTouch: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    studentName: "",
    age: "",
    email: "",
    phone: "",
    grade: "",
    parentName: "",
    parentPhone: "",
    concerns: "",
    preferredTime: "",
    counselingType: "",
    environmentalInterest: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      setSubmitStatus("success");
      setFormData({
        studentName: "",
        age: "",
        email: "",
        phone: "",
        grade: "",
        parentName: "",
        parentPhone: "",
        concerns: "",
        preferredTime: "",
        counselingType: "",
        environmentalInterest: "",
        additionalInfo: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0e5457]">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <div className="absolute inset-0">
          {/* Updated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#0e5457]/50 to-[#0e5457]"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6 sm:px-8 h-full flex items-center justify-center pt-20">
          <div className="text-center">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F7BE] mb-4 drop-shadow-lg ${ubuntu.className}`}>
              Get in Touch
            </h2>
            <p className={`text-white/90 text-lg sm:text-xl ${nunito.className}`}>
              Take the first step towards a brighter future
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-[#E0F2F1]/10">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Student Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[#E0F2F1] text-xs sm:text-sm font-medium">Student Name</label>
                  <div className="relative">
                    <FaUser className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 text-[#E0F2F1] text-sm sm:text-base" />
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                      className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-white/5 border border-[#F8F7BE]/40 rounded-lg text-white placeholder-[#E0F2F1]/50 focus:outline-none focus:border-[#F8F7BE] text-xs sm:text-sm transition-colors duration-300"
                      placeholder="Enter student's name"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[#E0F2F1] text-xs sm:text-sm font-medium">Age</label>
                  <div className="relative">
                    <FaCalendar className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 text-[#E0F2F1] text-sm sm:text-base" />
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      min="5"
                      max="18"
                      className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-white/5 border border-[#F8F7BE]/40 rounded-lg text-white placeholder-[#E0F2F1]/50 focus:outline-none focus:border-[#F8F7BE] text-xs sm:text-sm transition-colors duration-300"
                      placeholder="Enter age"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[#E0F2F1] text-xs sm:text-sm font-medium">Email</label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 text-[#E0F2F1] text-sm sm:text-base" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-white/5 border border-[#F8F7BE]/40 rounded-lg text-white placeholder-[#E0F2F1]/50 focus:outline-none focus:border-[#F8F7BE] text-xs sm:text-sm transition-colors duration-300"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[#E0F2F1] text-xs sm:text-sm font-medium">Phone Number</label>
                  <div className="relative">
                    <FaPhone className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 text-[#E0F2F1] text-sm sm:text-base" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-white/5 border border-[#F8F7BE]/40 rounded-lg text-white placeholder-[#E0F2F1]/50 focus:outline-none focus:border-[#F8F7BE] text-xs sm:text-sm transition-colors duration-300"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[#E0F2F1] text-xs sm:text-sm font-medium">Grade</label>
                  <div className="relative">
                    <FaGraduationCap className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 text-[#E0F2F1] text-sm sm:text-base" />
                    <input
                      type="text"
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      required
                      className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 bg-white/5 border border-[#F8F7BE]/40 rounded-lg text-white placeholder-[#E0F2F1]/50 focus:outline-none focus:border-[#F8F7BE] text-xs sm:text-sm transition-colors duration-300"
                      placeholder="Enter current grade"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[#E0F2F1] text-xs sm:text-sm font-medium">Counseling Type</label>
                  <select
                    name="counselingType"
                    value={formData.counselingType}
                    onChange={handleChange}
                    required
                    className="w-full pl-3 sm:pl-4 py-2 sm:py-2.5 bg-white/5 border border-[#F8F7BE]/40 rounded-lg text-white focus:outline-none focus:border-[#F8F7BE] text-xs sm:text-sm transition-colors duration-300"
                  >
                    <option value="" className="bg-[#0e5457] text-white">Select counseling type</option>
                    <option className="bg-[#0e5457] text-white" value="individual">Individual Counseling</option>
                    <option className="bg-[#0e5457] text-white" value="group">Group Counseling</option>
                    <option className="bg-[#0e5457] text-white" value="family">Family Counseling</option>
                    <option className="bg-[#0e5457] text-white" value="environmental">Environmental Education</option>
                  </select>
                </div>
              </div>

              {/* Parent Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[#E0F2F1] text-xs sm:text-sm font-medium">Parent/Guardian Name</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full pl-3 sm:pl-4 py-2 sm:py-2.5 bg-white/5 border border-[#F8F7BE]/40 rounded-lg text-white placeholder-[#E0F2F1]/50 focus:outline-none focus:border-[#F8F7BE] text-xs sm:text-sm transition-colors duration-300"
                    placeholder="Enter parent/guardian name"
                  />
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[#E0F2F1] text-xs sm:text-sm font-medium">Parent/Guardian Phone</label>
                  <input
                    type="tel"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleChange}
                    required
                    className="w-full pl-3 sm:pl-4 py-2 sm:py-2.5 bg-white/5 border border-[#F8F7BE]/40 rounded-lg text-white placeholder-[#E0F2F1]/50 focus:outline-none focus:border-[#F8F7BE] text-xs sm:text-sm transition-colors duration-300"
                    placeholder="Enter parent/guardian phone"
                  />
                </div>
              </div>

              {/* Concerns and Additional Information */}
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-[#E0F2F1] text-xs sm:text-sm font-medium">Primary Concerns</label>
                <textarea
                  name="concerns"
                  value={formData.concerns}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full pl-3 sm:pl-4 py-2 sm:py-2.5 bg-white/5 border border-[#F8F7BE]/40 rounded-lg text-white placeholder-[#E0F2F1]/50 focus:outline-none focus:border-[#F8F7BE] text-xs sm:text-sm transition-colors duration-300"
                  placeholder="Please describe any concerns or specific areas you'd like to address"
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-[#E0F2F1] text-xs sm:text-sm font-medium">Environmental Interest Level</label>
                <select
                  name="environmentalInterest"
                  value={formData.environmentalInterest}
                  onChange={handleChange}
                  required
                  className="w-full pl-3 sm:pl-4 py-2 sm:py-2.5 bg-white/5 border border-[#F8F7BE]/40 rounded-lg text-white focus:outline-none focus:border-[#F8F7BE] text-xs sm:text-sm transition-colors duration-300"
                >
                  <option value="" className="bg-[#0e5457] text-white">Select interest level</option>
                  <option className="bg-[#0e5457] text-white" value="low">Low</option>
                  <option className="bg-[#0e5457] text-white" value="medium">Medium</option>
                  <option className="bg-[#0e5457] text-white" value="high">High</option>
                </select>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-[#E0F2F1] text-xs sm:text-sm font-medium">Preferred Time</label>
                <input
                  type="text"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                  className="w-full pl-3 sm:pl-4 py-2 sm:py-2.5 bg-white/5 border border-[#F8F7BE]/40 rounded-lg text-white placeholder-[#E0F2F1]/50 focus:outline-none focus:border-[#F8F7BE] text-xs sm:text-sm transition-colors duration-300"
                  placeholder="e.g., After school, Weekends"
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-[#E0F2F1] text-xs sm:text-sm font-medium">Additional Information</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={3}
                  className="w-full pl-3 sm:pl-4 py-2 sm:py-2.5 bg-white/5 border border-[#F8F7BE]/40 rounded-lg text-white placeholder-[#E0F2F1]/50 focus:outline-none focus:border-[#F8F7BE] text-xs sm:text-sm transition-colors duration-300"
                  placeholder="Any additional information you'd like to share"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-3 sm:pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#E0F2F1] text-[#0e5457] rounded-lg font-semibold hover:bg-[#E0F2F1]/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#0e5457] border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="text-center text-[#E0F2F1] mt-3 sm:mt-4 text-xs sm:text-sm">
                  Thank you for your submission! We'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="text-center text-red-300 mt-3 sm:mt-4 text-xs sm:text-sm">
                  There was an error submitting your form. Please try again.
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>

      {/* Decorative Lines */}
      <div className="relative">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#F8F7BE] to-transparent opacity-40"></div>
        <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-[#F8F7BE] to-transparent opacity-30 mx-auto -mt-[1px]"></div>
        <div className="w-1/6 h-px bg-gradient-to-r from-transparent via-[#F8F7BE] to-transparent opacity-20 mx-auto -mt-[1px]"></div>
      </div>
    </div>
  );
};

export default GetInTouch;



