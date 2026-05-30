import { Service, Testimonial, FaqItem, Benefit } from './types';
import coachPortrait from './assets/images/coach_portrait_1780141763031.png';
import coachingWorkspace from './assets/images/coaching_workspace_1780141782520.png';

export const COACH_INFO = {
  name: "Elena Vance",
  title: "Master Certified Coach (MCC)",
  tagline: "Clarifying pathways. Overcoming gridlocks. Cultivating authentic purpose.",
  bioShort: "Elena Vance is a life and leadership coach devoted to helping high-achieving individuals align professional ambition with deep personal meaning.",
  bioLong: "With 12+ years of guiding senior executives and creative directors through monumental transitions, Elena combines psychological insight with structured strategic action. She helps high-achievers move beyond comfortable routines to find a lasting balance of clarity, confidence, and ultimate personal purpose.",
  portrait: coachPortrait,
  workspace: coachingWorkspace,
  discoveryCallDuration: "30-Min Discovery Session",
  email: "elena@elenavance.co",
  phone: "+1 (555) 724-4061",
  office: "San Francisco, CA (Available Globally)"
};

export const STATISTICS = [
  { value: "12+", label: "Years of Experience" },
  { value: "750+", label: "Transformational Clients" },
  { value: "98.4%", label: "Success Rate" },
  { value: "4,200+", label: "Coaching Hours" }
];

