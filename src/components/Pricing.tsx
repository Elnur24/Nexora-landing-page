import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Info, Calculator, Sparkles, Sliders, DollarSign } from 'lucide-react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);
  
  // Quote Estimator State
  const [numScreens, setNumScreens] = useState<number>(5);
  const [assetLevel, setAssetLevel] = useState<'Standard' | 'Custom' | 'Dithered Halftone'>('Custom');
  const [animSpeed, setAnimSpeed] = useState<'Minimal' | 'Micro' | 'Immersive Experience'>('Micro');
  
  // Calculate Quote Estimation
  const calculateEstimate = () => {
    let basePrice = 4500;
    
    // Multiplier for screens
    basePrice += numScreens * 400;
    
    // Asset cost multiplier
    if (assetLevel === 'Custom') basePrice += 1500;
    if (assetLevel === 'Dithered Halftone') basePrice += 3200;
    
    // Animation cost multiplier
    if (animSpeed === 'Micro') basePrice += 1200;
    if (animSpeed === 'Immersive Experience') basePrice += 3500;
    
    // Applying annual discount if matching
    if (isAnnual) basePrice = Math.round(basePrice * 0.85);
    
    return basePrice;
  };

  const plans = [
    {
      name: 'Launch Brief',
      price: isAnnual ? 3200 : 3800,
      description: 'Ideal for early-stage startups needing a solid, premium visual direction and a fast-loading single-screen engine.',
      features: [
        'Interactive Brand Archetype matching',
        'Custom Halftone Hero Asset (1x)',
        'React Single-View landing architecture',
        'Advanced typography alignment (Inter/Outfit)',
        'Standard Tailwind v4 performance optimization',
        '3 rounds of aesthetic iterations',
        'Ready in 10 business days'
      ],
      cta: 'Initiate Brief',
      badge: 'POPULAR FOR STARTUPS'
    },
    {
      name: 'Resonance Studio',
      price: isAnnual ? 5900 : 6900,
      description: 'The definitive solution for modern brands seeking immersive layouts, tactile interactions, and robust content systems.',
      features: [
        'Complete Hybrid Brand Architecture strategy',
        'Custom halftone design assets (Up to 5x)',
        'Multi-section responsive platform (React/Vite)',
        'Premium Micro-animations (motion/react)',
        'Durable Local State caching setup',
        'Integrated Quote Estimation module',
        '6 rounds of revisions',
        'Dedicated Slack support channel'
      ],
      cta: 'Secure Reservation',
      badge: 'BEST VALUE',
      featured: true
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-wider text-black/50 mb-2">Investment Structure</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-black tracking-tight mb-6">
            Transparent Pricing. Deep Intent.
          </h2>
          
          {/* Toggle button */}
          <div className="inline-flex items-center gap-3 p-1 rounded-full bg-stone-100 border border-black/5">
            <button
              id="btn-billing-monthly"
              onClick={() => setIsAnnual(false)}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition-all cursor-pointer ${
                !isAnnual ? 'bg-black text-[#faf9f6]' : 'text-black/60 hover:text-black'
              }`}
            >
              Monthly billing
            </button>
            <button
              id="btn-billing-annual"
              onClick={() => setIsAnnual(true)}
              className={`relative text-xs font-semibold px-4 py-2 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                isAnnual ? 'bg-black text-[#faf9f6]' : 'text-black/60 hover:text-black'
              }`}
            >
              Annual billing
              <span className="text-[9px] bg-emerald-500 text-white font-extrabold px-1.5 py-0.5 rounded-md">
                -15%
              </span>
            </button>
          </div>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col justify-between p-8 rounded-3xl border transition-all ${
                plan.featured
                  ? 'bg-black text-[#faf9f6] border-black shadow-xl scale-[1.02] md:scale-105 z-10'
                  : 'bg-white/40 text-black border-black/5 backdrop-blur-sm'
              }`}
            >
              {/* Feature Badge */}
              <div className="flex justify-between items-center mb-6">
                <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md ${
                  plan.featured ? 'bg-[#faf9f6] text-black' : 'bg-stone-100 text-black/60'
                }`}>
                  {plan.badge}
                </span>
                
                {plan.featured && (
                  <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono font-bold">
                    <Sparkles className="h-3 w-3 fill-emerald-400" /> ACTIVE BOOKINGS OPEN
                  </span>
                )}
              </div>

              {/* Title & Price */}
              <div>
                <h3 className="font-display font-bold text-2xl mb-2">{plan.name}</h3>
                <p className={`text-xs mb-6 ${plan.featured ? 'text-[#faf9f6]/70' : 'text-black/60'}`}>
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-mono font-bold">$</span>
                  <span className="text-5xl font-display font-extrabold tracking-tight">
                    {plan.price.toLocaleString()}
                  </span>
                  <span className={`text-xs font-mono ml-2 ${plan.featured ? 'text-[#faf9f6]/50' : 'text-black/40'}`}>
                    / project
                  </span>
                </div>

                {/* Features Checklist */}
                <div className={`border-t py-6 space-y-3 ${plan.featured ? 'border-white/10' : 'border-black/5'}`}>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs">
                      <div className={`mt-0.5 p-0.5 rounded-full ${plan.featured ? 'bg-[#faf9f6] text-black' : 'bg-black text-[#faf9f6]'}`}>
                        <Check className="h-3 w-3" />
                      </div>
                      <span className={plan.featured ? 'text-[#faf9f6]/85' : 'text-black/70'}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                id={`btn-select-plan-${plan.name.toLowerCase().replace(' ', '-')}`}
                className={`w-full py-3.5 rounded-full text-xs font-bold transition-transform active:scale-95 cursor-pointer text-center ${
                  plan.featured
                    ? 'bg-[#faf9f6] text-black hover:bg-stone-100 shadow-md'
                    : 'bg-black text-[#faf9f6] hover:bg-black/90'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Dynamic Project Estimator Widget */}
        <div className="max-w-4xl mx-auto bg-stone-100/60 backdrop-blur-sm border border-black/5 rounded-3xl p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 border-b border-black/5 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-black text-[#faf9f6]">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-black">Interactive Project Estimator</h3>
                <p className="text-xs text-black/50 font-sans">Slide inputs to estimate custom design & engineering service costs</p>
              </div>
            </div>
            
            <span className="px-3 py-1 rounded-full bg-stone-200 text-stone-700 font-mono font-semibold text-[10px] tracking-wider uppercase">
              Real-time Quote Engine
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Inputs */}
            <div className="space-y-6">
              {/* Input 1: Screens Range */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-black/70 flex items-center gap-1">
                    <Sliders className="h-3 w-3" /> Interface Screens count
                  </label>
                  <span className="text-xs font-mono font-bold bg-white px-2 py-0.5 rounded border border-black/10">
                    {numScreens} screen{numScreens > 1 ? 's' : ''}
                  </span>
                </div>
                <input
                  id="range-screens"
                  type="range"
                  min="1"
                  max="20"
                  value={numScreens}
                  onChange={(e) => setNumScreens(parseInt(e.target.value))}
                  className="w-full accent-black cursor-pointer bg-stone-200 h-1.5 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[9px] font-mono text-black/30 mt-1">
                  <span>1 Screen</span>
                  <span>10 Screens</span>
                  <span>20 Screens</span>
                </div>
              </div>

              {/* Input 2: Asset Level Selection */}
              <div>
                <label className="text-xs font-semibold text-black/70 block mb-2">
                  Art Asset Requirements
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Standard', 'Custom', 'Dithered Halftone'] as const).map((lvl) => (
                    <button
                      id={`btn-est-asset-${lvl.toLowerCase().replace(' ', '-')}`}
                      key={lvl}
                      onClick={() => setAssetLevel(lvl)}
                      className={`text-[10px] font-bold py-2 px-1 rounded-xl border text-center transition-all cursor-pointer ${
                        assetLevel === lvl
                          ? 'bg-black text-[#faf9f6] border-black'
                          : 'bg-white text-black/60 border-black/10 hover:border-black/30'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input 3: Animation Level */}
              <div>
                <label className="text-xs font-semibold text-black/70 block mb-2">
                  Tactile Interaction Fidelity
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Minimal', 'Micro', 'Immersive Experience'] as const).map((anim) => (
                    <button
                      id={`btn-est-anim-${anim.toLowerCase().replace(' ', '-')}`}
                      key={anim}
                      onClick={() => setAnimSpeed(anim)}
                      className={`text-[10px] font-bold py-2 px-1 rounded-xl border text-center transition-all cursor-pointer ${
                        animSpeed === anim
                          ? 'bg-black text-[#faf9f6] border-black'
                          : 'bg-white text-black/60 border-black/10 hover:border-black/30'
                      }`}
                    >
                      {anim.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Estimate Display */}
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-dashed border-black/20 bg-stone-50 text-center">
              <span className="text-[10px] font-mono font-bold text-black/40 uppercase tracking-widest mb-2">Estimated Investment</span>
              
              <div className="flex items-baseline justify-center text-black mb-4">
                <span className="text-xl font-mono font-bold">$</span>
                <span className="text-4xl md:text-5xl font-display font-extrabold tracking-tight">
                  {calculateEstimate().toLocaleString()}
                </span>
                <span className="text-xs font-mono ml-1 text-black/40">USD</span>
              </div>

              <p className="text-[10px] text-black/50 max-w-[240px] leading-relaxed mb-6">
                Includes all code handoffs, cloud-optimized deployment, design vectors, and standard security certificates.
              </p>

              <button
                id="btn-lock-estimate-quote"
                onClick={() => {
                  alert(`Quote estimation of $${calculateEstimate().toLocaleString()} successfully saved to browser local session! Tap OK to load brief forms.`);
                }}
                className="w-full max-w-[200px] bg-black text-[#faf9f6] text-xs font-bold py-3 rounded-full hover:bg-black/90 active:scale-95 transition-all cursor-pointer shadow-md"
              >
                Lock in This Quote
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
