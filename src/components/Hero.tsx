import { motion } from 'motion/react';
import { ArrowUpRight, Shield, RefreshCw } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  creationImageSrc: string;
}

export default function Hero({ onOpenContact, creationImageSrc }: HeroProps) {
  // Custom styled SVG logos for a perfect monochrome appearance matching the screenshot
  const partners = [
    {
      name: 'MERCURY',
      logo: (
        <svg className="h-4 text-black/80" viewBox="0 0 120 24" fill="currentColor">
          <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="3" />
          <text x="28" y="17" className="font-sans font-bold tracking-widest text-[11px]">MERCURY</text>
        </svg>
      )
    },
    {
      name: 'ramp',
      logo: (
        <svg className="h-4 text-black/80" viewBox="0 0 90 24" fill="currentColor">
          <path d="M4 18h10l4-12H8L4 18z" />
          <text x="24" y="17" className="font-sans font-extrabold tracking-tight text-[13px]">ramp</text>
        </svg>
      )
    },
    {
      name: 'HEX',
      logo: (
        <svg className="h-4 text-black/80" viewBox="0 0 80 24" fill="currentColor">
          <polygon points="12,4 20,8 20,16 12,20 4,16 4,8" />
          <text x="26" y="17" className="font-mono font-black tracking-widest text-[13px]">HEX</text>
        </svg>
      )
    },
    {
      name: 'Vercel',
      logo: (
        <svg className="h-4 text-black/80" viewBox="0 0 90 24" fill="currentColor">
          <polygon points="12,4 4,18 20,18" />
          <text x="26" y="17" className="font-sans font-bold tracking-tight text-[12px]">Vercel</text>
        </svg>
      )
    },
    {
      name: 'descript',
      logo: (
        <svg className="h-4 text-black/80" viewBox="0 0 100 24" fill="currentColor">
          <path d="M4 4h8c4.4 0 8 3.6 8 8s-3.6 8-8 8H4V4zm4 4v8h4c2.2 0 4-1.8 4-4s-1.8-4-4-4H8z" />
          <text x="26" y="17" className="font-sans font-bold tracking-tight text-[11px]">descript</text>
        </svg>
      )
    },
    {
      name: 'Cash App',
      logo: (
        <svg className="h-4 text-black/80" viewBox="0 0 110 24" fill="currentColor">
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <text x="9" y="16" className="font-sans font-bold text-[11px] fill-[#faf9f6]">$</text>
          <text x="26" y="17" className="font-sans font-semibold tracking-tight text-[11px]">Cash App</text>
        </svg>
      )
    },
    {
      name: 'SUPERCELL',
      logo: (
        <svg className="h-[22px] text-black/80" viewBox="0 0 40 40" fill="currentColor">
          <rect x="2" y="2" width="36" height="36" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
          <text x="5" y="13" className="font-sans font-black text-[9px] tracking-tighter">SUP</text>
          <text x="5" y="23" className="font-sans font-black text-[9px] tracking-tighter">ERC</text>
          <text x="5" y="33" className="font-sans font-black text-[9px] tracking-tighter">ELL</text>
        </svg>
      )
    },
    {
      name: 'runway',
      logo: (
        <svg className="h-4 text-black/80" viewBox="0 0 90 24" fill="currentColor">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M12 8v8M12 12h4" stroke="currentColor" strokeWidth="2" />
          <text x="26" y="17" className="font-sans font-bold tracking-tight text-[12px]">runway</text>
        </svg>
      )
    }
  ];

  return (
    <section className="relative pt-12 lg:pt-20 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-white/40 backdrop-blur-sm text-xs text-black/60 mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Now scheduling Q3/Q4 briefs
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-6xl lg:text-[72px] tracking-tight leading-[1.05] text-black max-w-4xl"
        >
          Bold Ideas That<br />Start With Vision.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-sm md:text-base text-black/60 max-w-md md:max-w-lg leading-relaxed"
        >
          We help modern brands craft digital stories that<br className="hidden sm:inline" />
          inspire action and drive results.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <button
            id="hero-cta-btn"
            onClick={onOpenContact}
            className="group flex items-center gap-2 bg-black text-[#faf9f6] font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-black/95 active:scale-95 transition-all cursor-pointer shadow-md hover:shadow-xl"
          >
            Get In Touch
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Main Creation Graphic */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="mt-12 lg:mt-16 w-full max-w-4xl border border-black/10 rounded-2xl p-1 bg-white/40 shadow-xl overflow-hidden group"
        >
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-stone-100">
            {/* Soft tint gradient overlay to match image dither and add depth */}
            <div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-50/20 via-transparent to-transparent z-10" />
            
            <img
              src={creationImageSrc}
              alt="Hands of creation - human meets cybernetic"
              className="w-full h-full object-cover grayscale brightness-95 contrast-105 group-hover:scale-[1.01] transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Trusted Partners Section */}
        <div className="mt-16 lg:mt-24 w-full">
          <p className="text-[11px] font-sans font-medium uppercase tracking-widest text-black/40 text-center mb-8">
            Trusted by teams of every scale
          </p>
          
          {/* Partnership Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-y-8 gap-x-6 items-center justify-items-center max-w-6xl mx-auto px-4">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
                className="opacity-60 hover:opacity-100 transition-opacity flex items-center justify-center h-8"
              >
                {partner.logo}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
