import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Palette, Type, Shield, CheckCircle, Upload, ArrowRight, Compass, RefreshCw, Send, Trash2 } from 'lucide-react';
import { BrandBrief } from '../types';

interface ClientPortalProps {
  initialMode?: 'login' | 'try_now';
  onExit: () => void;
}

export default function ClientPortal({ initialMode = 'try_now', onExit }: ClientPortalProps) {
  const [currentMode, setCurrentMode] = useState<'login' | 'try_now' | 'workspace'>(initialMode);
  
  // Login State
  const [email, setEmail] = useState('');
  const [authSuccess, setAuthSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Brand Brief Generator State
  const [brandName, setBrandName] = useState('Oasis');
  const [industry, setIndustry] = useState('Wellness');
  const [vibe, setVibe] = useState('Minimalist Slate');
  const [generatedKit, setGeneratedKit] = useState<BrandBrief | null>(null);

  // File Upload state for usability guidelines
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string }[]>([]);

  // Workspace Chat State
  const [chatMessage, setChatMessage] = useState('');
  const [chatLog, setChatLog] = useState<{ sender: 'client' | 'nexora'; text: string; time: string }[]>([
    { sender: 'nexora', text: 'Hi Adrian! We successfully rendered your halftone assets. Let us know if you have any feedback on the grid alignment.', time: '05:00 AM' }
  ]);

  // Handle Mock Authentication
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAuthSuccess(true);
      setTimeout(() => {
        setCurrentMode('workspace');
      }, 800);
    }, 1200);
  };

  // Drag and Drop implementation
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setUploadedFiles(prev => [...prev, { name: file.name, size: (file.size / 1024).toFixed(1) + ' KB' }]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setUploadedFiles(prev => [...prev, { name: file.name, size: (file.size / 1024).toFixed(1) + ' KB' }]);
    }
  };

  // Generate Custom Brand Kit based on input rules
  const handleGenerateBrandKit = () => {
    let accent = '#1a1a1a';
    let palette = ['#1a1a1a', '#4a4a4a', '#8a8a8a', '#d1d1d1', '#f5f5f5'];
    let tagline = `${brandName}: Intentionality in every detail.`;
    let headingFont = 'Outfit';
    let bodyFont = 'Inter';

    if (vibe === 'Minimalist Slate') {
      accent = '#2f3e46';
      palette = ['#2f3e46', '#354f52', '#52796f', '#84a59d', '#faf9f6'];
      tagline = `${brandName}: Silent spaces that amplify your true impact.`;
    } else if (vibe === 'Warm Organic') {
      accent = '#b5838d';
      palette = ['#6b705c', '#a5a58d', '#b7b7a4', '#ffe8d6', '#ddbea9'];
      tagline = `${brandName}: Rooted in nature. Elevated by human design.`;
      headingFont = 'Syne';
    } else if (vibe === 'Bold Tech') {
      accent = '#03045e';
      palette = ['#03045e', '#0077b6', '#00b4d8', '#90e0ef', '#caf0f8'];
      tagline = `${brandName}: Streamlining high-scale infrastructure.`;
      headingFont = 'Space Grotesk';
    } else if (vibe === 'Cyber Punk') {
      accent = '#ff0054';
      palette = ['#ff0054', '#9e0059', '#3e0066', '#ffbd00', '#f5f5f5'];
      tagline = `${brandName}: Overclocking aesthetic limits.`;
      headingFont = 'Syne';
    }

    setGeneratedKit({
      brandName,
      industry,
      vibe,
      accentColor: accent,
      palette,
      tagline,
      fonts: {
        heading: headingFont,
        body: bodyFont
      }
    });
  };

  // Chat message submission
  const sendChatMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = { sender: 'client' as const, text: chatMessage, time: 'Now' };
    setChatLog(prev => [...prev, userMsg]);
    setChatMessage('');

    setTimeout(() => {
      setChatLog(prev => [...prev, {
        sender: 'nexora',
        text: `Thanks for the feedback! We logged this and will update our design dashboard.`,
        time: 'Now'
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-[80vh] py-12 px-6 lg:px-12 w-full max-w-7xl mx-auto flex flex-col justify-center">
      
      {/* Top Controls Back to Home button */}
      <div className="flex justify-between items-center mb-10 pb-6 border-b border-black/5">
        <button
          id="btn-exit-portal"
          onClick={onExit}
          className="text-xs font-bold text-black/60 hover:text-black transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          ← Return to Nexora Studio
        </button>

        <span className="font-mono text-[10px] uppercase tracking-wider text-black/40">
          SECURE PROTOCOL INTERACTION
        </span>
      </div>

      <AnimatePresence mode="wait">
        {/* VIEW 1: TRY NOW (Brand Kit Generator) */}
        {currentMode === 'try_now' && (
          <motion.div
            key="try_now_view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            {/* Control Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf9f6] border border-black/10 text-[10px] font-mono font-bold text-black mb-3">
                  <Compass className="h-3 w-3 animate-spin" style={{ animationDuration: '6s' }} /> BRAND EXPERIMENT
                </span>
                
                <h2 className="font-display font-bold text-3xl text-black tracking-tight leading-tight">
                  Design Your Digital Brand Kit
                </h2>
                
                <p className="text-xs text-black/60 leading-relaxed mt-2">
                  Input your parameters below. Our custom local aesthetic orchestrator compiles curated color cards, typography pairs, and custom taglines.
                </p>
              </div>

              {/* Form Input Blocks */}
              <div className="space-y-4">
                {/* Brand Name */}
                <div>
                  <label className="text-[10px] font-semibold text-black/50 uppercase tracking-widest block mb-1.5">
                    Brand Name
                  </label>
                  <input
                    id="input-brand-name"
                    type="text"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full bg-stone-50 text-black text-xs font-semibold px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-black transition-all"
                  />
                </div>

                {/* Industry */}
                <div>
                  <label className="text-[10px] font-semibold text-black/50 uppercase tracking-widest block mb-1.5">
                    Industry Domain
                  </label>
                  <select
                    id="select-brand-industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full bg-stone-50 text-black text-xs font-semibold px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-black transition-all cursor-pointer"
                  >
                    <option value="Wellness">Wellness & Organic Products</option>
                    <option value="Finance">Modern Finance (Fintech)</option>
                    <option value="SaaS Tech">Software & Cybernetics</option>
                    <option value="Fashion">Curated Fashion & Lifestyle</option>
                  </select>
                </div>

                {/* Brand Vibe Selector */}
                <div>
                  <label className="text-[10px] font-semibold text-black/50 uppercase tracking-widest block mb-1.5">
                    Visual Vibe Aesthetic
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Minimalist Slate', 'Warm Organic', 'Bold Tech', 'Cyber Punk'].map((vb) => (
                      <button
                        id={`btn-vibe-${vb.toLowerCase().replace(' ', '-')}`}
                        key={vb}
                        onClick={() => setVibe(vb)}
                        className={`text-[10px] font-bold py-2.5 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                          vibe === vb
                            ? 'bg-black text-[#faf9f6] border-black'
                            : 'bg-white text-black/60 border-black/10 hover:border-black/20'
                        }`}
                      >
                        {vb}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trigger Button */}
                <button
                  id="btn-compile-brand-kit"
                  onClick={handleGenerateBrandKit}
                  className="w-full bg-black text-[#faf9f6] hover:bg-black/90 text-xs font-bold py-3.5 rounded-full flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer shadow-md"
                >
                  <Palette className="h-4 w-4" />
                  <span>Compile Brand Kit</span>
                </button>
              </div>
            </div>

            {/* Display Column */}
            <div className="lg:col-span-7">
              <div className="relative border border-dashed border-black/10 bg-stone-50/50 rounded-3xl p-6 md:p-8 min-h-[400px] flex flex-col justify-center items-center">
                
                {generatedKit ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full space-y-6 text-left"
                  >
                    {/* Header preview badge */}
                    <div className="flex justify-between items-center border-b border-black/5 pb-4">
                      <div>
                        <span className="font-mono text-[9px] bg-black text-[#faf9f6] px-2 py-0.5 rounded uppercase">
                          {generatedKit.vibe}
                        </span>
                        <h3 className="font-display font-extrabold text-2xl text-black mt-1">
                          {generatedKit.brandName}
                        </h3>
                      </div>
                      
                      <button
                        id="btn-recompile-kit"
                        onClick={handleGenerateBrandKit}
                        className="p-2 rounded-full hover:bg-stone-200 text-black/50 hover:text-black transition-colors"
                        title="Re-compile Brand Kit"
                      >
                        <RefreshCw className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    {/* Tagline section */}
                    <div>
                      <span className="text-[10px] font-mono text-black/40 block mb-1">PROPOSED SLOGAN</span>
                      <p className="font-serif italic text-base md:text-lg text-black font-semibold">
                        "{generatedKit.tagline}"
                      </p>
                    </div>

                    {/* Color Palette Cards */}
                    <div>
                      <span className="text-[10px] font-mono text-black/40 block mb-2">CURATED COLOR PALETTE (TAP TO COPY)</span>
                      <div className="grid grid-cols-5 gap-2 h-20">
                        {generatedKit.palette.map((col, cIdx) => (
                          <button
                            id={`btn-copy-color-${cIdx}`}
                            key={cIdx}
                            onClick={() => {
                              navigator.clipboard.writeText(col);
                              alert(`Copied hex code ${col} to clipboard!`);
                            }}
                            className="group relative rounded-xl h-full w-full border border-black/5 flex flex-col justify-end p-2 transition-transform hover:-translate-y-1 cursor-pointer"
                            style={{ backgroundColor: col }}
                          >
                            <span 
                              className="text-[8px] font-mono font-bold select-all bg-white/80 px-1 py-0.2 rounded"
                              style={{ color: '#000' }}
                            >
                              {col}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Font Pairings recommendations */}
                    <div className="grid grid-cols-2 gap-4 border-t border-black/5 pt-4">
                      <div>
                        <span className="text-[10px] font-mono text-black/40 block mb-1.5">HEADING TYPOGRAPHY</span>
                        <div className="p-3 rounded-xl bg-white border border-black/5">
                          <span className="font-display font-bold text-lg text-black">{generatedKit.fonts.heading}</span>
                          <span className="text-[9px] font-mono text-black/40 block mt-0.5">Title display</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono text-black/40 block mb-1.5">BODY TYPOGRAPHY</span>
                        <div className="p-3 rounded-xl bg-white border border-black/5">
                          <span className="font-sans font-medium text-sm text-black">{generatedKit.fonts.body}</span>
                          <span className="text-[9px] font-mono text-black/40 block mt-0.5">Fluid text block</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100/30 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                        <span className="text-[11px] font-bold text-emerald-800">Perfect Alignment found! Ready to lock in brand kit.</span>
                      </div>
                      
                      <button
                        id="btn-kit-lock-in"
                        onClick={() => setCurrentMode('login')}
                        className="text-[10px] font-extrabold bg-black text-[#faf9f6] py-1.5 px-3 rounded-lg hover:bg-black/90 transition-colors"
                      >
                        Build App Now
                      </button>
                    </div>

                  </motion.div>
                ) : (
                  <div className="text-center max-w-xs">
                    <Palette className="h-8 w-8 text-black/30 mx-auto mb-3" />
                    <h4 className="font-display font-bold text-lg text-black mb-1">Waiting for Parameters</h4>
                    <p className="text-xs text-black/50 leading-relaxed">
                      Enter your brand information and press **"Compile Brand Kit"** to render a custom aesthetic solution.
                    </p>
                  </div>
                )}

              </div>
            </div>
          </motion.div>
        )}

        {/* VIEW 2: LOGIN COMPONENT */}
        {currentMode === 'login' && (
          <motion.div
            key="login_view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="max-w-md mx-auto bg-white/40 border border-black/5 rounded-3xl p-8 shadow-xl text-center"
          >
            <span className="font-mono text-[9px] bg-black text-[#faf9f6] px-2.5 py-0.5 rounded-full uppercase">
              CLIENT WORKSPACE ACCESS
            </span>

            <h2 className="font-display font-bold text-2xl text-black tracking-tight mt-6">
              Enter Nexora Portal
            </h2>

            <p className="text-xs text-black/50 mt-1 mb-6">
              Use your credentials or access portal using mock magic-link verification.
            </p>

            {!authSuccess ? (
              <form id="login-form" onSubmit={handleLogin} className="space-y-4">
                <div className="text-left">
                  <label className="text-[10px] font-semibold text-black/60 uppercase tracking-widest block mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="input-login-email"
                    type="email"
                    required
                    placeholder="e.g. adrian@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-stone-50 text-black text-xs font-semibold px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-black transition-all"
                  />
                </div>

                <button
                  id="btn-login-submit"
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-[#faf9f6] hover:bg-black/90 text-xs font-bold py-3.5 rounded-full flex items-center justify-center gap-2 active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <span className="h-4 w-4 rounded-full border-2 border-[#faf9f6] border-t-transparent animate-spin" />
                  ) : (
                    <>
                      <span>Generate Magic Link</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6"
              >
                <div className="inline-flex p-3 rounded-full bg-emerald-50 text-emerald-600 mb-4 animate-bounce">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h4 className="font-display font-bold text-lg text-black mb-1">Access Granted!</h4>
                <p className="text-xs text-black/50">Redirecting to project milestone boards...</p>
              </motion.div>
            )}

            {/* Quick Demo Assist */}
            <div className="border-t border-black/5 mt-6 pt-4 text-left">
              <p className="text-[10px] text-black/40 font-mono text-center">
                Or bypass login directly using:
              </p>
              <button
                id="btn-bypass-login"
                onClick={() => setCurrentMode('workspace')}
                className="w-full mt-2 text-xs font-bold bg-stone-100 hover:bg-stone-200 py-2.5 rounded-xl text-black text-center cursor-pointer transition-colors"
              >
                Enter as Demo Guest Client
              </button>
            </div>
          </motion.div>
        )}

        {/* VIEW 3: FULL WORKSPACE DASHBOARD */}
        {currentMode === 'workspace' && (
          <motion.div
            key="workspace_view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          >
            {/* Left Workspace: Milestones & Upload */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Project Title bar */}
              <div className="bg-stone-100/60 rounded-3xl p-6 border border-black/5">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-[9px] font-mono text-black/40 uppercase">ACTIVE PROJECT DIRECTORY</span>
                    <h3 className="font-display font-extrabold text-xl text-black">Horizon Branding Project</h3>
                  </div>
                  
                  <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 font-bold px-3 py-1 rounded-full border border-emerald-100">
                    Phase 3 IN PROGRESS
                  </span>
                </div>

                <p className="text-xs text-black/60 leading-relaxed">
                  Welcome to your secure studio workspace. All project assets, high-fidelity source files, and milestone checklists are cached here.
                </p>
              </div>

              {/* Milestones Board */}
              <div className="bg-white/40 rounded-3xl p-6 border border-black/5">
                <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-4 border-b border-black/5 pb-2">
                  Active Milestone Pipeline
                </h4>

                <div className="space-y-4">
                  {/* Milestones list */}
                  {[
                    { title: 'Interactive Brand Archetype Alignment', desc: 'Identify core demographic resonances and tone matrices.', status: 'completed' },
                    { title: 'Dithered Halftone Art Asset Production', desc: 'Produce high-contrast cybernetic meeting hand assets.', status: 'completed' },
                    { title: 'Fluid Front-end Engine Construction', desc: 'React 19, tailwind v4, and dynamic frame components.', status: 'active', pct: '70%' },
                    { title: 'Production Release & Zero-CLS Testing', desc: 'Deploy bundle checks to edge networks with full validation.', status: 'pending' }
                  ].map((mil, mIdx) => (
                    <div key={mIdx} className="flex gap-3 text-left">
                      <div className="mt-0.5">
                        {mil.status === 'completed' ? (
                          <div className="h-4 w-4 rounded-full bg-black text-[#faf9f6] flex items-center justify-center font-bold text-[9px]">✓</div>
                        ) : mil.status === 'active' ? (
                          <div className="h-4 w-4 rounded-full bg-[#faf9f6] border border-black text-black flex items-center justify-center font-bold text-[9px] animate-pulse">●</div>
                        ) : (
                          <div className="h-4 w-4 rounded-full border border-black/15 text-black/30 flex items-center justify-center font-bold text-[9px]">○</div>
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-bold ${mil.status === 'pending' ? 'text-black/40' : 'text-black'}`}>
                            {mil.title}
                          </span>
                          
                          {mil.status === 'active' && (
                            <span className="text-[10px] font-mono font-bold text-black bg-stone-100 px-1.5 py-0.2 rounded border border-black/5">
                              {mil.pct}
                            </span>
                          )}
                        </div>
                        <p className={`text-[10px] ${mil.status === 'pending' ? 'text-black/30' : 'text-black/50'}`}>
                          {mil.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Usability Guidelines: Drag-and-Drop / Manual File Upload Widget */}
              <div className="bg-white/40 rounded-3xl p-6 border border-black/5">
                <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-2 border-b border-black/5 pb-2">
                  Asset Handoff Portal
                </h4>
                
                <p className="text-[11px] text-black/50 leading-relaxed mb-4">
                  Upload custom design vector briefs, color spec sheets, or feedback documents directly to our production server.
                </p>

                {/* Dropzone container */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                    isDragging
                      ? 'border-black bg-stone-100/50'
                      : 'border-black/10 bg-stone-50/50 hover:border-black/20'
                  }`}
                >
                  <input
                    id="file-upload-input"
                    type="file"
                    className="hidden"
                    onChange={handleFileSelect}
                  />
                  
                  <label htmlFor="file-upload-input" className="cursor-pointer">
                    <Upload className="h-6 w-6 text-black/40 mx-auto mb-2" />
                    <span className="text-xs font-bold text-black block mb-1">
                      Drag & Drop files here, or <span className="underline">browse</span>
                    </span>
                    <span className="text-[10px] text-black/40 block">
                      Supports PDF, PNG, SVG (Max 10MB)
                    </span>
                  </label>
                </div>

                {/* Uploaded files queue */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <span className="text-[10px] font-mono text-black/40 block uppercase">Uploaded Queue</span>
                    
                    {uploadedFiles.map((file, fIdx) => (
                      <div key={fIdx} className="flex justify-between items-center bg-stone-50 border border-black/5 p-2 rounded-xl text-xs">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                          <div>
                            <span className="font-semibold text-black block max-w-[200px] truncate">{file.name}</span>
                            <span className="text-[9px] text-black/40">{file.size}</span>
                          </div>
                        </div>

                        <button
                          id={`btn-delete-uploaded-file-${fIdx}`}
                          onClick={() => setUploadedFiles(prev => prev.filter((_, i) => i !== fIdx))}
                          className="p-1.5 rounded-full hover:bg-stone-200 text-black/40 hover:text-red-500 transition-colors cursor-pointer"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Right Workspace: Secure Chat Messenger with Agency */}
            <div className="lg:col-span-5">
              <div className="bg-[#faf9f6] border border-black/5 rounded-3xl shadow-xl flex flex-col justify-between h-[500px]">
                
                {/* Chat Top bar */}
                <div className="p-4 border-b border-black/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <div>
                      <h4 className="text-xs font-bold text-black">Nexora Support Hub</h4>
                      <p className="text-[9px] text-black/40">Studio alignment manager active</p>
                    </div>
                  </div>

                  <span className="text-[9px] font-mono text-stone-400">SESSION: 921A-K</span>
                </div>

                {/* Chat Stream Log */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {chatLog.map((chat, idx) => {
                    const isClient = chat.sender === 'client';
                    return (
                      <div key={idx} className={`flex flex-col ${isClient ? 'items-end' : 'items-start'}`}>
                        <div className={`p-3 rounded-2xl max-w-[80%] text-xs ${
                          isClient
                            ? 'bg-black text-[#faf9f6]'
                            : 'bg-stone-100 text-black border border-black/5'
                        }`}>
                          {chat.text}
                        </div>
                        <span className="text-[8px] font-mono text-black/30 mt-1 px-1">{chat.time}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Chat Input form */}
                <form id="workspace-chat-form" onSubmit={sendChatMessage} className="p-4 border-t border-black/5 flex gap-2">
                  <input
                    id="input-chat-msg"
                    type="text"
                    required
                    placeholder="Enter message for the studio architects..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="flex-1 bg-stone-50 text-black text-xs font-medium px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:border-black transition-all"
                  />

                  <button
                    id="btn-send-chat"
                    type="submit"
                    className="p-3 rounded-xl bg-black hover:bg-black/90 text-[#faf9f6] transition-colors cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>

              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
