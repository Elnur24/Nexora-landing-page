import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Globe, Sparkles, ArrowRight, ArrowUpRight } from 'lucide-react';

import Header from './components/Header';
import Hero from './components/Hero';
import Insights from './components/Insights';
import Solutions from './components/Solutions';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import ClientPortal from './components/ClientPortal';

// Reference our generated halftone image
const creationImage = '/src/assets/images/creation_halftone_1782994945274.jpg';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [portalMode, setPortalMode] = useState<'login' | 'try_now'>('try_now');

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleOpenLogin = () => {
    setPortalMode('login');
    setActiveSection('portal');
  };

  const handleOpenTryNow = () => {
    setPortalMode('try_now');
    setActiveSection('portal');
  };

  return (
    <div className="relative min-h-screen bg-[#faf9f6] text-black font-sans selection:bg-black selection:text-[#faf9f6] pb-10">
      
      {/* Aesthetic Grain Noise Overlay matching the retro halftone screenshot look */}
      <div className="grain-overlay pointer-events-none" />

      {/* Main Responsive Header */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenContact={handleOpenContact}
        onLogin={handleOpenLogin}
        onTryNow={handleOpenTryNow}
      />

      {/* Primary Dynamic Content Frame */}
      <main id="app-main-content">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && (
            <motion.div
              key="home_view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Banner with hands illustration */}
              <Hero onOpenContact={handleOpenContact} creationImageSrc={creationImage} />
              
              {/* Solutions Capabilities Section */}
              <Solutions />
              
              {/* Insights Grid */}
              <Insights />
              
              {/* Transparent Pricing Calculator */}
              <Pricing />
            </motion.div>
          )}

          {activeSection === 'insights' && (
            <motion.div
              key="insights_view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <div className="pt-8 text-center max-w-7xl mx-auto px-6">
                <button
                  id="btn-back-home-insights"
                  onClick={() => setActiveSection('home')}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-black/40 hover:text-black transition-colors"
                >
                  ← Back to Showcase view
                </button>
              </div>
              <Insights isStandalone={true} />
            </motion.div>
          )}

          {activeSection === 'solutions' && (
            <motion.div
              key="solutions_view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <div className="pt-8 text-center max-w-7xl mx-auto px-6">
                <button
                  id="btn-back-home-solutions"
                  onClick={() => setActiveSection('home')}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-black/40 hover:text-black transition-colors"
                >
                  ← Back to Showcase view
                </button>
              </div>
              <Solutions />
            </motion.div>
          )}

          {activeSection === 'pricing' && (
            <motion.div
              key="pricing_view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <div className="pt-8 text-center max-w-7xl mx-auto px-6">
                <button
                  id="btn-back-home-pricing"
                  onClick={() => setActiveSection('home')}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-black/40 hover:text-black transition-colors"
                >
                  ← Back to Showcase view
                </button>
              </div>
              <Pricing />
            </motion.div>
          )}

          {activeSection === 'portal' && (
            <motion.div
              key="portal_view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <ClientPortal
                initialMode={portalMode}
                onExit={() => setActiveSection('home')}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Sleek CTA Slide Contact Form */}
      <ContactForm
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Elegant Studio Footer */}
      <footer className="border-t border-black/5 mt-20 pt-16 pb-12 px-6 lg:px-12 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Main Brand Column */}
          <div className="md:col-span-2">
            <span className="font-display font-extrabold text-2xl tracking-tight text-black flex items-center gap-1.5">
              NEXORA<span className="text-[10px] font-sans font-medium align-super relative -top-2">®</span>
            </span>
            <p className="mt-4 text-xs text-black/50 max-w-sm leading-relaxed">
              We collaborate with forward-thinking visionaries to translate bold concepts into high-scale digital realities. We value deep intention over mechanical clutter.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-black/40">
              <Globe className="h-4 w-4" />
              <span>ACTIVE WORLDWIDE INGRESS SESSIONS</span>
            </div>
          </div>

          {/* Service Links */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-black/40 block mb-4">Focus areas</span>
            <ul className="space-y-2.5 text-xs text-black/60 font-semibold">
              <li><button onClick={() => setActiveSection('solutions')} className="hover:text-black cursor-pointer">Brand Strategy</button></li>
              <li><button onClick={() => setActiveSection('solutions')} className="hover:text-black cursor-pointer">Interactive Front-End</button></li>
              <li><button onClick={() => setActiveSection('solutions')} className="hover:text-black cursor-pointer">Computational Arts</button></li>
              <li><button onClick={() => setActiveSection('solutions')} className="hover:text-black cursor-pointer">AI Alignment Tools</button></li>
            </ul>
          </div>

          {/* Studio Meta Coordinates */}
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-black/40 block mb-4">Coordinates</span>
            <ul className="space-y-2.5 text-xs text-black/60 font-semibold">
              <li><span className="text-black/40 font-mono">LDN:</span> 44 Great Windmill St</li>
              <li><span className="text-black/40 font-mono">NYC:</span> 512 Broadway, Soho</li>
              <li><span className="text-black/40 font-mono">TYO:</span> Shibuya 2-Chome</li>
              <li>
                <button
                  onClick={handleOpenContact}
                  className="flex items-center gap-1 text-black underline font-bold cursor-pointer"
                >
                  Contact Studio
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Fineprint */}
        <div className="max-w-7xl mx-auto border-t border-black/5 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-black/40">
          <span>© 2026 NEXORA DIGITAL STUDIO. ALL CODES SECURED.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-black">Terms of Alliance</a>
            <span>•</span>
            <a href="#" className="hover:text-black">Privacy Protocol</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
