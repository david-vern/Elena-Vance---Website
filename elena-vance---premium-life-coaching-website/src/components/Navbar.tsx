import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { COACH_INFO } from '../data';

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Sanctuary', href: '#hero' },
    { label: 'Philosophy', href: '#about' },
    { label: 'Offerings', href: '#services' },
    { label: 'Dialogue Matrix', href: '#process' },
    { label: 'Transformations', href: '#testimonials' },
    { label: 'Inquiries', href: '#faq' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#F8F5F0]/90 backdrop-blur-md shadow-sm border-b border-[#EAE3D8] py-4' 
            : 'bg-transparent py-6'
        }`}
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <span className="font-serif text-xl tracking-widest uppercase font-bold text-[#2D2D2D]">
              ELENA <span className="text-[#C8A96B] font-light">VANCE</span>
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-[#C8A96B] transition-transform duration-300 group-hover:scale-150" />
          </a>

          {/* Nav Links Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-xs uppercase tracking-widest font-medium text-[#2D2D2D]/70 hover:text-[#2D2D2D] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#7A8B72] after:scale-x-0 hover:after:scale-x-100 after:origin-right hover:after:origin-left hover:after:transition-transform duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onBookClick}
              className="px-6 py-3 border border-[#EAE3D8] rounded-full hover:bg-[#EAE3D8] bg-white text-[#2D2D2D] text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 cursor-pointer shadow-sm"
              id="desktop-book-call-nav-btn"
            >
              Book Call <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Mobile Hamburguer */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#2D2D2D] p-1 cursor-pointer"
            aria-label="Toggle menu"
            id="mobile-menu-toggle-btn"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-0 pt-24 pb-8 bg-[#F8F5F0] border-b border-[#EAE3D8] shadow-lg z-30 lg:hidden"
            id="mobile-dropdown-menu"
          >
            <div className="px-6 flex flex-col gap-6 align-center text-center">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-lg py-1.5 text-[#2D2D2D]/80 hover:text-[#2D2D2D] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="h-[1px] bg-[#EAE3D8] my-2" />
              <button
                onClick={() => {
                  setIsOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 border border-[#EAE3D8] hover:bg-[#EAE3D8] text-[#2D2D2D] bg-white rounded-full text-xs font-semibold uppercase tracking-widest transition-all cursor-pointer shadow-sm"
                id="mobile-book-call-nav-btn"
              >
                Book Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
