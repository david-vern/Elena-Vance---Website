import { Service, Testimonial, FaqItem, Benefit } from './types';
import coachPortrait from './assets/images/coach_portrait_1780141763031.png';
import coachingWorkspace from './assets/images/coaching_workspace_1780141782520.png';

export const COACH_INFO = {
  name: "Elena Vance",
  title: "Master Certified Coach (MCC)",
  tagline: "Clarifying pathways. Overcoming gridlocks. Cultivating authentic purpose.",
  bioShort: "Elena Vance is a visionary life and leadership coach devoted to helping high-achieving individuals align their professional ambitions with deep personal meaning.",
  bioLong: "With over 12 years of coaching executive team members, creative directors, and individuals navigating monumental career changes, Elena brings an elegant blend of deep psychological insights, compassionate listening, and rigorous strategic action to every session. She believes that your greatest potential lies beyond your comfortable routines, and that true fulfillment comes from a harmonious alignment of clarity, confidence, and ultimate purpose.",
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
  { value: "98.4%", label: "Satisfaction & Success Rate" },
  { value: "4,200+", label: "Coaching Hours Logged" }
];

export const SERVICES: Service[] = [
  {
    id: "personal-growth",
    title: "Personal Growth Coaching",
    description: "Break free from invisible barriers and cultivate a life rooted in deep confidence, self-compassion, and vibrant alignment.",
    longDescription: "Ideal for anyone feeling a subtle misalignment in their daily life or standing at the visual threshold of a personal breakthrough. We map out your core values, identity constructs, and emotional triggers to construct an unwavering system of self-mastery and inner peace.",
    benefits: [
      "Identify and deconstruct limiting beliefs",
      "Cultivate high emotional intelligence and resilience",
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
    description: "Align your professional trajectory with your deepest personal core values. Navigate pivot points with absolute clarity.",
    longDescription: "Whether you are contemplating a complete industry shift, navigating corporate ascension, or starting a bold entrepreneurial endeavor, this program provides the psychological framework and tangible strategy to transition confidently without sacrificing stability.",
    benefits: [
      "Map your core talents to highly rewarding career targets",
      "Master the art of high-impact salary and role negotiations",
      "Overcome the silent drain of professional imposter syndrome",
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
    longDescription: "Designed specifically for founders, C-suite executives, and forward-thinking managers. We refine your leadership presence, build communication styles that inspire high performance, and resolve the psychological toll of executive loneliness.",
    benefits: [
      "Formulate a commanding, authentic leadership style",
      "Master high-stakes conflict resolution with poise",
      "Prevent executive burnout threw robust emotional systems",
      "Sharpen strategic decision-making in highly volatile environments"
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
    longDescription: "Major life transitions often render our previous identity structures obsolete. This coaching module guides you to mourn old chapters with grace, rediscover your emerging self, and direct your sails into unchartered waters with curiosity and resilience.",
    benefits: [
      "Establish deep structural anchor points in times of chaos",
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
    description: "Replace the chronic undertone of self-doubt with a quiet, robust belief in your own discernment, capabilities, and life direction.",
    metric: "94% Report Higher Agency"
  },
  {
    id: "better-decision-making",
    title: "Sophisticated Decision Making",
    description: "Develop structural filters to cut through decision fatigue. Make high-stakes life choices that represent true, uncoerced internal alignment.",
    metric: "2x Less Decision Fatigue"
  },
  {
    id: "clear-life-direction",
    title: "Cohesive Life Direction",
    description: "Acquire an overarching map that connects your daily routines to your long-term legacy. Never again wonder if you are climbing the wrong wall.",
    metric: "100% Core Value Aligned"
  },
  {
    id: "sustainable-growth",
    title: "Sustainable Growth Systems",
    description: "Abandon short-lived bursts of willpower. Set up micro-habits and self-honoring systems that foster continuous evolution without burnouts.",
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
    description: "A complimentary 30-minute immersive audio call where we map out your present landscape, define hidden bottlenecks, and ensure a mutual, exceptional coach-client chemistry.",
    iconName: "PhoneCall",
    duration: "30 Mins"
  },
  {
    number: "02",
    title: "The Architecture Phase",
    description: "Together, we co-create an exquisite, customized coaching syllabus. Tailored specifically with intensive worksheets, reflective journaling templates, and actionable milestones.",
    iconName: "ClipboardSignature",
    duration: "Completed In 10 Days"
  },
  {
    number: "03",
    title: "Guided Immersion & Growth",
    description: "Bimonthly high-presence video sessions backed by continuous voice-memo support. Execute deep-level life strategies and establish lasting sustainable success.",
    iconName: "Compass",
    duration: "Ongoing Partnership"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is the key difference between coaching and therapy?",
    answer: "Therapy typically focuses on healing past wounds, processing psychological trauma, and resolving deep clinical distress. Coaching is future-focused and action-oriented. It assumes structural psychological health and centers on optimizing clarity, designing life frameworks, breaking current blocks, and building robust, purpose-guided momentum from the present forward.",
    category: "coaching"
  },
  {
    id: "faq-2",
    question: "How long does a typical coaching engagement last?",
    answer: "While rapid breakthroughs often happen in a single session, sustainable neural and behavioral rewrite takes time. Most clients experience profound, permanent lifestyle transformation through our 3 to 6-month containers. Individual timelines depend heavily on the complexity of your current career shift or life transition.",
    category: "logistics"
  },
  {
    id: "faq-3",
    question: "Do you offer flexible payment structures or installment plans?",
    answer: "Absolutely. Premium personal growth should be an empowering, stable decision. All 3-month and 6-month programs can be split into equal monthly installment options without any additional fees or interest. We will finalize your preference during our initial discovery call.",
    category: "pricing"
  },
  {
    id: "faq-4",
    question: "Where do coaching sessions take place?",
    answer: "All administrative sessions are securely conducted globally via Zoom or high-fidelity audio call. Clients also receive dedicated asynchronous email and audio support via Voxer or WhatsApp throughout their entire program container for rapid real-time guidance.",
    category: "logistics"
  },
  {
    id: "faq-5",
    question: "How do I know if I am ready for a premium coaching partnership?",
    answer: "You are ready if you are willing to look run-on defense patterns in the face, accept compassionate challenge, and actively commit time to reflecting or acting outside of our actual calls. True breakthroughs require a blend of honest introspection and active real-world experimentation.",
    category: "coaching"
  }
];