export const SERVICES: Service[] = [
  {
    id: "personal-growth",
    title: "Personal Growth Coaching",
    description: "Break free from invisible barriers and cultivate a life rooted in deep confidence, self-compassion, and vibrant alignment.",
    longDescription: "Perfect if you are facing a subtle misalignment or standing at a crossroads. Together, we map your values and emotional triggers to build a resilient, custom system for self-mastery and inner peace.",
    benefits: [
      "Identify and deconstruct limiting beliefs",
      "Cultivate emotional intelligence and resilience",
      "Build healthy habits that naturally reinforce self-worth",
      "Design a life structure that honors your authentic self"
    ],
    iconName: "Compass",
    duration: "6 Month Program",
    price: "$3,200",
    suitedFor: "Individuals seeking emotional clarity, deeper self-awareness, and personal empowerment."
  },
  {
    id: "career-coaching",
    title: "Career & Transition Coaching",
    description: "Align your professional trajectory with your deepest core values. Navigate pivot points with absolute clarity.",
    longDescription: "Whether you are planning an industry pivot, ascending to corporate heights, or launching a venture, let's construct a clear 90-day timeline to transition seamlessly.",
    benefits: [
      "Map your core talents to rewarding career targets",
      "Master high-impact salary and role negotiations",
      "Overcome the drain of professional imposter syndrome",
      "Construct a seamless, tactical 90-day transition timeline"
    ],
    iconName: "Briefcase",
    duration: "3 Month Program",
    price: "$1,800",
    suitedFor: "Mid-to-senior professionals looking for a profound industry change or substantial internal promotion."
  },
  {
    id: "executive-coaching",
    title: "Executive & Leadership Alignment",
    description: "Ascend to complex leadership demands while sustaining emotional balance, relational empathy, and tactical vision.",
    longDescription: "For founders, C-suite executives, and senior leaders. We refine your leadership presence, build communication styles that inspire high performance, and resolve the psychological toll of executive stress.",
    benefits: [
      "Formulate a commanding, authentic leadership style",
      "Master high-stakes conflict resolution with poise",
      "Prevent executive burnout with robust emotional systems",
      "Sharpen strategic decision-making in volatile environments"
    ],
    iconName: "Crown",
    duration: "6 Month Elite Journey",
    price: "$5,500",
    suitedFor: "Corporate executives, startup founders, and senior directors seeking exceptional alignment."
  },
  {
    id: "life-transition",
    title: "Life Transition Coaching",
    description: "Honoring milestone changes—empty nesting, relocation, relationship resets, retirement—as spaces of massive renewal.",
    longDescription: "Major transitions often render our previous routines obsolete. We guide you to release old chapters with grace, rediscover your emerging strengths, and map out your next adventure with curiosity.",
    benefits: [
      "Establish deep structural anchor points in times of change",
      "Acknowledge and release grief associated with closed chapters",
      "Uncover hidden sources of joy, curiosity, and vitality",
      "Draft a structured roadmap for your next dynamic chapter"
    ],
    iconName: "Sparkles",
    duration: "4 Month Program",
    price: "$2,400",
    suitedFor: "Those undergoing significant personal resets, relocations, or profound phase shifts."
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: "greater-confidence",
    title: "Unshakable Confidence",
    description: "Replace chronic self-doubt with a quiet, robust belief in your own discernment, capabilities, and general life direction.",
    metric: "94% Report Higher Agency"
  },
  {
    id: "better-decision-making",
    title: "Sophisticated Decision Making",
    description: "Develop structural filters to cut through decision fatigue. Make high-stakes life choices representing true internal alignment.",
    metric: "2x Less Decision Fatigue"
  },
  {
    id: "clear-life-direction",
    title: "Cohesive Life Direction",
    description: "Acquire an overarching map connecting your daily routines to your long-term legacy so you know you are climbing the right wall.",
    metric: "100% Core Value Aligned"
  },
  {
    id: "sustainable-growth",
    title: "Sustainable Growth Systems",
    description: "Abandon short-lived bursts of willpower. Set up micro-habits and self-honoring systems that foster continuous evolution.",
    metric: "Long-Term Integration"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Alexander Reed",
    role: "Tech Founder & VP of Product",
    quote: "Working with Elena was the single most high-yield investment I've made in the last decade. She didn't just help me scale my business; she saved me from the slow decay of silent burnout. I rediscovered my voice and boundaries.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "t2",
    name: "Miriam Thorne",
    role: "Creative Director & Fine Artist",
    quote: "Elena Vance has an uncanny ability to hear the words that you aren't saying. Her questions are incredibly precise, gentle, yet razor-sharp. She guided me through a monumental career pivot into agency work with total confidence.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "t3",
    name: "Dr. Julianne Reyes",
    role: "Clinical Lead & Philanthropist",
    quote: "As a medical professional, I was trained to care for others while entirely neglecting my own mental horizon. Elena helped me design boundaries that preserved my empathy while dramatically reclaiming my personal peace and energy.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "t4",
    name: "Marcus Sterling",
    role: "Former Athlete & Entrepreneur",
    quote: "When my athletic career ended, I felt entirely lost. Elena's Life Transition structure anchored me. She helped me realize that the qualities that made me successful before weren't tied to a uniform, but were intrinsic to who I am.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "The Discovery Dialogue",
    description: "A complimentary 30-minute session to map your current landscape, identify high-impact bottlenecks, and ensure the perfect coach-client chemistry.",
    iconName: "PhoneCall",
    duration: "30 Mins"
  },
  {
    number: "02",
    title: "The Architecture Phase",
    description: "We co-create a tailored coaching syllabus complete with targeted worksheets, reflective prompts, and clear success metrics.",
    iconName: "ClipboardSignature",
    duration: "Completed In 10 Days"
  },
  {
    number: "03",
    title: "Guided Immersion & Growth",
    description: "Biweekly, high-impact strategy sessions complemented by direct messaging support to execute real-world changes with high support.",
    iconName: "Compass",
    duration: "Ongoing Partnership"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is the key difference between coaching and therapy?",
    answer: "Therapy focuses on healing past trauma and clinical distress. Coaching is future-focused, action-oriented, and structured around optimizing clarity, overcoming current blocks, and building sustained personal momentum.",
    category: "coaching"
  },
  {
    id: "faq-2",
    question: "How long does a typical coaching engagement last?",
    answer: "Though breakthroughs can happen quickly, real behavioral shifts require consistent structure. Most clients find 3 to 6 months is the ideal timeframe to lock in permanent lifestyle and professional changes.",
    category: "logistics"
  },
  {
    id: "faq-3",
    question: "Do you offer flexible payment structures or installment plans?",
    answer: "Yes. To make investment seamless, all 3-month and 6-month containers can be split into interest-free monthly installments. We will finalize these details on our initial discovery call.",
    category: "pricing"
  },
  {
    id: "faq-4",
    question: "Where do coaching sessions take place?",
    answer: "All strategy sessions are held securely online via Zoom or high-fidelity audio. You will also have direct email and chat access (WhatsApp or Voxer) for real-time support between sessions.",
    category: "logistics"
  },
  {
    id: "faq-5",
    question: "How do I know if I am ready for a premium coaching partnership?",
    answer: "You are ready if you want honest alignment, are open to constructive reflection, and can commit 1 to 2 hours a week to small, actionable exercises between sessions.",
    category: "coaching"
  }
];
