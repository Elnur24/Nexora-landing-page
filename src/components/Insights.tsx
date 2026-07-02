import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, ArrowRight, X, Heart, MessageSquare, Share2 } from 'lucide-react';
import { Article } from '../types';

interface InsightsProps {
  isStandalone?: boolean;
}

export default function Insights({ isStandalone = false }: InsightsProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Strategy' | 'Design' | 'AI' | 'Craft'>('All');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [likedList, setLikedList] = useState<Record<string, boolean>>({});

  const categories: ('All' | 'Strategy' | 'Design' | 'AI' | 'Craft')[] = ['All', 'Strategy', 'Design', 'AI', 'Craft'];

  const articles: Article[] = [
    {
      id: '1',
      title: 'The Convergence of Carbon and Silicon in Brand Architecture',
      category: 'Strategy',
      date: 'June 28, 2026',
      readTime: '6 min read',
      excerpt: 'Why modern digital identity design must bridge the organic physical reality of human experience with robotic mechanical precision.',
      content: `The modern landscape is no longer split between the digital screen and the physical product. They have synthesized. In this post-hybrid environment, top-tier brands must express their values through an intersection of organic storytelling (carbon) and hyper-efficient computational tools (silicon).

We call this Hybrid Brand Architecture. When we look at standard digital agencies, they either overemphasize the tech (making it look like cold cyber-slop) or over-humanize (making it feel disconnected from modern technology capabilities). 

The optimal point lies right at the intersection—represented beautifully in our core motif, the meeting of human and cybernetic fingers. True craft lies in designing the tension between these two worlds. Every border radius, every typography spacing, and every visual interaction must reflect this delicate balance.`,
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '2',
      title: 'Aesthetic Resonance: Designing for Human Cognition',
      category: 'Design',
      date: 'May 14, 2026',
      readTime: '4 min read',
      excerpt: 'How sensory balance, micro-interactions, and visual negative spaces work together to build long-term retention and trust.',
      content: `Most user interfaces today suffer from attention noise. Information is cluttered, margins are non-existent, and there is a total lack of typographic hierarchy.

To combat this, Nexora employs a philosophy we call Aesthetic Resonance. We utilize generous white space, high-contrast monochrome tones, and precise layout grids to give the brain breathing room. 

When a design resonates, the interface recedes, and the core message is delivered with maximum impact. We believe that UI is not a decorative frame; it is an invisible facilitator of human intent.`,
      imageUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '3',
      title: 'Generative Design: Collaboration with the Cybernetic Mind',
      category: 'AI',
      date: 'April 20, 2026',
      readTime: '8 min read',
      excerpt: 'How art direction shifts from drawing vectors and lines to training pipelines and crafting generative brand parameters.',
      content: `AI is not a replacement for human creative spark—it is a feedback loop. At Nexora, we treat Generative Artificial Intelligence as an artistic sparring partner. 

We generate high-resolution dithered textures, custom layout structures, and conceptual copy drafts, but we curate and synthesize them through high-fidelity human aesthetic judgment. 

The future designer is an editor and a prompt orchestrator, establishing parameters of color, typography, and density, and allowing models to explore the vast space of alternatives, only to prune and polish the absolute finest pearls.`,
      imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '4',
      title: 'The New Standard of Immersive Web Experience',
      category: 'Craft',
      date: 'March 05, 2026',
      readTime: '5 min read',
      excerpt: 'Moving past flat layouts. How to weave motion, interactive state, and bold layout structure into highly responsive web spaces.',
      content: `The static web is dying. Users expect interfaces to react to their presence, cursors, and scrolls with organic physics. 

Using modern toolkits like motion/react, we design subtle momentum animations, floating hover cards, and seamless transitions. 

By avoiding heavy, distracting full-screen animations and focusing instead on micro-moments—such as an elegant line expansion on header links or a fluid modal slide—we create a sense of tactile craftsmanship that makes your digital product feel expensive, responsive, and robust.`,
      imageUrl: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(art => art.category === selectedCategory);

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const isLiked = likedList[id];
    setLikedList(prev => ({ ...prev, [id]: !isLiked }));
    setLikes(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + (isLiked ? -1 : 1)
    }));
  };

  return (
    <div className={`w-full ${isStandalone ? 'pt-10 pb-20' : 'py-20'} px-6 lg:px-12`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-black/50 mb-2">Editorial Hub</p>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-black tracking-tight">
              Nexora Insights
            </h2>
          </div>
          
          {/* Categories Selector */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map(cat => (
              <button
                id={`btn-insight-cat-${cat}`}
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-black text-[#faf9f6] border-black'
                    : 'bg-white/40 text-black/60 border-black/10 hover:border-black/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article, idx) => (
              <motion.article
                id={`article-card-${article.id}`}
                key={article.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedArticle(article)}
                className="group flex flex-col justify-between p-6 rounded-2xl border border-black/5 bg-white/40 backdrop-blur-sm hover:border-black/15 hover:shadow-lg transition-all cursor-pointer"
              >
                <div>
                  {/* Category & Time */}
                  <div className="flex items-center justify-between text-xs text-black/40 font-mono mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-stone-100 font-semibold text-black/70">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl md:text-2xl text-black group-hover:text-black/85 transition-colors leading-tight mb-3">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-black/60 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer interactive bar */}
                <div className="flex items-center justify-between border-t border-black/5 pt-4 mt-auto">
                  <span className="text-xs font-mono text-black/40">{article.date}</span>
                  
                  <div className="flex items-center gap-4">
                    {/* Inline Heart Reaction */}
                    <button
                      id={`btn-like-article-${article.id}`}
                      onClick={(e) => handleLike(article.id, e)}
                      className={`flex items-center gap-1 text-xs font-medium py-1 px-2.5 rounded-full border transition-all ${
                        likedList[article.id]
                          ? 'bg-red-50 text-red-600 border-red-200'
                          : 'bg-stone-50 text-black/50 border-transparent hover:border-black/10'
                      }`}
                    >
                      <Heart className={`h-3.5 w-3.5 ${likedList[article.id] ? 'fill-red-600' : ''}`} />
                      <span>{(likes[article.id] || 0) + (article.id === '1' ? 42 : article.id === '2' ? 27 : 18)}</span>
                    </button>

                    <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1 text-xs font-semibold text-black">
                      Read
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Detailed Article Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedArticle(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative bg-[#faf9f6] w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-black/10 p-6 md:p-10 shadow-2xl z-10"
              >
                {/* Close Button */}
                <button
                  id="btn-close-article-modal"
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-black/70 hover:text-black transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>

                {/* Content Category Header */}
                <div className="inline-block px-3 py-1 rounded-md bg-stone-100 font-mono text-xs font-bold text-black/60 mb-4">
                  {selectedArticle.category}
                </div>

                {/* Modal Title */}
                <h2 className="font-display font-bold text-2xl md:text-4xl text-black tracking-tight leading-tight mb-4">
                  {selectedArticle.title}
                </h2>

                {/* Metadata Line */}
                <div className="flex items-center gap-4 text-xs font-mono text-black/40 mb-8 pb-4 border-b border-black/5">
                  <span>Published: {selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                {/* Editorial Content */}
                <div className="prose prose-stone max-w-none">
                  {selectedArticle.content.split('\n\n').map((paragraph, index) => {
                    if (index === 0) {
                      // Styled first paragraph with leading drop-cap styled cleanly
                      return (
                        <p key={index} className="text-base md:text-lg text-black/85 leading-relaxed font-sans first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:text-black mb-6">
                          {paragraph}
                        </p>
                      );
                    }
                    return (
                      <p key={index} className="text-sm md:text-base text-black/70 leading-relaxed mb-6 font-sans">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                {/* Modal Footer Interactions */}
                <div className="flex flex-wrap gap-4 items-center justify-between mt-10 pt-6 border-t border-black/5">
                  <div className="flex items-center gap-3">
                    <button
                      id={`btn-modal-like-${selectedArticle.id}`}
                      onClick={(e) => handleLike(selectedArticle.id, e)}
                      className={`flex items-center gap-1.5 text-xs font-semibold py-2 px-4 rounded-full border transition-all ${
                        likedList[selectedArticle.id]
                          ? 'bg-red-50 text-red-600 border-red-200'
                          : 'bg-stone-100 text-black/60 border-transparent hover:border-black/10'
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${likedList[selectedArticle.id] ? 'fill-red-600' : ''}`} />
                      <span>Like</span>
                    </button>

                    <button
                      id="btn-modal-share"
                      className="flex items-center gap-1.5 text-xs font-semibold py-2 px-4 rounded-full bg-stone-100 hover:bg-stone-200 text-black/60 transition-all border border-transparent"
                    >
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                  </div>

                  <button
                    id="btn-modal-discuss"
                    onClick={() => {
                      setSelectedArticle(null);
                      // Trigger client portal or callback
                    }}
                    className="text-xs font-bold bg-black text-[#faf9f6] px-5 py-2.5 rounded-full hover:bg-black/90 transition-colors"
                  >
                    Discuss on Portal
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
