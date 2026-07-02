import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle, Mail, Briefcase, Calendar, Star } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Brand Strategy',
    budget: '$5k - $10k',
    message: '',
    newsletter: true
  });
  
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    // Simulate real high-quality submission callback
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const projectTypes = ['Brand Strategy', 'Interactive UI/UX', 'AI Synthesis Tools', 'Immersive Web GL'];
  const budgets = ['$3k - $5k', '$5k - $10k', '$10k - $20k', '$20k+'];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          
          {/* Overlay background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Sliding Panel Content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-lg h-full bg-[#faf9f6] shadow-2xl border-l border-black/10 flex flex-col justify-between p-6 md:p-10 z-10 overflow-y-auto"
          >
            {/* Top Bar Header */}
            <div className="flex items-center justify-between pb-6 border-b border-black/5">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-black/40">Active Consultation</span>
                <h3 className="font-display font-bold text-xl text-black">Start Your Brief</h3>
              </div>
              
              <button
                id="btn-close-contact-drawer"
                onClick={onClose}
                className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-black/70 hover:text-black transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Inner Content Area */}
            <div className="my-auto py-8">
              {!isSubmitted ? (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name Input */}
                  <div>
                    <label className="text-[11px] font-semibold text-black/60 uppercase tracking-wider block mb-2">
                      Full Name
                    </label>
                    <input
                      id="input-contact-name"
                      type="text"
                      required
                      placeholder="e.g. Adrian Carter"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-stone-50 text-black text-xs font-semibold px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-black transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="text-[11px] font-semibold text-black/60 uppercase tracking-wider block mb-2">
                      Email Address
                    </label>
                    <input
                      id="input-contact-email"
                      type="email"
                      required
                      placeholder="e.g. adrian@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-stone-50 text-black text-xs font-semibold px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-black transition-all"
                    />
                  </div>

                  {/* Project Type Multi Options */}
                  <div>
                    <label className="text-[11px] font-semibold text-black/60 uppercase tracking-wider block mb-2">
                      Project Type Focus
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {projectTypes.map(pt => (
                        <button
                          id={`btn-contact-type-${pt.toLowerCase().replace(' ', '-')}`}
                          key={pt}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, projectType: pt }))}
                          className={`text-[10px] font-bold py-2 px-1 rounded-xl border text-center transition-all cursor-pointer ${
                            formData.projectType === pt
                              ? 'bg-black text-[#faf9f6] border-black'
                              : 'bg-white text-black/60 border-black/10 hover:border-black/20'
                          }`}
                        >
                          {pt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Options */}
                  <div>
                    <label className="text-[11px] font-semibold text-black/60 uppercase tracking-wider block mb-2">
                      Allocated Investment
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {budgets.map(b => (
                        <button
                          id={`btn-contact-budget-${b.toLowerCase().replace(' ', '-')}`}
                          key={b}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, budget: b }))}
                          className={`text-[9px] font-bold py-2.5 px-0.5 rounded-xl border text-center transition-all cursor-pointer ${
                            formData.budget === b
                              ? 'bg-black text-[#faf9f6] border-black'
                              : 'bg-white text-black/60 border-black/10 hover:border-black/20'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Area */}
                  <div>
                    <label className="text-[11px] font-semibold text-black/60 uppercase tracking-wider block mb-2">
                      Tell us about your brand vision
                    </label>
                    <textarea
                      id="input-contact-message"
                      rows={3}
                      placeholder="Briefly describe the product core goal..."
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full bg-stone-50 text-black text-xs font-medium px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-black transition-all resize-none"
                    />
                  </div>

                  {/* Button Submission */}
                  <button
                    id="btn-submit-contact-form"
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black text-[#faf9f6] hover:bg-black/90 text-xs font-bold py-3.5 rounded-full flex items-center justify-center gap-2 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span className="h-4 w-4 rounded-full border-2 border-[#faf9f6] border-t-transparent animate-spin" />
                    ) : (
                      <>
                        <span>Transmit Brief</span>
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="inline-flex p-3 rounded-full bg-emerald-50 text-emerald-600 mb-6">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  
                  <h4 className="font-display font-bold text-2xl text-black mb-3">
                    Brief Transmitted Successfully!
                  </h4>
                  
                  <p className="text-xs text-black/60 leading-relaxed max-w-[280px] mx-auto mb-8">
                    Our digital architects are reviewing your details. We have blocked {formData.budget} for this Q3 brief. Expect alignment scheduling in 2-4 hours.
                  </p>

                  <div className="space-y-3 bg-stone-50 border border-black/5 rounded-2xl p-4 text-left max-w-sm mx-auto">
                    <div className="flex gap-2 text-xs">
                      <Star className="h-3.5 w-3.5 text-black fill-black" />
                      <div>
                        <span className="font-bold text-black">Adrian Carter</span>
                        <span className="text-black/50 text-[10px] block">Project: {formData.projectType}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    id="btn-reset-contact"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Brand Strategy',
                        budget: '$5k - $10k',
                        message: '',
                        newsletter: true
                      });
                    }}
                    className="mt-8 text-xs font-bold underline text-black/60 hover:text-black cursor-pointer"
                  >
                    Submit another brief
                  </button>
                </motion.div>
              )}
            </div>

            {/* Bottom Details Footer */}
            <div className="border-t border-black/5 pt-6 text-center text-[10px] text-black/40 font-mono">
              <p>NEXORA DIRECT COMMUNICATIONS HUB</p>
              <p className="mt-1">London • New York • Tokyo</p>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
