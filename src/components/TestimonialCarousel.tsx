import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <div className="relative max-w-4xl mx-auto" id="testimonial-interactive-carousel">
      {/* Background quote styling */}
      <div className="absolute -top-10 -left-6 md:-left-12 opacity-5 text-[#EAE3D8] pointer-events-none">
        <Quote className="h-28 w-28 md:h-36 md:w-36 fill-current" />
      </div>

      <div className="min-h-[340px] md:min-h-[280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-[#F8F5F0] border border-[#EAE3D8] rounded-3xl p-8 md:p-12 shadow-sm relative z-10 flex flex-col md:flex-row gap-8 items-center"
          >
            {/* Client Avatar Grid */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-[#C8A96B] rounded-2xl rotate-3" />
              <img
                src={current.image}
                alt={current.name}
                referrerPolicy="no-referrer"
                className="relative h-24 w-24 md:h-28 md:w-28 rounded-2xl object-cover border border-[#EAE3D8] shadow-sm"
              />
              <div className="absolute -bottom-2 -right-2 h-7 w-7 rounded-full bg-[#EAE3D8] border border-white flex items-center justify-center">
                <Quote className="h-3.5 w-3.5 text-[#7A8B72] fill-current" />
              </div>
            </div>

            {/* Testimony Text Block */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#C8A96B] text-[#C8A96B]" />
                ))}
              </div>

              <blockquote className="font-serif text-lg md:text-xl text-[#2D2D2D]/90 leading-relaxed italic">
                "{current.quote}"
              </blockquote>

              <div className="not-italic space-y-0.5">
                <cite className="font-serif font-bold text-base md:text-lg text-[#2D2D2D]">
                  {current.name}
                </cite>
                <p className="text-xs md:text-sm text-[#7A8B72] font-semibold uppercase tracking-widest">
                  {current.role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation Triggers & Dots indicator */}
      <div className="flex items-center justify-between mt-6 px-4">
        {/* Navigation Dots */}
        <div className="flex items-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                activeIndex === idx ? 'bg-[#7A8B72] w-6' : 'bg-[#EAE3D8] w-2 hover:bg-[#7A8B72]/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Action button arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="p-3 bg-white border border-[#EAE3D8] rounded-full hover:bg-[#F8F5F0] text-[#2D2D2D] shadow-sm transition-all cursor-pointer"
            aria-label="Previous testimonial"
            id="prev-testimonial-btn"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 bg-white border border-[#EAE3D8] rounded-full hover:bg-[#F8F5F0] text-[#2D2D2D] shadow-sm transition-all cursor-pointer"
            aria-label="Next testimonial"
            id="next-testimonial-btn"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
