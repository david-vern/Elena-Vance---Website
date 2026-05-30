import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data';
import { FaqItem } from '../types';

export default function Accordion() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'coaching' | 'logistics' | 'pricing'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const filteredFaqs = activeCategory === 'all'
    ? FAQS
    : FAQS.filter(faq => faq.category === activeCategory);

  const categories = [
    { value: 'all', label: 'All Inquiries' },
    { value: 'coaching', label: 'Coaching Approach' },
    { value: 'logistics', label: 'Session Logistics' },
    { value: 'pricing', label: 'Investment & Rates' }
  ];

  return (
    <div className="space-y-8" id="faq-interactive-matrix">
      {/* Category selector capsules */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => {
              setActiveCategory(cat.value as any);
              setExpandedId(null);
            }}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === cat.value
                ? 'bg-[#7A8B72] text-white shadow-sm'
                : 'bg-white border border-[#EAE3D8] text-[#2D2D2D]/70 hover:border-[#7A8B72]/40 hover:text-[#2D2D2D]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion Questions */}
      <div className="max-w-3xl mx-auto space-y-3">
        {filteredFaqs.map((faq, index) => {
          const isOpen = expandedId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border bg-white transition-all duration-300 ${
                isOpen 
                  ? 'border-[#7A8B72] shadow-sm' 
                  : 'border-[#EAE3D8] hover:border-[#7A8B72]/40'
              }`}
              id={`faq-item-${faq.id}`}
            >
              <button
                onClick={() => toggleExpand(faq.id)}
                className="w-full flex items-center justify-between text-left p-5 md:p-6 focus:outline-none cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="font-serif font-semibold text-sm md:text-base text-[#2D2D2D]">
                  {faq.question}
                </span>
                <span className={`h-8 w-8 rounded-full bg-[#F8F5F0] flex items-center justify-center shrink-0 ml-4 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-[#7A8B72] text-white' : 'text-[#2D2D2D]/60'
                }`}>
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 md:px-6 md:pb-6 text-xs md:text-sm text-[#2D2D2D]/75 leading-relaxed border-t border-[#F8F5F0] pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
