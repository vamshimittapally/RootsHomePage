import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import { motion } from 'framer-motion';
import { ArrowDown, Zap, Anchor, Filter, Wind, Moon, Sun, Hexagon, Leaf } from 'lucide-react';

function App() {
  const canvasRef = useRef();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    let phi = 0;

    // Theme-Aware Color Palette for Globe
    const baseColor = isDarkMode ? [255 / 255, 215 / 255, 0 / 255] : [148 / 255, 163 / 255, 184 / 255]; // Gold (#FFD700) vs Slate-400 (#94A3B8)
    const markerColor = isDarkMode ? [255 / 255, 215 / 255, 0 / 255] : [148 / 255, 163 / 255, 184 / 255];
    const glowColor = isDarkMode ? [255 / 255, 215 / 255, 0 / 255] : [148 / 255, 163 / 255, 184 / 255];

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1800,
      height: 1800,
      phi: 0,
      theta: 0.3,
      dark: isDarkMode ? 1 : 0,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 15000,
      mapBrightness: 3,
      baseColor: baseColor,
      markerColor: markerColor,
      glowColor: glowColor,
      opacity: 0.8,
      offset: [0, 0],
      markers: [
        { location: [37.7595, -122.4367], size: 0.07 },
        { location: [40.7128, -74.0060], size: 0.07 },
        { location: [51.5074, -0.1278], size: 0.07 },
        { location: [35.6762, 139.6503], size: 0.07 },
        { location: [-33.8688, 151.2093], size: 0.07 },
        { location: [19.0760, 72.8777], size: 0.07 },
        { location: [1.3521, 103.8198], size: 0.07 },
        { location: [52.5200, 13.4050], size: 0.07 },
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.003
      },
    });

    // Applying Glow Effect for Night-Lights (via shadow on the parent if needed, 
    // but Cobe doesn't natively support shadowBlur on markers. 
    // We approximate by increasing marker size and opacity in dark mode.)

    return () => {
      globe.destroy();
    };
  }, [isDarkMode]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`selection:bg-sage-100 selection:text-ink min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-slate-900 text-white' : 'bg-paper text-ink'}`}>
      <div className="bg-dot-grid"></div>

      {/* Navigation */}
      <nav className={`fixed w-full top-0 left-0 backdrop-blur-md border-b z-50 transition-colors duration-300 ${isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group">
            <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-6 transition-transform duration-300">
              <path d="M50 45 C 50 45, 50 70, 50 75 C 50 85, 40 90, 30 95" stroke={isDarkMode ? "#fff" : "#111"} strokeWidth="5" strokeLinecap="round" />
              <path d="M50 75 C 50 85, 60 90, 70 95" stroke={isDarkMode ? "#fff" : "#111"} strokeWidth="5" strokeLinecap="round" />
              <path d="M50 75 C 50 85, 50 92, 50 98" stroke={isDarkMode ? "#fff" : "#111"} strokeWidth="5" strokeLinecap="round" />
              <path d="M50 45 C 50 45, 30 55, 25 50" stroke={isDarkMode ? "#fff" : "#111"} strokeWidth="5" strokeLinecap="round" />
              <path d="M50 45 C 50 45, 70 55, 75 50" stroke={isDarkMode ? "#fff" : "#111"} strokeWidth="5" strokeLinecap="round" />
              <circle cx="50" cy="20" r="6" fill={isDarkMode ? "#FFD700" : "#6B8274"} />
              <circle cx="35" cy="25" r="5" fill={isDarkMode ? "#FFD700" : "#8DA399"} />
              <circle cx="65" cy="25" r="5" fill={isDarkMode ? "#FFD700" : "#8DA399"} />
            </svg>
            <span className={`font-bold text-lg tracking-tight ${isDarkMode ? 'text-white' : 'text-ink'}`}>Roots41</span>
          </div>

          <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
            <a href="#method" className={`hover:text-ink transition-colors ${isDarkMode ? 'hover:text-white' : ''}`}>Philosophy</a>
            <a href="#features" className={`hover:text-ink transition-colors ${isDarkMode ? 'hover:text-white' : ''}`}>Engine</a>
            <a href="#manifesto" className={`hover:text-ink transition-colors ${isDarkMode ? 'hover:text-white' : ''}`}>Manifesto</a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#" className={`text-sm font-medium transition-colors ${isDarkMode ? 'text-slate-300 hover:text-white' : 'text-gray-600 hover:text-ink'}`}>Log In</a>
            <button onClick={() => scrollToSection('contact')} className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors shadow-sm ${isDarkMode ? 'bg-white text-ink hover:bg-gray-200' : 'bg-ink text-white hover:bg-gray-800'}`}>Request Access</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div id="globe-container" className={isDarkMode ? "before:content-[''] before:absolute before:inset-0 before:bg-[#FFD700]/5 before:rounded-full before:blur-[100px]" : ""}>
          <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }}></canvas>
        </div>

        <div className="content-layer max-w-3xl mx-auto px-6 text-center relative pointer-events-none">
          {/* Visual Depth: Emerald Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/20 blur-[120px] rounded-full -z-10 mix-blend-screen pointer-events-none"></div>

          {/* New "Built for Students" Badge */}
          <div className="inline-block px-3 py-1 mb-8 text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-500 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full animate-fade-up shadow-sm pointer-events-auto">
            Built for Students & Learners
          </div>

          <h1 className={`text-6xl md:text-8xl font-semibold mb-8 leading-[0.95] tracking-tighter animate-fade-up ${isDarkMode ? 'text-white' : 'text-ink'}`} style={{ animationDelay: '0.1s' }}>
            Intelligence is <br />
            <span className={isDarkMode ? 'text-emerald-400' : 'text-sage-600'}>subsurface.</span>
          </h1>

          <p className={`text-lg md:text-2xl font-sans font-semibold tracking-tight max-w-2xl mx-auto mb-6 leading-tight animate-fade-up ${isDarkMode ? 'text-white' : 'text-ink'}`} style={{ animationDelay: '0.2s' }}>
            Stop collecting static notes. <br />
            Start growing a <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">living graph of understanding</span>.
          </p>

          <p className={`text-lg md:text-xl font-open-sans leading-relaxed max-w-xl mx-auto mb-10 animate-fade-up ${isDarkMode ? 'text-slate-200' : 'text-gray-700'}`} style={{ animationDelay: '0.25s' }}>
            <span className="opacity-90">Roots41 turns scattered learning into a cognitive structure that strengthens, adapts, and deepens over time.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up pointer-events-auto" style={{ animationDelay: '0.3s' }}>
            <button onClick={() => scrollToSection('contact')} className={`w-full sm:w-auto px-8 py-3.5 font-semibold rounded-full transition-all shadow-md ${isDarkMode ? 'bg-white text-ink hover:bg-gray-200' : 'bg-ink text-white hover:bg-gray-900'}`}>
              Request Early Access
            </button>
            <button onClick={() => scrollToSection('manifesto')} className={`w-full sm:w-auto px-8 py-3.5 border font-semibold rounded-full transition-all shadow-sm ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white hover:bg-slate-800' : 'bg-white border-gray-200 text-ink hover:bg-gray-50'}`}>
              Read our Mission
            </button>
          </div>
        </div>
      </header>

      {/* The Method Section */}
      {/* The Method Section - Refactored to Cognitive Bento */}
      <section id="method" className={`content-layer py-32 relative border-y ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">

            {/* Left Block: Living Flowchart (Span 8) */}
            <div className="md:col-span-8 relative min-h-[600px] flex items-center justify-center">
              {/* SVG Glow Lines Layer */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <svg className="w-full h-full visible overflow-visible">
                  <defs>
                    <linearGradient id="glowGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
                      <stop offset="50%" stopColor="#10B981" stopOpacity="1" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="glowGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6B8274" stopOpacity="0" />
                      <stop offset="50%" stopColor="#6B8274" stopOpacity="1" />
                      <stop offset="100%" stopColor="#6B8274" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Main Root: Input -> Challenge */}
                  <motion.path
                    d="M200,80 C200,200 350,250 500,250"
                    fill="none"
                    stroke={isDarkMode ? "url(#glowGradientDark)" : "url(#glowGradientLight)"}
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  {/* Branch off Main Root */}
                  <motion.path
                    d="M300,180 C320,200 310,240 330,260"
                    fill="none"
                    stroke={isDarkMode ? "#10B981" : "#6B8274"}
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />

                  {/* Secondary Root: Challenge -> Synthesis */}
                  <motion.path
                    d="M500,250 C650,250 650,550 800,550"
                    fill="none"
                    stroke={isDarkMode ? "url(#glowGradientDark)" : "url(#glowGradientLight)"}
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                  />
                  {/* Root Hair / Offshoots */}
                  <motion.path
                    d="M600,400 C620,420 640,410 660,450"
                    fill="none"
                    stroke={isDarkMode ? "#10B981" : "#6B8274"}
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2.5, delay: 1.2 }}
                  />
                  <defs>
                    <linearGradient id="glowGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
                      <stop offset="50%" stopColor="#10B981" stopOpacity="1" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="glowGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6B8274" stopOpacity="0" />
                      <stop offset="50%" stopColor="#6B8274" stopOpacity="1" />
                      <stop offset="100%" stopColor="#6B8274" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Staggered Cards */}
              <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">

                {/* Card 1: Input */}
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`md:col-start-1 md:mt-0 p-6 rounded-2xl border backdrop-blur-md transition-all duration-500 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 shadow-lg ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-slate-50/80 border-slate-200'}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-ink shadow-sm'}`}>1</div>
                    <span className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Raw Data</span>
                  </div>
                  <p className={`text-sm italic font-medium leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>"The market is shifting due to AI."</p>
                </motion.div>

                {/* Card 2: Roots Challenge */}
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
                  whileHover={{
                    scale: 1.05,
                    rotate: [-0.5, 0.5, -0.5],
                    transition: { rotate: { repeat: Infinity, duration: 0.3 } }
                  }}
                  className={`md:col-start-2 md:mt-32 p-6 rounded-2xl border backdrop-blur-md relative overflow-hidden group hover:drop-shadow-[0_0_15px_#FFD700] transition-all duration-300 ${isDarkMode ? 'bg-slate-900/80 border-yellow-500/30' : 'bg-white/90 border-amber-200'}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${isDarkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-amber-100 text-amber-600'}`}>
                        <Zap size={16} />
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-yellow-400' : 'text-amber-600'}`}>Challenge</span>
                    </div>
                    <p className={`text-sm font-semibold leading-relaxed ${isDarkMode ? 'text-white' : 'text-ink'}`}>Is this a shift or a market correction?</p>
                  </div>
                </motion.div>

                {/* Card 3: Synthesis */}
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  className={`md:col-start-3 md:mt-64 p-6 rounded-2xl border backdrop-blur-md relative overflow-hidden group ${isDarkMode ? 'bg-emerald-900/20 border-emerald-500/30' : 'bg-sage-50/90 border-sage-200'}`}
                >
                  {/* Holographic Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ mixBlendMode: 'overlay' }}></div>

                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      initial={{ rotateY: 0 }}
                      whileInView={{ rotateY: 180 }}
                      transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, ease: "linear" }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${isDarkMode ? 'bg-emerald-500/20 text-emerald-400' : 'bg-sage-100 text-sage-600'}`}
                    >
                      <Hexagon size={16} />
                    </motion.div>
                    <span className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-emerald-400' : 'text-sage-600'}`}>Synthesis</span>
                  </div>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>A refined thesis anchored to historical context.</p>
                </motion.div>

              </div>
            </div>

            {/* Right Block: Narrative (Span 4) */}
            <div className="md:col-span-4 flex flex-col justify-center h-full">
              <h2 className={`text-3xl md:text-5xl font-semibold mb-12 leading-tight tracking-tight ${isDarkMode ? 'text-white' : 'text-ink'}`}>
                Thinking, <br />
                <span className="italic font-serif text-slate-400">Evolved.</span>
              </h2>

              <div className="space-y-12">
                {/* The Old Way */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="group"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400">
                      <ArrowDown size={20} />
                    </div>
                    <h3 className={`text-sm font-bold uppercase tracking-widest text-slate-400`}>The Old Way</h3>
                  </div>
                  <p className={`text-2xl decoration-2 decoration-slate-300/50 line-through blur-[0.5px] group-hover:blur-0 transition-all duration-300 ${isDarkMode ? 'text-slate-600' : 'text-slate-400'}`}>
                    Capture. Store. Forget.
                  </p>
                </motion.div>

                {/* The Roots Way */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-emerald-900/30 text-emerald-400' : 'bg-sage-100 text-sage-600'}`}>
                      <motion.div
                        initial={{ scale: 0, rotate: 45, y: 10 }}
                        whileInView={{ scale: 1, rotate: 0, y: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                          delay: 0.6
                        }}
                      >
                        <Leaf size={20} />
                      </motion.div>
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-500 to-amber-500 bg-clip-text text-transparent">
                      The Roots Way
                    </h3>
                  </div>
                  <p className={`text-3xl md:text-4xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-ink'}`}>
                    Seed. Cultivate. <br />
                    <span className="bg-gradient-to-r from-emerald-500 to-amber-500 bg-clip-text text-transparent">Harvest.</span>
                  </p>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Subsurface Intelligence Feature Set */}
      <section id="features" className={`content-layer py-32 ${isDarkMode ? 'bg-slate-900/50' : 'bg-sage-50/30'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className={`text-3xl md:text-4xl font-semibold mb-4 tracking-tight ${isDarkMode ? 'text-white' : 'text-ink'}`}>Three Engines. One System.</h2>
            <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>We built specific AI agents to handle the three distinct phases of intellectual work.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="modern-card glass-card border p-8 group">
              <div className={`w-12 h-12 border rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-100 text-gray-800'}`}>
                <Anchor size={20} />
              </div>
              <h3 className={`font-bold text-xl mb-2 ${isDarkMode ? 'text-white' : 'text-ink'}`}>The Anchor</h3>
              <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDarkMode ? 'text-emerald-500' : 'text-sage-600'}`}>Cognition Engine</p>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                Stops information drift. When you read or write, The Anchor automatically links key concepts to your existing knowledge graph, preventing memory decay.
              </p>
            </div>

            {/* Feature 2 */}
            <div className={`modern-card glass-card border p-8 group`}>
              <div className={`w-12 h-12 border rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${isDarkMode ? 'bg-emerald-900/20 border-emerald-900/30 text-emerald-400' : 'bg-sage-50 border-sage-100 text-sage-800'}`}>
                <Filter size={20} />
              </div>
              <h3 className={`font-bold text-xl mb-2 ${isDarkMode ? 'text-white' : 'text-ink'}`}>The Filter</h3>
              <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDarkMode ? 'text-emerald-500' : 'text-sage-600'}`}>Critical Thinking Engine</p>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                An active adversary. It doesn't just spellcheck; it logic-checks. The Filter highlights fallacies and asks Socratic questions to strengthen your arguments.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="modern-card glass-card border p-8 group">
              <div className={`w-12 h-12 border rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-clay-100/30 border-clay-100 text-clay-800'}`}>
                <Wind size={20} />
              </div>
              <h3 className={`font-bold text-xl mb-2 ${isDarkMode ? 'text-white' : 'text-ink'}`}>The Pollinator</h3>
              <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDarkMode ? 'text-emerald-500' : 'text-sage-600'}`}>Creativity Engine</p>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                Introduces serendipity. The Pollinator randomly surfaces old, dormant notes alongside your current work to spark unexpected "hybrid" ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className={`content-layer py-32 relative overflow-hidden ${isDarkMode ? 'bg-slate-950 text-white' : 'bg-ink text-white'}`}>
        {/* Decoration */}
        <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -mr-32 -mt-32 ${isDarkMode ? 'bg-emerald-500/10' : 'bg-sage-500/10'}`}></div>
        <div className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl -ml-32 -mb-32 ${isDarkMode ? 'bg-indigo-500/10' : 'bg-clay-500/10'}`}></div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <span className={`block text-center text-xs font-bold uppercase tracking-[0.2em] mb-8 ${isDarkMode ? 'text-emerald-500' : 'text-sage-400'}`}>Manifesto</span>

          <h2 className="text-3xl md:text-5xl font-serif text-center mb-12 leading-tight">
            "We are drowning in information,<br /> but starving for wisdom."
          </h2>

          <div className="space-y-6 text-lg md:text-xl font-open-sans text-gray-400 leading-relaxed font-light">
            <p>
              The modern web is designed for speed. Scroll fast, skim headlines, clip content, move on. This has trained us to be collectors, not thinkers.
            </p>
            <p>
              But genuine insight—the kind that solves problems and creates value—cannot be rushed. It requires <span className="text-white font-medium">depth</span>. It requires the friction of grappling with a difficult idea until it yields.
            </p>
            <p>
              We built Roots41 to restore that depth. To create a space where ideas aren't just stored, but rooted. Where thinking is an active process of cultivation, not just consumption.
            </p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 font-mono"> // The Roots41 Team</p>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className={`content-layer py-24 border-t ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'}`}>
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className={`text-3xl font-semibold mb-4 tracking-tight ${isDarkMode ? 'text-white' : 'text-ink'}`}>Claim your space.</h2>
          <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mb-10`}>We are onboarding users in small batches to ensure stability.</p>

          <form className="flex flex-col sm:flex-row gap-3 justify-center mb-16 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="email@address.com" className={`flex-1 px-5 py-3 rounded-full border focus:outline-none focus:ring-0 transition-colors ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white focus:border-emerald-500 placeholder-slate-500' : 'bg-gray-50 border-gray-200 text-ink focus:border-ink placeholder-gray-400'}`} />
            <button className={`px-8 py-3 font-semibold rounded-full transition-colors shadow-sm ${isDarkMode ? 'bg-white text-ink hover:bg-gray-200' : 'bg-ink text-white hover:bg-gray-800'}`}>
              Request Access
            </button>
          </form>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-500">
            <a href="#" className={`hover:text-ink transition-colors ${isDarkMode ? 'hover:text-white' : ''}`}>Twitter</a>
            <a href="#" className={`hover:text-ink transition-colors ${isDarkMode ? 'hover:text-white' : ''}`}>LinkedIn</a>
            <a href="mailto:hello@roots41.com" className={`hover:text-ink transition-colors ${isDarkMode ? 'hover:text-white' : ''}`}>Contact</a>
          </div>

          <p className="mt-12 text-xs text-gray-400 font-medium">© 2024 Roots41 Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
