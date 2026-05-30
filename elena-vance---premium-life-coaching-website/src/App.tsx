import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Star, 
  Heart,
  PhoneCall, 
  ClipboardSignature, 
  Compass, 
  Send,
  Linkedin,
  Instagram,
  Youtube,
  Feather,
  ArrowUpRight
} from 'lucide-react';

import { COACH_INFO, SERVICES, BENEFITS, PROCESS_STEPS } from './data';
import Navbar from './components/Navbar';
import StatsSection from './components/StatsSection';
import ServiceCard from './components/ServiceCard';
import TestimonialCarousel from './components/TestimonialCarousel';
import InteractiveQuiz from './components/InteractiveQuiz';
import Accordion from './components/Accordion';
import BookingModal from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  
  // Newsletter subscription states
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const openBookingForService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setBookingModalOpen(true);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      // Persist client subscribers to local storage!
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
      localStorage.setItem('newsletter_subscribers', JSON.stringify([...subscribers, newsletterEmail]));
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 5000);
    }
  };

  // Process timeline icon loader
  const renderProcessIcon = (iconName: string) => {
    switch (iconName) {
      case 'PhoneCall':
        return <PhoneCall className="h-6 w-6 text-[#7A8B72]" />;
      case 'ClipboardSignature':
        return <ClipboardSignature className="h-6 w-6 text-[#7A8B72]" />;
      default:
        return <Compass className="h-6 w-6 text-[#7A8B72]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#2D2D2D] font-sans antialiased overflow-x-hidden selection:bg-[#7A8B72]/15 relative">
      
      {/* 1. Header Navigation */}
      <Navbar onBookClick={() => openBookingForService('')} />

      {/* 2. Hero Section */}
      <section 
        id="hero" 
        className="relative min-h-[95vh] md:min-h-screen flex items-center justify-center pt-28 pb-16 md:py-24 overflow-hidden"
      >
        {/* Subtle organic light accent gradients */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#7A8B72]/5 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-[#C8A96B]/5 rounded-full filter blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
          
          {/* Hero text branding column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-white rounded-full shadow-sm border border-[#EAE3D8]"
              >
                <span className="w-2 h-2 rounded-full bg-[#7A8B72]" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#7A8B72]">Trustworthy Executive Mentality</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2D2D2D] tracking-tight leading-[1.08] font-bold"
              >
                Transform Your Life <br className="hidden sm:inline" />
                With Clarity, <br className="hidden sm:inline" />
                Confidence & <span className="text-[#7A8B72] italic font-normal">Purpose</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-base text-[#2D2D2D]/75 leading-relaxed max-w-xl font-light scale-[0.98] origin-left"
              >
                Align your career horizons, recover emotional equilibrium, and build lifelong systems of sustainable personal growth with <strong className="text-[#2D2D2D] font-medium">Elena Vance</strong>, Internationally Certified Executive Alignment Coach.
              </motion.p>
            </div>

            {/* Clickable Action Ribbons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={() => openBookingForService('')}
                className="px-10 py-5 bg-[#7A8B72] hover:bg-[#687860] text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#7A8B72]/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
                id="hero-book-free-session-btn"
              >
                Book a Free Discovery Call <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#about"
                className="px-10 py-5 border border-[#EAE3D8] hover:border-[#7A8B72] hover:bg-white text-xs font-bold uppercase tracking-widest transition-all text-center rounded-full text-[#2D2D2D]"
              >
                Learn More
              </a>
            </motion.div>

            {/* Supporting Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex items-center gap-6 pt-4 text-[#2D2D2D]/60"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#C8A96B]" />
                <span className="text-[10px] font-mono uppercase tracking-wider">ICF MCC Accredited</span>
              </div>
              <div className="h-4 w-[1px] bg-[#EAE3D8]" />
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-[#C8A96B]" />
                <span className="text-[10px] font-mono uppercase tracking-wider">Fully Confident Paths</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Portrait column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-sm md:max-w-md aspect-[3/4]"
            >
              {/* Backing styling shape for portrait */}
              <div className="absolute inset-0 border border-[#C8A96B]/20 rounded-[2.5rem] translate-x-4 translate-y-4" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#EAE3D8] rounded-[2rem] -z-10" />

              <img
                src={COACH_INFO.portrait}
                alt="Elena Vance - Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[2.5rem] border-4 border-white shadow-xl relative z-10"
              />
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. Trust Section (Statistics) */}
      <StatsSection />

      {/* 4. About Section */}
      <section id="about" className="py-20 md:py-28 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative order-last lg:order-first flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-sm md:max-w-md aspect-[4/5] bg-white p-4 rounded-3xl border border-[#EAE3D8] shadow-sm"
            >
              <div className="absolute -top-3 -right-3 h-10 w-10 bg-[#C8A96B] rounded-full flex items-center justify-center text-white font-serif italic text-lg shadow-sm">
                EV
              </div>
              
              <img
                src={COACH_INFO.portrait}
                alt="Elena Vance Counseling Session"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-2xl filter brightness-95"
              />
            </motion.div>
          </div>

          {/* Story Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#C8A96B] uppercase tracking-widest font-semibold">MEET YOUR COACH</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2D2D2D] tracking-tight">
                Authentic, Human-Centered Alignment Frameworks.
              </h2>
            </div>

            <div className="h-0.5 w-16 bg-[#7A8B72]" />

            <div className="space-y-4 text-[#2D2D2D]/80 leading-relaxed font-light text-sm md:text-base">
              <p>
                Hello and welcome to your sanctuary. I am <strong className="font-semibold text-[#2D2D2D]">{COACH_INFO.name}</strong>, a Master Certified Coach. I believe that your professional achievements should never demand the sacrifice of your mental wellbeing, core relationships, or deep personal vitality.
              </p>
              <p>
                {COACH_INFO.bioLong}
              </p>
              <p>
                Together, we do not merely talk about boundaries; we systematically rewrite the habits, cognitive barriers, and situational structures that currently hold you in stagnation. Every container is designed to give you rigorous clarity and long-tem behavioral agency.
              </p>
            </div>

            {/* Signature Block */}
            <div className="pt-4 flex items-center gap-4">
              <div className="space-y-0.5">
                <p className="font-serif italic text-xl text-[#2D2D2D] font-semibold">Elena Vance</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#7A8B72] font-semibold">{COACH_INFO.title}</p>
              </div>
              <div className="h-8 w-[1px] bg-[#EAE3D8]" />
              <div className="text-xs text-[#2D2D2D]/60 whitespace-nowrap leading-relaxed">
                Featured Coach on Medium <br />
                Contributor to ICF Mentors
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Services Section */}
      <section id="services" className="py-20 md:py-28 bg-white border-y border-[#EAE3D8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-12">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-mono text-[#C8A96B] uppercase tracking-widest font-semibold">CURATED CONTAINERS</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2D2D2D] tracking-tight">
              Elite Coaching Programs Crafted for Your Stage
            </h2>
            <div className="h-0.5 w-16 bg-[#7A8B72] mx-auto" />
            <p className="text-[#2D2D2D]/70 text-xs md:text-sm max-w-xl mx-auto leading-relaxed font-light">
              We offer bespoke, high-end coaching pathways designed around intensive emotional alignment and sharp structural action. Select a container to review inclusions.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index} 
                onBookService={openBookingForService} 
              />
            ))}
          </div>

          {/* Interactive Advisory Quiz Centerpiece */}
          <div className="pt-8 max-w-4xl mx-auto">
            <InteractiveQuiz onSelectServiceAndBook={openBookingForService} />
          </div>

        </div>
      </section>

      {/* 6. Benefits & Client Transformation Section */}
      <section id="benefits" className="py-20 md:py-28 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 gap-12 lg:gap-16 items-center grid grid-cols-1 lg:grid-cols-12">
          
          {/* Headline and Narrative */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#C8A96B] uppercase tracking-widest font-semibold">THE TRANSFORMATION</span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#2D2D2D] tracking-tight">
                Sustainable Growth That Resonates in Every Aspect of Your Day.
              </h2>
            </div>
            <p className="text-[#2D2D2D]/75 text-sm md:text-base leading-relaxed font-light">
              Premium life coaching is not merely self-talk. It is the tactical restructuring of your neurological networks and everyday behaviors to ensure alignment, joy, and peace.
            </p>
            <div className="pt-2">
              <button
                onClick={() => openBookingForService('')}
                className="px-6 py-3 border border-[#7A8B72] text-[#7A8B72] hover:bg-[#7A8B72] hover:text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                Inquire Alignment Container <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Visual Grid of Benefits */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {BENEFITS.map((benefit, bIdx) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: bIdx * 0.1 }}
                className="bg-white border border-[#EAE3D8] p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all group hover:border-[#7A8B72]/30 text-left"
                id={`benefit-card-${benefit.id}`}
              >
                <div className="space-y-3">
                  <div className="h-8 w-8 rounded-full bg-[#7A8B72]/10 text-[#7A8B72] flex items-center justify-center font-mono text-xs font-bold font-serif">
                    0{bIdx + 1}
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-[#2D2D2D]">{benefit.title}</h4>
                  <p className="text-xs text-[#2D2D2D]/70 leading-relaxed font-light">{benefit.description}</p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#F8F5F0]">
                  <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-[#C8A96B] bg-[#F8F5F0] px-2 py-1 rounded">
                    {benefit.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Coaching Process Timeline */}
      <section id="process" className="py-20 md:py-28 bg-white border-y border-[#EAE3D8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-16">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-mono text-[#C8A96B] uppercase tracking-widest font-semibold">HOW WE COLLABORATE</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2D2D2D] tracking-tight">
              A 3-Step Journey to Real Empowerment
            </h2>
            <div className="h-0.5 w-16 bg-[#7A8B72] mx-auto" />
            <p className="text-[#2D2D2D]/70 text-xs md:text-sm max-w-xl mx-auto leading-relaxed font-light">
              An elegant, streamlined process designed to maximize your time investment and ensure exceptional mutual chemistry.
            </p>
          </div>

          {/* Timeline Visual Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {/* Background connecting timeline line desktop */}
            <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-[1px] bg-[#EAE3D8] -z-10" />

            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#F8F5F0] border border-[#EAE3D8] rounded-2xl p-6 md:p-8 space-y-6 text-left relative"
                id={`process-step-${idx}`}
              >
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center border border-[#EAE3D8] shadow-sm">
                    {renderProcessIcon(step.iconName)}
                  </div>
                  <span className="font-serif font-black text-2xl text-[#C8A96B]/55">
                    {step.number}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-xl font-semibold text-[#2D2D2D]">{step.title}</h4>
                  <p className="text-xs text-[#2D2D2D]/75 leading-relaxed font-light">{step.description}</p>
                </div>

                <div className="pt-4 border-t border-[#EAE3D8]/60 flex items-center justify-between text-[11px] font-mono tracking-wider">
                  <p className="text-[#2D2D2D]/50 uppercase">Timeline Frame</p>
                  <p className="text-[#7A8B72] font-semibold uppercase">{step.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-28 bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12 text-center">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-mono text-[#C8A96B] uppercase tracking-widest font-semibold">CLIENT STORIES</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2D2D2D] tracking-tight">
              Testimonials of Measured Break-Throughs
            </h2>
            <div className="h-0.5 w-16 bg-[#7A8B72] mx-auto" />
            <p className="text-[#2D2D2D]/70 text-xs md:text-sm max-w-xl mx-auto leading-relaxed font-light">
              Hear directly from creative directors, tech founders, and doctors who repurposed their boundaries and reclaimed focus.
            </p>
          </div>

          {/* Testimonial Slider element */}
          <TestimonialCarousel />

        </div>
      </section>

      {/* 9. FAQ Section */}
      <section id="faq" className="py-20 md:py-28 bg-white border-y border-[#EAE3D8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="space-y-4 max-w-2xl mx-auto text-center">
            <span className="text-xs font-mono text-[#C8A96B] uppercase tracking-widest font-semibold">HAVE QUESTIONS?</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2D2D2D] tracking-tight">
              Philosophy & Logistics Explained
            </h2>
            <div className="h-0.5 w-16 bg-[#7A8B72] mx-auto" />
            <p className="text-[#2D2D2D]/70 text-xs md:text-sm max-w-xl mx-auto leading-relaxed font-light">
              Answers regarding coaching differences, container terms, flexible pricing installments, and calendar sessions.
            </p>
          </div>

          <Accordion />

        </div>
      </section>

      {/* 10. Final CTA Section */}
      <section id="cta" className="relative py-24 md:py-32 overflow-hidden text-center text-white bg-gradient-to-t from-black/80 to-black/60">
        
        {/* Background Image using the generated high end Workspace */}
        <div className="absolute inset-0 z-0">
          <img
            src={COACH_INFO.workspace}
            alt="Elena Vance Sanctuary Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter brightness-[0.22] blur-[1px]"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#C8A96B] uppercase tracking-widest font-bold">YOUR TIME IS NOW</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Design a Life of Uncompromising <br /> Depth & Purpose.
            </h2>
          </div>

          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
            Do not let another quarter slip into run-on defenses or compromise. Let's arrange a complimentary dialogue and see how we align.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <button
               onClick={() => openBookingForService('')}
              className="w-full sm:w-auto px-10 py-5 bg-[#7A8B72] hover:bg-[#687860] text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#7A8B72]/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="cta-book-call-btn"
            >
              Book complimentary Discovery Call <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#services"
              className="w-full sm:w-auto px-10 py-5 border border-white/20 hover:border-white hover:bg-white/10 text-white font-bold rounded-full text-xs uppercase tracking-widest transition-all"
            >
              Review Program Rates
            </a>
          </div>
        </div>
      </section>

      {/* 11. Custom Newsletter Banner before Footer */}
      <section className="bg-[#EAE3D8]/40 border-b border-[#EAE3D8] py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-12 items-center justify-between gap-8 flex flex-col md:flex-row">
          <div className="text-left space-y-1">
            <h4 className="font-serif text-xl font-semibold text-[#2D2D2D] flex items-center gap-2">
              <Feather className="h-4 w-4 text-[#7A8B72]" /> Subscribe The Sunday Sanctuary
            </h4>
            <p className="text-xs text-[#2D2D2D]/60 max-w-md">Weekly micro-lessons, reflective prompts, and priority VIP container openings delivered in premium, clutter-free text directly to your email inbox.</p>
          </div>

          <form onSubmit={handleSubscribe} className="relative w-full max-w-md flex items-center">
            <input
              type="email"
              required
              placeholder="julian@inspiredlife.com"
              value={newsletterEmail}
              onChange={e => setNewsletterEmail(e.target.value)}
              className="w-full pl-5 pr-36 py-3.5 text-xs rounded-xl border border-[#EAE3D8] bg-white text-[#2D2D2D] focus:outline-none focus:border-[#7A8B72] shadow-sm font-sans"
            />
            <button
              type="submit"
              className="absolute right-1.5 px-4 py-2 bg-[#7A8B72] hover:bg-[#687860] text-white rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer flex items-center gap-1 shadow-sm"
              id="subscribe-newsletter-btn"
            >
              Subscribe <Send className="h-3 w-3" />
            </button>
          </form>
        </div>
        
        {/* Subtle subscribe notification toast inside banner */}
        <AnimatePresence>
          {newsletterSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 text-center text-xs text-[#7A8B72] font-semibold flex items-center justify-center gap-1"
            >
              ✔ Subscription secured! Welcome to the Sunday Sanctuary list.
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 12. Elegant Minimalist Footer */}
      <footer className="bg-white py-16 text-[#2D2D2D]" id="footer-section">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#F8F5F0] pb-12 text-left">
          
          {/* Logo Brand Column */}
          <div className="space-y-4">
            <a href="#hero" className="flex items-center gap-2 group">
              <span className="font-serif text-lg tracking-widest uppercase font-bold text-[#2D2D2D]">
                ELENA <span className="text-[#C8A96B] font-light">VANCE</span>
              </span>
              <div className="h-1.5 w-1.5 rounded-full bg-[#C8A96B]" />
            </a>
            <p className="text-xs text-[#2D2D2D]/60 leading-relaxed font-light max-w-xs">
              Dedicated to bringing luxury personal alignment, executive wellness structures, and authentic growth to teams and individuals worldwide.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 text-[#2D2D2D]/60 pt-2">
              <a href="#" className="hover:text-[#7A8B72] transition-colors" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="hover:text-[#7A8B72] transition-colors" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="hover:text-[#7A8B72] transition-colors" aria-label="YouTube"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Quick Nav Options */}
          <div className="space-y-4">
            <h5 className="font-serif font-bold text-xs uppercase tracking-widest text-[#2D2D2D]">Navigation</h5>
            <ul className="text-xs space-y-2.5 text-[#2D2D2D]/70 font-light">
              <li><a href="#hero" className="hover:text-[#7A8B72] transition-colors">Sanctuary Home</a></li>
              <li><a href="#about" className="hover:text-[#7A8B72] transition-colors">Philosophy & Story</a></li>
              <li><a href="#services" className="hover:text-[#7A8B72] transition-colors">Coaching Offerings</a></li>
              <li><a href="#process" className="hover:text-[#7A8B72] transition-colors">Strategic Timeline</a></li>
            </ul>
          </div>

          {/* Support and FAQ anchor */}
          <div className="space-y-4">
            <h5 className="font-serif font-bold text-xs uppercase tracking-widest text-[#2D2D2D]">Legal & Terms</h5>
            <ul className="text-xs space-y-2.5 text-[#2D2D2D]/70 font-light">
              <li><a href="#faq" className="hover:text-[#7A8B72] transition-colors">Inquiry & Accordions</a></li>
              <li><a href="#" className="hover:text-[#7A8B72] transition-colors">Terms of Mentorship</a></li>
              <li><a href="#" className="hover:text-[#7A8B72] transition-colors">Privacy and Disclosure</a></li>
              <li><a href="#" className="hover:text-[#7A8B72] transition-colors">Client Code of Honor</a></li>
            </ul>
          </div>

          {/* Direct Address/Contact Cards */}
          <div className="space-y-4">
            <h5 className="font-serif font-bold text-xs uppercase tracking-widest text-[#2D2D2D]">Sanctuary Contacts</h5>
            <ul className="text-xs space-y-3.5 text-[#2D2D2D]/75 leading-relaxed font-light">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#7A8B72] shrink-0" />
                <a href={`mailto:${COACH_INFO.email}`} className="hover:text-[#7A8B72] transition-colors">{COACH_INFO.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#7A8B72] shrink-0" />
                <a href={`tel:${COACH_INFO.phone}`} className="hover:text-[#7A8B72] transition-colors">{COACH_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#7A8B72] shrink-0" />
                <span>{COACH_INFO.office}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Brand signature copyright */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 text-center text-[10px] text-[#2D2D2D]/50 flex flex-col sm:flex-row items-center justify-between gap-4 font-light">
          <p>© {new Date().getFullYear()} Elena Vance Coaching. All rights reserved globally.</p>
          <p className="flex items-center gap-1.5 justify-center">
            Designed with <span className="text-[#C8A96B] font-bold text-[11px]">♥</span> for premium alignment.
          </p>
        </div>
      </footer>

      {/* Floating high conversion booking button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => openBookingForService('')}
          className="h-12 w-12 rounded-full bg-[#7A8B72] hover:bg-[#687860] text-white shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer group hover:scale-105"
          title="Schedule Alignment Call"
          id="floating-book-call-btn"
        >
          <PhoneCall className="h-5 w-5 animate-pulse group-hover:scale-110" />
        </button>
      </div>

      {/* Onboarding Dialog modal controller */}
      <BookingModal 
        isOpen={bookingModalOpen} 
        onClose={() => setBookingModalOpen(false)} 
        preSelectedServiceId={selectedServiceId} 
      />

    </div>
  );
}
