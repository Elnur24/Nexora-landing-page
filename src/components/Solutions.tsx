import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Layers, Terminal, Compass, ArrowRight, Zap, Award, Target, Layout } from 'lucide-react';

export default function Solutions() {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0-100
  const [activeTab, setActiveTab] = useState<'strategy' | 'craft' | 'experience'>('strategy');
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const caseStudies = [
    {
      title: 'Aura Fintech Identity',
      metric: '+142%',
      label: 'Engagement boost',
      detail: 'Replaced a generic fintech blue interface with an immersive, high-contrast, dithered grain aesthetic, aligning with the target generation.'
    },
    {
      title: 'Solstice Fashion Store',
      metric: '0.4s',
      label: 'Average LCP Speed',
      detail: 'Engineered a clean headless platform utilizing advanced React hydration and image compression techniques for zero-layout-shift.'
    },
    {
      title: 'Chronos Smart Watch App',
      metric: '4.9★',
      label: 'App Store Rating',
      detail: 'Built fluid swipe-gestures and spring physical loops inside an atmospheric dark-mode watch interface, ensuring flawless touch feedback.'
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-wider text-black/50 mb-2">Capabilities</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-black tracking-tight max-w-2xl leading-tight">
            Comprehensive Digital Craftsmanship.
          </h2>
        </div>

        {/* Grid Setup: Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Bento Item 1: Brand Strategy */}
          <div className="lg:col-span-2 p-8 rounded-3xl border border-black/5 bg-white/40 backdrop-blur-sm flex flex-col justify-between group">
            <div>
              <div className="h-10 w-10 rounded-xl bg-stone-100 flex items-center justify-center text-black mb-6">
                <Compass className="h-5 w-5" />
              </div>
              
              <h3 className="font-display font-bold text-2xl text-black mb-4">
                Structured Brand Strategy
              </h3>
              
              <p className="text-sm text-black/60 max-w-xl leading-relaxed mb-6">
                We design comprehensive systems of communication. A great brand doesn't just look pretty—it stands out by projecting deep intentionality, cohesive art direction, and a clear product mission.
              </p>
            </div>

            {/* Strategic Pillars Interactive Tabs */}
            <div className="border-t border-black/5 pt-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {(['strategy', 'craft', 'experience'] as const).map((tab) => (
                  <button
                    id={`btn-solution-tab-${tab}`}
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-all cursor-pointer ${
                      activeTab === tab
                        ? 'bg-black text-[#faf9f6] border-black'
                        : 'bg-stone-50 text-black/50 border-transparent hover:border-black/10'
                    }`}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Dynamic Strategy Description */}
              <div className="min-h-[60px] text-xs font-sans text-black/70 leading-relaxed">
                {activeTab === 'strategy' && (
                  <p>Our market diagnostics isolate your company's core differentiator. We construct a complete voice profile, custom guidelines, and functional style matrices that align with current cultural and artistic movements.</p>
                )}
                {activeTab === 'craft' && (
                  <p>We build using cutting-edge technologies like React 19, Tailwind CSS v4, and modern compiler tools. No heavy templates, no legacy code overhead—just blazing fast, accessible, secure digital engines.</p>
                )}
                {activeTab === 'experience' && (
                  <p>We create beautiful, sensory digital spaces using responsive physics, micro-interactions, spring layouts, and dithered aesthetics that hold attention and elevate client-brand resonance.</p>
                )}
              </div>
            </div>
          </div>

          {/* Bento Item 2: Interactive Before-After Canvas */}
          <div className="p-8 rounded-3xl border border-black/5 bg-white/40 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-stone-100 flex items-center justify-center text-black mb-6">
                <Layout className="h-5 w-5" />
              </div>

              <h3 className="font-display font-bold text-xl text-black mb-3">
                Immersive Interfaces
              </h3>

              <p className="text-xs text-black/60 leading-relaxed mb-6">
                Slide below to see the transition of an interface concept from raw layout wireframe structures into a polished, dithered brand state.
              </p>
            </div>

            {/* Before-After Interactive Area */}
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleMouseMove}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-black/10 shadow-sm bg-stone-100"
            >
              {/* After Side (Right) - Polished, dithered gradient, full graphic look */}
              <div className="absolute inset-0 bg-[#faf9f6]">
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  {/* Mock Polished Card */}
                  <div className="flex items-center justify-between border-b border-black/10 pb-2">
                    <span className="text-[10px] font-display font-extrabold tracking-tight">NEXORA</span>
                    <span className="text-[8px] font-mono px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700">LIVE PORT</span>
                  </div>
                  <div className="my-auto text-center">
                    <span className="text-xs font-mono text-black/40">HALFTONE RENDER</span>
                    <h4 className="font-display font-bold text-base text-black mt-1">Inspiring Action.</h4>
                  </div>
                  <div className="bg-black text-[#faf9f6] text-[9px] font-bold py-1.5 rounded-lg text-center shadow-md">
                    Explore Experience
                  </div>
                </div>
                {/* Visual grid overlay to represent finished state */}
                <div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply pointer-events-none" />
              </div>

              {/* Before Side (Left) - Wireframe styled, blue grids */}
              <div 
                className="absolute inset-y-0 left-0 bg-stone-100 border-r-2 border-black/40"
                style={{ width: `${sliderPosition}%`, overflow: 'hidden' }}
              >
                <div className="absolute inset-y-0 left-0 w-[400px] h-full p-4 flex flex-col justify-between bg-stone-200">
                  {/* Mock Wireframe Card */}
                  <div className="flex items-center justify-between border-b border-blue-200 pb-2">
                    <span className="text-[8px] font-mono text-blue-500 border border-blue-300 px-1 py-0.2">div.logo</span>
                    <span className="text-[8px] font-mono text-blue-500 border border-blue-300 px-1 py-0.2">span.badge</span>
                  </div>
                  <div className="my-auto text-center border border-dashed border-blue-400 p-2 rounded">
                    <span className="text-[8px] font-mono text-blue-500 block">h1.heading</span>
                    <div className="h-1 bg-blue-300 w-12 mx-auto mt-1" />
                  </div>
                  <div className="border border-blue-400 text-blue-500 text-[8px] font-mono py-1 rounded text-center bg-blue-50">
                    button.cta
                  </div>
                </div>
              </div>

              {/* Slider Drag Indicator line */}
              <div 
                className="absolute inset-y-0 w-1 bg-black pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-black border-2 border-white flex items-center justify-center shadow-lg">
                  <div className="flex gap-0.5">
                    <div className="h-2 w-0.5 bg-white/70" />
                    <div className="h-2 w-0.5 bg-white/70" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-3 text-[10px] font-mono text-black/40">
              <span>WIREFRAME COMPONENT</span>
              <span>POLISHED DESIGN</span>
            </div>
          </div>

          {/* Bento Item 3: Computational Craft */}
          <div className="p-8 rounded-3xl border border-black/5 bg-white/40 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-stone-100 flex items-center justify-center text-black mb-6">
                <Terminal className="h-5 w-5" />
              </div>

              <h3 className="font-display font-bold text-xl text-black mb-3">
                Zero-Hydration Overhead
              </h3>

              <p className="text-xs text-black/60 leading-relaxed mb-6">
                We optimize layout shifts (CLS), first contentful paint (FCP), and build modular client runtimes to achieve a perfect 100/100 Lighthouse score. No dead bundles, no telemetry bloat.
              </p>
            </div>

            <div className="bg-stone-900 rounded-2xl p-4 font-mono text-[10px] text-zinc-400 border border-white/5 shadow-md">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
                <span className="text-emerald-400">nexora-engine.log</span>
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              </div>
              <div className="space-y-1">
                <p><span className="text-zinc-500">[05:22:02]</span> npm run build --prod</p>
                <p className="text-emerald-400">✓ bundle optimized (24.1kB)</p>
                <p className="text-zinc-500">[05:22:03] Lighthouse check initiated...</p>
                <p className="text-emerald-400">★ Performance: 100% | CLS: 0.00</p>
              </div>
            </div>
          </div>

          {/* Bento Item 4: AI & Future Tool Integration */}
          <div className="lg:col-span-2 p-8 rounded-3xl border border-black/5 bg-white/40 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-stone-100 flex items-center justify-center text-black mb-6">
                <Sparkles className="h-5 w-5" />
              </div>

              <h3 className="font-display font-bold text-2xl text-black mb-4">
                Generative Creative Systems
              </h3>

              <p className="text-sm text-black/60 leading-relaxed mb-6">
                We integrate custom language model parameters into clients' content streams, building smart interactive portals, copy compilers, and automated storyboard builders that expand creative capabilities.
              </p>
            </div>

            {/* Simulated AI Output Widget */}
            <div className="border-t border-black/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-stone-100 text-black">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-black">Vision Model Prompting</h4>
                  <p className="text-[10px] text-black/40">Automated asset-style syncing & alignment</p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black text-[#faf9f6] text-xs font-semibold hover:bg-black/85 transition-colors">
                Connected & Active
              </span>
            </div>
          </div>
        </div>

        {/* Case Studies Teasers */}
        <div className="mt-16 border-t border-black/10 pt-16">
          <p className="font-mono text-xs uppercase tracking-wider text-black/50 mb-8">Selected Outcomes</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedCase(selectedCase === idx ? null : idx)}
                className="group p-6 rounded-2xl border border-black/5 bg-white/30 backdrop-blur-sm hover:border-black/15 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <h4 className="font-display font-bold text-lg text-black">{cs.title}</h4>
                  <span className="font-display font-extrabold text-2xl md:text-3xl text-black group-hover:translate-x-0.5 transition-transform">
                    {cs.metric}
                  </span>
                </div>
                <p className="text-[11px] font-mono text-black/50 uppercase tracking-wider mb-3">
                  {cs.label}
                </p>
                
                <p className={`text-xs text-black/60 leading-relaxed transition-all duration-300 ${
                  selectedCase === idx ? 'max-h-40 opacity-100' : 'max-h-12 md:max-h-24 overflow-hidden'
                }`}>
                  {cs.detail}
                </p>
                
                <div className="mt-4 flex justify-end">
                  <span className="text-[10px] font-mono font-bold text-black group-hover:underline">
                    {selectedCase === idx ? 'Collapse' : 'Details →'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
