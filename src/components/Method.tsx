import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Zap, Hexagon, Leaf } from 'lucide-react';

export interface MethodProps {
  isDarkMode: boolean;
}

const Method: React.FC<MethodProps> = ({ isDarkMode }) => {
  return (
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
                style={{ willChange: 'transform, opacity' }}
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
                style={{ willChange: 'transform, opacity' }}
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
                style={{ willChange: 'transform, opacity' }}
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
  );
};

export default Method;
