import React from 'react';
import { motion } from 'motion/react';
import { STATISTICS } from '../data';
import { ShieldCheck, Award, Heart, Sparkles } from 'lucide-react';

export default function StatsSection() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Award className="h-5 w-5 text-[#C8A96B]" />;
      case 1: return <Heart className="h-5 w-5 text-[#C8A96B]" />;
      case 2: return <ShieldCheck className="h-5 w-5 text-[#C8A96B]" />;
      default: return <Sparkles className="h-5 w-5 text-[#C8A96B]" />;
    }
  };

  return (
    <section className="bg-white py-16 md:py-20 border-y border-[#EAE3D8]" id="trust-metrics">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATISTICS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center space-y-2 flex flex-col items-center pt-6 border-t border-[#EAE3D8] w-full"
              id={`stat-item-${index}`}
            >
              <div className="h-10 w-10 rounded-full bg-[#F8F5F0] flex items-center justify-center mb-1">
                {getIcon(index)}
              </div>
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#C8A96B] tracking-tight">
                {stat.value}
              </p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-[#2D2D2D] opacity-60 mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
