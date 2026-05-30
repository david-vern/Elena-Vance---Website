import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { Service } from '../types';
import { ArrowUpRight, HelpCircle, ChevronDown, Check } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index: number;
  onBookService: (id: string) => void;
  key?: React.Key | any;
}

export default function ServiceCard({ service, index, onBookService }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Dynamic Lucide dynamic icon resolver
  const getIcon = (name: string) => {
    const IconComponent = (Icons as any)[name];
    if (IconComponent) {
      return <IconComponent className="h-6 w-6 text-[#7A8B72]" />;
    }
    return <Icons.Sparkles className="h-6 w-6 text-[#7A8B72]" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`rounded-[40px] border bg-white p-8 md:p-9 transition-all duration-300 relative flex flex-col justify-between ${
        isExpanded 
          ? 'border-[#7A8B72] shadow-md ring-1 ring-[#7A8B72]/10' 
          : 'border-[#EAE3D8] shadow-sm hover:shadow-md hover:border-[#7A8B72]/40'
      }`}
      id={`service-card-${service.id}`}
    >
      <div className="space-y-4">
        {/* Top bar with icon and gold tag */}
        <div className="flex items-center justify-between">
          <div className="h-12 w-12 rounded-xl bg-[#F8F5F0] flex items-center justify-center border border-[#EAE3D8]/60">
            {getIcon(service.iconName)}
          </div>
          <span className="font-mono text-xs font-semibold text-[#C8A96B] tracking-wider bg-[#F8F5F0] px-2.5 py-1 rounded-full border border-[#EAE3D8]/50">
            {service.duration}
          </span>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h4 className="font-serif text-xl font-semibold text-[#2D2D2D] tracking-tight">{service.title}</h4>
          <p className="text-sm text-[#2D2D2D]/85 leading-relaxed min-h-[50px]">{service.description}</p>
        </div>

        {/* Dynamic Accordion expand for full program description */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs md:text-sm font-semibold tracking-wide text-[#7A8B72] flex items-center gap-1.5 focus:outline-none hover:text-[#687860] cursor-pointer"
        >
          {isExpanded ? "Hide Details" : "Reveal Program Details"}
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden space-y-4 pt-2 border-t border-[#F8F5F0]"
            >
              <div className="space-y-1.5">
                <p className="text-[10px] uppercase font-mono text-[#C8A96B] tracking-wider">Methodology Framework</p>
                <p className="text-sm text-[#2D2D2D]/90 leading-relaxed">{service.longDescription}</p>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] uppercase font-mono text-[#C8A96B] tracking-wider">Included Alignments</p>
                <ul className="space-y-1.5 text-sm text-[#2D2D2D]/80">
                  {service.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="h-4 w-4 rounded-full bg-[#7A8B72]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-2.5 w-2.5 text-[#7A8B72]" />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-1 bg-[#F8F5F0]/60 p-3 rounded-lg border border-[#EAE3D8]/50 text-xs md:text-sm leading-relaxed">
                <p className="text-[#2D2D2D]/60 font-semibold">✨ Target Audience:</p>
                <p className="text-[#2D2D2D]/90">{service.suitedFor}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="pt-6 mt-6 border-t border-[#F8F5F0] flex items-center justify-between">
        <div className="space-y-0.5">
          <p className="text-[9px] uppercase font-mono tracking-widest text-[#2D2D2D]/50">Strategic Investment</p>
          <p className="font-serif font-bold text-lg text-[#2D2D2D]">{service.price} <span className="text-[10px] text-gray-400 font-sans font-normal">USD</span></p>
        </div>

        <button
          onClick={() => onBookService(service.id)}
          className="bg-[#7A8B72] text-white hover:bg-[#687860] px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-md shadow-[#7A8B72]/15 flex items-center gap-1 cursor-pointer"
          id={`book-specific-service-${service.id}`}
        >
          Book Program <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
