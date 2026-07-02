import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenContact: () => void;
  onLogin: () => void;
  onTryNow: () => void;
}

export default function Header({
  activeSection,
  setActiveSection,
  onOpenContact,
  onLogin,
  onTryNow
}: HeaderProps) {
  const navItems = [
    { id: 'insights', label: 'Insights' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'pricing', label: 'Pricing' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#faf9f6]/85 backdrop-blur-md border-b border-black/5 px-6 lg:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button
          id="header-logo-btn"
          onClick={() => setActiveSection('home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span className="font-display font-extrabold text-xl tracking-tight text-black flex items-center gap-1.5">
            NEXORA<span className="text-[10px] font-sans font-medium align-super relative -top-2">®</span>
          </span>
          <div className="h-1.5 w-1.5 rounded-full bg-black scale-0 group-hover:scale-100 transition-transform duration-300" />
        </button>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                id={`nav-${item.id}`}
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className="relative font-sans text-sm font-medium text-black/70 hover:text-black transition-colors py-1 cursor-pointer"
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            id="nav-login-btn"
            onClick={onLogin}
            className="font-sans text-sm font-medium text-black/70 hover:text-black transition-colors px-3 py-1.5 cursor-pointer"
          >
            Login
          </button>
          
          <button
            id="nav-try-btn"
            onClick={onTryNow}
            className="group flex items-center gap-1.5 bg-black text-[#faf9f6] text-sm font-semibold px-4 py-2 rounded-full hover:bg-black/85 active:scale-95 transition-all cursor-pointer shadow-sm hover:shadow-md"
          >
            Try Now
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
}
