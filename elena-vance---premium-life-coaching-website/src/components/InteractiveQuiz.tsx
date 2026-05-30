import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, HelpCircle, RotateCcw, Calendar, CheckSquare } from 'lucide-react';
import { SERVICES } from '../data';

interface InteractiveQuizProps {
  onSelectServiceAndBook: (serviceId: string) => void;
}

export default function InteractiveQuiz({ onSelectServiceAndBook }: InteractiveQuizProps) {
  const [step, setStep] = useState(0); // 0 = Intro, 1-3 = Questions, 4 = Result
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      title: "What represents your current life or career crossroads today?",
      options: [
        { label: "My career has plateaued, or I'm planning a monumental pivot.", value: "career" },
        { label: "I feel subtle misalignment in my daily routine and miss clean passion.", value: "personal" },
        { label: "I'm guiding complex leadership groups under immense volatile demands.", value: "executive" },
        { label: "My immediate core lifestyle changed entirely (empty nest, reset, retirement).", value: "transition" }
      ]
    },
    {
      title: "What represents your most persistent friction point?",
      options: [
        { label: "The chronic, invisible weight of Imposter Syndrome.", value: "career" },
        { label: "Decision paralyses and lack of clear strategic direction.", value: "personal" },
        { label: "Uncontrollable stress that is slowly leading into burnout.", value: "executive" },
        { label: "Fear of letting go of old milestones and past identities.", value: "transition" }
      ]
    },
    {
      title: "How do you prefer to approach your breakthrough coaching?",
      options: [
        { label: "Developing clean emotional intelligence and strong habits of self-respect.", value: "personal" },
        { label: "Designing a rigorous tactical career map with actionable 90-day targets.", value: "career" },
        { label: "Cultivating commanding presence alongside structural balance.", value: "executive" },
        { label: "Establishing solid structural anchor points through massive renewal.", value: "transition" }
      ]
    }
  ];

  const handleSelectOption = (value: string) => {
    const updatedAnswers = [...answers, value];
    setAnswers(updatedAnswers);
    setStep(prev => prev + 1);
  };

  const getRecommendedServiceId = () => {
    // Tally values in answers
    const tallies = answers.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Find highest frequency value
    let bestMatch = 'personal-growth';
    let maxCount = 0;
    
    Object.entries(tallies).forEach(([key, val]) => {
      const value = val as number;
      if (value > maxCount) {
        maxCount = value;
        if (key === 'career') bestMatch = 'career-coaching';
        if (key === 'personal') bestMatch = 'personal-growth';
        if (key === 'executive') bestMatch = 'executive-coaching';
        if (key === 'transition') bestMatch = 'life-transition';
      }
    });

    return bestMatch;
  };

  const resetQuiz = () => {
    setStep(0);
    setAnswers([]);
  };

  const matchedServiceId = step === questions.length + 1 ? getRecommendedServiceId() : null;
  const recommendedService = SERVICES.find(s => s.id === matchedServiceId);

  return (
    <div className="bg-[#EAE3D8]/30 rounded-3xl border border-[#EAE3D8] p-8 md:p-12" id="coaching-advisor-matrix">
      <div className="max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6 text-center"
            >
              <div className="mx-auto h-12 w-12 rounded-full bg-[#7A8B72]/10 flex items-center justify-center">
                <HelpCircle className="h-6 w-6 text-[#7A8B72]" />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-2xl md:text-3xl font-semibold text-[#2D2D2D]">Coaching Alignment Finder</h4>
                <p className="text-xs text-[#7A8B72] uppercase font-mono tracking-widest font-semibold">90-Second Self Alignment Tool</p>
                <p className="text-[#2D2D2D]/75 text-sm leading-relaxed max-w-md mx-auto">
                  Unsure which specific coaching container is optimized for your current developmental crossroads? Answer three brief questions, and receive an instant alignment recommendation.
                </p>
              </div>
              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#7A8B72] text-white hover:bg-[#687860] rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-md shadow-[#7A8B72]/15 cursor-pointer"
                id="start-quiz-btn"
              >
                Commence Assessment <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          )}

          {step > 0 && step <= questions.length && (
            <motion.div
              key={`q-${step}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#2D2D2D]/60 font-mono mb-2">
                  <span>CROSSROADS EXPLORATION</span>
                  <span>QUESTION {step} OF {questions.length}</span>
                </div>
                {/* Visual Progress bar */}
                <div className="bg-[#EAE3D8] h-1 rounded-full overflow-hidden">
                  <div className="bg-[#7A8B72] h-full transition-all" style={{ width: `${(step / questions.length) * 100}%` }} />
                </div>
              </div>

              <h4 className="font-serif text-xl md:text-2xl font-semibold text-[#2D2D2D] leading-tight">
                {questions[step - 1].title}
              </h4>

              <div className="space-y-3">
                {questions[step - 1].options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(opt.value)}
                    className="w-full text-left px-6 py-4 rounded-full border border-[#EAE3D8] bg-white hover:border-[#7A8B72] hover:bg-[#F8F5F0]/40 text-xs md:text-sm font-medium text-[#2D2D2D]/80 hover:text-[#2D2D2D] transition-all cursor-pointer shadow-sm flex items-center justify-between group"
                  >
                    <span>{opt.label}</span>
                    <ArrowRight className="h-4 w-4 text-[#7A8B72]/0 group-hover:text-[#7A8B72] transition-all group-hover:translate-x-1 shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === questions.length + 1 && recommendedService && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-6 text-center"
            >
              <div className="mx-auto h-16 w-16 bg-[#7A8B72]/10 text-[#7A8B72] rounded-full flex items-center justify-center">
                <CheckSquare className="h-8 w-8" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] text-[#C8A96B] uppercase font-mono tracking-widest font-semibold block">Alignment Recommendation</span>
                <h4 className="font-serif text-3xl font-semibold text-[#2D2D2D] leading-tight">
                  {recommendedService.title}
                </h4>
                <p className="text-xs text-[#7A8B72] font-semibold">{recommendedService.duration} Container</p>
                <p className="text-sm text-[#2D2D2D]/75 leading-relaxed max-w-md mx-auto mt-2">
                  {recommendedService.description}
                </p>
              </div>

              <div className="bg-white border border-[#EAE3D8] rounded-2xl p-5 text-left max-w-md mx-auto space-y-3 shadow-sm">
                <p className="text-xs text-[#2D2D2D]/50 uppercase font-mono tracking-wider font-semibold">Suggested Focus Benefits</p>
                <div className="grid grid-cols-1 gap-2 text-xs text-[#2D2D2D]/85">
                  {recommendedService.benefits.slice(0, 3).map((b, bI) => (
                    <div key={bI} className="flex items-start gap-2">
                      <span className="h-4 w-4 bg-[#7A8B72]/10 rounded-full flex items-center justify-center mt-0.5 shrink-0 text-[10px] text-[#7A8B72]">✔</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                <button
                  onClick={() => onSelectServiceAndBook(recommendedService.id)}
                  className="w-full sm:w-auto px-6 py-3 bg-[#7A8B72] hover:bg-[#687860] text-white rounded-full text-xs font-semibold uppercase tracking-widest transition-all shadow-md shadow-[#7A8B72]/15 flex items-center justify-center gap-1.5 cursor-pointer"
                  id="book-recommended-service-btn"
                >
                  Schedule recommended container <Calendar className="h-4 w-4" />
                </button>
                <button
                  onClick={resetQuiz}
                  className="w-full sm:w-auto px-6 py-3 border border-[#EAE3D8] hover:border-[#7A8B72] text-[#2D2D2D]/70 hover:text-[#2D2D2D] bg-white rounded-full text-xs font-semibold uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Reset analysis <RotateCcw className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
