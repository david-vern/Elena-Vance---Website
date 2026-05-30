import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, CheckCircle2, ChevronLeft, ChevronRight, User, Mail, MessageSquare } from 'lucide-react';
import { COACH_INFO, SERVICES } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceId?: string;
}

export default function BookingModal({ isOpen, onClose, preSelectedServiceId = "" }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceId: preSelectedServiceId || SERVICES[0].id,
    date: '',
    timeSlot: '',
    name: '',
    email: '',
    message: ''
  });

  // Calendar logic
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Save bookings in localStorage for real persistence!
  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    const existingBookings = JSON.parse(localStorage.getItem('coach_bookings') || '[]');
    const newBooking = {
      ...formData,
      id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('coach_bookings', JSON.stringify([...existingBookings, newBooking]));
    setStep(4);
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  // Calendar dates generation
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    // Padding for previous month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    // Days in current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const handleMonthChange = (direction: 'next' | 'prev') => {
    setCurrentMonth(prev => {
      const copy = new Date(prev);
      copy.setMonth(prev.getMonth() + (direction === 'next' ? 1 : -1));
      return copy;
    });
  };

  const days = getDaysInMonth(currentMonth);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const timeSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM", "05:30 PM"];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#2D2D2D]/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-[#F8F5F0] border border-[#EAE3D8] shadow-2xl z-10"
            id="booking-modal-container"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#EAE3D8] px-6 py-4 bg-white">
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#2D2D2D]">Book Discovery Session</h3>
                <p className="text-xs md:text-sm text-[#7A8B72] mt-0.5 font-medium">Complimentary 30-Minute Alignment Consultation</p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-[#2D2D2D]/60 hover:bg-[#F8F5F0] hover:text-[#2D2D2D] transition-all cursor-pointer"
                aria-label="Close modal"
                id="close-booking-modal-btn"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Stepper Progress Indicator */}
            {step < 4 && (
              <div className="flex bg-[#EAE3D8]/40 h-1 w-full">
                <div 
                  className="bg-[#7A8B72] transition-all duration-300" 
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            )}

            {/* Content Area */}
            <div className="p-6 md:p-8 max-h-[75vh] overflow-y-auto">
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-[#C8A96B] tracking-widest uppercase animate-pulse">Step 01 / 03</span>
                    <h4 className="font-serif text-2xl text-[#2D2D2D] mt-1 font-medium">Select Focus Alignment</h4>
                    <p className="text-[#2D2D2D]/80 text-sm md:text-base mt-1">Which area of your life would benefit most from our exploration alignment?</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {SERVICES.map(service => (
                      <button
                        key={service.id}
                        onClick={() => setFormData(prev => ({ ...prev, serviceId: service.id }))}
                        className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                          formData.serviceId === service.id
                            ? 'border-[#7A8B72] bg-[#7A8B72]/5 shadow-sm'
                            : 'border-[#EAE3D8] bg-white hover:border-[#7A8B72]/40'
                        }`}
                        id={`service-select-${service.id}`}
                      >
                        <div className="flex items-start justify-between">
                          <h5 className="font-serif font-semibold text-[15px] text-[#2D2D2D]">{service.title}</h5>
                          <div className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                            formData.serviceId === service.id ? 'border-[#7A8B72] bg-[#7A8B72]' : 'border-[#EAE3D8]'
                          }`}>
                            {formData.serviceId === service.id && <div className="h-2 w-2 rounded-full bg-white" />}
                          </div>
                        </div>
                        <p className="text-xs md:text-sm text-[#2D2D2D]/70 mt-1 lines-clamp-2 leading-relaxed">{service.description}</p>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      onClick={nextStep}
                      className="bg-[#7A8B72] text-white hover:bg-[#687860] px-6 py-2.5 rounded-xl font-medium text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                      id="next-step-1"
                    >
                      Choose Date & Time <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-[#C8A96B] tracking-widest uppercase">Step 02 / 03</span>
                    <h4 className="font-serif text-2xl text-[#2D2D2D] mt-1 font-medium">Calendar & Scheduling</h4>
                    <p className="text-[#2D2D2D]/80 text-sm md:text-base mt-1">Select your preferred date and local time slot.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Calendar Column */}
                    <div className="md:col-span-7 bg-white p-4 rounded-xl border border-[#EAE3D8]">
                      <div className="flex items-center justify-between mb-4">
                        <button onClick={() => handleMonthChange('prev')} className="p-1 hover:bg-[#F8F5F0] rounded cursor-pointer">
                          <ChevronLeft className="h-4 w-4 text-[#2D2D2D]" />
                        </button>
                        <span className="font-serif font-semibold text-sm text-[#2D2D2D]">
                          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </span>
                        <button onClick={() => handleMonthChange('next')} className="p-1 hover:bg-[#F8F5F0] rounded cursor-pointer">
                          <ChevronRight className="h-4 w-4 text-[#2D2D2D]" />
                        </button>
                      </div>

                      <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-[#2D2D2D]/60 mb-2">
                        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                      </div>

                      <div className="grid grid-cols-7 gap-1">
                        {days.map((day, ix) => {
                          if (!day) return <div key={`empty-${ix}`} />;
                          
                          const formattedDateString = day.toISOString().split('T')[0];
                          const isSelected = formData.date === formattedDateString;
                          const isPast = day < new Date(new Date().setHours(0,0,0,0));

                          return (
                            <button
                              key={formattedDateString}
                              disabled={isPast}
                              onClick={() => setFormData(prev => ({ ...prev, date: formattedDateString }))}
                              className={`aspect-square flex items-center justify-center text-xs rounded-lg transition-all ${
                                isSelected 
                                  ? 'bg-[#7A8B72] text-white font-semibold' 
                                  : isPast
                                    ? 'text-gray-300 cursor-not-allowed'
                                    : 'text-[#2D2D2D] hover:bg-[#F8F5F0] font-medium cursor-pointer'
                              }`}
                            >
                              {day.getDate()}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time Slots Column */}
                    <div className="md:col-span-5 space-y-3">
                      <h5 className="font-serif font-medium text-sm text-[#2D2D2D] flex items-center gap-1.5 px-1">
                        <Clock className="w-4 h-4 text-[#7A8B72]" /> Available Slots
                      </h5>
                      {formData.date ? (
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-2 max-h-[220px] overflow-y-auto pr-1">
                          {timeSlots.map(slot => (
                            <button
                              key={slot}
                              onClick={() => setFormData(prev => ({ ...prev, timeSlot: slot }))}
                              className={`p-3 text-sm font-medium rounded-xl border text-center transition-all cursor-pointer ${
                                formData.timeSlot === slot
                                  ? 'border-[#7A8B72] bg-[#7A8B72]/5 text-[#7A8B72] font-semibold'
                                  : 'border-[#EAE3D8] bg-white hover:border-[#7A8B72]/40 text-[#2D2D2D]/80'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="h-[200px] flex items-center justify-center border border-dashed border-[#EAE3D8] rounded-xl bg-white p-4 text-center">
                          <p className="text-xs md:text-sm text-[#2D2D2D]/70 leading-relaxed font-medium">Please select a folder date on the calendar to reveal active meeting windows.</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-[#EAE3D8]">
                    <button
                      onClick={prevStep}
                      className="text-xs font-semibold uppercase tracking-wider text-[#2D2D2D]/70 hover:text-[#2D2D2D] flex items-center gap-1 cursor-pointer"
                    >
                      <ChevronLeft className="h-4 w-4" /> Focus Area
                    </button>
                    <button
                      disabled={!formData.date || !formData.timeSlot}
                      onClick={nextStep}
                      className={`px-6 py-2.5 rounded-xl font-medium text-sm shadow-sm transition-all flex items-center gap-2 cursor-pointer ${
                        formData.date && formData.timeSlot
                          ? 'bg-[#7A8B72] text-white hover:bg-[#687860]'
                          : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
                      }`}
                      id="next-step-2"
                    >
                      Contact Information <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleComplete} className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-[#C8A96B] tracking-widest uppercase">Step 03 / 03</span>
                    <h4 className="font-serif text-2xl text-[#2D2D2D] mt-1 font-medium">Your Dialogue Credentials</h4>
                    <p className="text-[#2D2D2D]/80 text-sm md:text-base mt-1">Please provide details so Elena may review your goals prior to dialing.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[#2D2D2D] mb-1.5 flex items-center gap-1.5">
                          <User className="h-3.5 w-3.5 text-[#7A8B72]" /> Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                          placeholder="Julianne Thorne"
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#EAE3D8] bg-white focus:outline-none focus:border-[#7A8B72] text-[#2D2D2D]"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#2D2D2D] mb-1.5 flex items-center gap-1.5">
                          <Mail className="h-3.5 w-3.5 text-[#7A8B72]" /> Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                          placeholder="julianne@example.com"
                          className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#EAE3D8] bg-white focus:outline-none focus:border-[#7A8B72] text-[#2D2D2D]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#2D2D2D] mb-1.5 flex items-center gap-1.5">
                        <MessageSquare className="h-3.5 w-3.5 text-[#7A8B72]" /> Share your intentions (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                        placeholder="I feel stuck at a key crossroads. I want to align my corporate experience into an impactful venture..."
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#EAE3D8] bg-white focus:outline-none focus:border-[#7A8B72] text-[#2D2D2D] resize-none"
                      />
                    </div>
                  </div>

                  {/* Summary Ribbon */}
                  <div className="bg-[#EAE3D8]/40 border border-[#EAE3D8] p-4 rounded-xl flex items-center justify-between text-sm">
                    <div className="space-y-1 text-[#2D2D2D]/85">
                      <p><strong>Selected Program:</strong> {SERVICES.find(s => s.id === formData.serviceId)?.title}</p>
                      <p className="flex items-center gap-1 font-medium text-[#7A8B72]">
                        <Calendar className="h-3.5 w-3.5" /> {formData.date} at <Clock className="h-3.5 w-3.5 inline ml-1" /> {formData.timeSlot}
                      </p>
                    </div>
                    <span className="font-mono font-medium text-[10px] text-[#C8A96B] uppercase tracking-wider bg-white px-2 py-1 rounded border border-[#EAE3D8]">
                      Free Session
                    </span>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-[#EAE3D8]">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="text-xs font-semibold uppercase tracking-wider text-[#2D2D2D]/70 hover:text-[#2D2D2D] flex items-center gap-1 cursor-pointer"
                    >
                      <ChevronLeft className="h-4 w-4" /> Calendar
                    </button>
                    <button
                      type="submit"
                      className="bg-[#7A8B72] text-white hover:bg-[#687860] px-7 py-3 rounded-xl font-semibold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                      id="submit-booking-btn"
                    >
                      Process Appointment <CheckCircle2 className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}

              {step === 4 && (
                <div className="py-6 text-center space-y-6">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', delay: 0.1 }}
                    className="h-16 w-16 bg-[#7A8B72]/10 text-[#7A8B72] rounded-full flex items-center justify-center mx-auto"
                  >
                    <CheckCircle2 className="h-10 w-10" />
                  </motion.div>

                  <div className="space-y-2">
                    <h4 className="font-serif text-3xl font-semibold text-[#2D2D2D]">Your Alignment Call is Locked</h4>
                    <p className="text-[#2D2D2D]/85 text-base max-w-md mx-auto leading-relaxed">
                      Thank you, {formData.name}. Elena has received your request and look forward to meeting with you.
                    </p>
                  </div>

                  <div className="max-w-md mx-auto bg-white border border-[#EAE3D8] rounded-xl p-5 text-left text-sm space-y-3 shadow-sm">
                    <p className="font-serif font-semibold text-base text-[#2D2D2D] border-b border-[#F8F5F0] pb-2">Preparation Guidance</p>
                    <div className="space-y-2 text-[#2D2D2D]/85 leading-relaxed">
                      <p><strong>🗓️ Time Stamp:</strong> {formData.date} at {formData.timeSlot} (your local timezone)</p>
                      <p><strong>☕ Quiet Sanctuary:</strong> Please find a tranquil space with strong audio capabilities. The consult centers around your unfiltered goals.</p>
                      <p><strong>📬 Check Your Inbox:</strong> Elena has dispatched a Zoom container link and initial discovery worksheets to <strong className="text-[#7A8B72]">{formData.email}</strong>.</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        onClose();
                        setStep(1);
                        setFormData({
                          serviceId: SERVICES[0].id,
                          date: '',
                          timeSlot: '',
                          name: '',
                          email: '',
                          message: ''
                        });
                      }}
                      className="border border-[#7A8B72] text-[#7A8B72] hover:bg-[#7A8B72] hover:text-white px-8 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer"
                      id="finish-booking-btn"
                    >
                      Return To Sanctuary
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
