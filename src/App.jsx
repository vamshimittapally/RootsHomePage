import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import { ArrowDown, Zap, Anchor, Filter, Wind, Moon, Sun } from 'lucide-react';

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
    const baseColor = isDarkMode ? [255/255, 215/255, 0/255] : [148/255, 163/255, 184/255]; // Gold (#FFD700) vs Slate-400 (#94A3B8)
    const markerColor = isDarkMode ? [255/255, 215/255, 0/255] : [148/255, 163/255, 184/255]; 
    const glowColor = isDarkMode ? [255/255, 215/255, 0/255] : [148/255, 163/255, 184/255]; 

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
              <path d="M50 45 C 50 45, 50 70, 50 75 C 50 85, 40 90, 30 95" stroke={isDarkMode ? "#fff" : "#111"} strokeWidth="5" strokeLinecap="round"/>
              <path d="M50 75 C 50 85, 60 90, 70 95" stroke={isDarkMode ? "#fff" : "#111"} strokeWidth="5" strokeLinecap="round"/>
              <path d="M50 75 C 50 85, 50 92, 50 98" stroke={isDarkMode ? "#fff" : "#111"} strokeWidth="5" strokeLinecap="round"/>
              <path d="M50 45 C 50 45, 30 55, 25 50" stroke={isDarkMode ? "#fff" : "#111"} strokeWidth="5" strokeLinecap="round"/>
              <path d="M50 45 C 50 45, 70 55, 75 50" stroke={isDarkMode ? "#fff" : "#111"} strokeWidth="5" strokeLinecap="round"/>
              <circle cx="50" cy="20" r="6" fill={isDarkMode ? "#FFD700" : "#6B8274"}/>
              <circle cx="35" cy="25" r="5" fill={isDarkMode ? "#FFD700" : "#8DA399"}/>
              <circle cx="65" cy="25" r="5" fill={isDarkMode ? "#FFD700" : "#8DA399"}/>
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
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-bold tracking-wide uppercase mb-8 animate-fade-up shadow-sm pointer-events-auto ${isDarkMode ? 'bg-slate-800 border-slate-700 text-yellow-400' : 'bg-sage-50 border-sage-200 text-sage-900'}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isDarkMode ? 'bg-yellow-400' : 'bg-sage-600'}`}></span>
            v1.0 Public Beta
          </div>
          
          <h1 className={`text-6xl md:text-8xl font-semibold mb-8 leading-[0.95] tracking-tighter animate-fade-up ${isDarkMode ? 'text-white' : 'text-ink'}`} style={{ animationDelay: '0.1s' }}>
            Intelligence is <br/>
            <span className={isDarkMode ? 'text-emerald-400' : 'text-sage-600'}>Subsurface.</span>
          </h1>
          
          <p className={`text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up font-normal ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`} style={{ animationDelay: '0.2s' }}>
            Stop collecting static notes. Start growing a living graph.
            <strong className={`font-semibold ${isDarkMode ? 'text-white' : 'text-ink'}`}> Roots41</strong> provides the cognitive architecture where your scattered thoughts connect, stabilize, and evolve into genuine insight.
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
      <section id="method" className={`content-layer py-32 relative border-y ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Visual Metaphor */}
            <div className="relative sticky top-32">
              <div className={`absolute inset-0 rounded-2xl transform rotate-2 ${isDarkMode ? 'bg-emerald-500/5' : 'bg-sage-100'}`}></div>
              <div className={`relative glass-card border rounded-2xl p-8 shadow-card ${isDarkMode ? 'bg-white/10 dark:border-white/10' : 'bg-slate-50/50 border-slate-200/50'}`}>
                <div className="space-y-6">
                  {/* Visual representation of "Active Thinking" */}
                  <div className={`flex items-start gap-4 p-4 rounded-xl border ${isDarkMode ? 'bg-slate-800/50 border-slate-700/50' : 'bg-gray-50/80 border-gray-100'}`}>
                    <div className={`w-8 h-8 mt-1 rounded-md border flex items-center justify-center text-sm shadow-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-200'}`}>1</div>
                    <div>
                      <h4 className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-ink'}`}>Input</h4>
                      <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>"The market is shifting due to AI."</p>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="flex justify-center -my-2">
                    <ArrowDown className={`text-sm ${isDarkMode ? 'text-slate-600' : 'text-gray-300'}`} size={16} />
                  </div>

                  <div className={`flex items-start gap-4 p-4 rounded-xl border ring-1 ${isDarkMode ? 'bg-emerald-900/10 border-emerald-900/20 ring-emerald-900/30' : 'bg-sage-50 border-sage-100 ring-sage-200'}`}>
                    <div className={`w-8 h-8 mt-1 rounded-md border flex items-center justify-center text-sm shadow-sm ${isDarkMode ? 'bg-slate-900 border-emerald-900/30 text-emerald-400' : 'bg-white border-sage-200 text-sage-700'}`}>
                       <Zap size={14} />
                    </div>
                    <div>
                      <h4 className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-ink'}`}>Roots Challenge</h4>
                      <p className={`text-xs mt-1 ${isDarkMode ? 'text-emerald-400' : 'text-sage-700'}`}>"Is this a shift or a correction? Compare with 2000 Dotcom bust."</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center -my-2">
                    <ArrowDown className={`text-sm ${isDarkMode ? 'text-slate-600' : 'text-gray-300'}`} size={16} />
                  </div>

                  <div className={`flex items-start gap-4 p-4 rounded-xl border ${isDarkMode ? 'bg-slate-800/50 border-slate-700/50' : 'bg-gray-50/80 border-gray-100'}`}>
                    <div className={`w-8 h-8 mt-1 rounded-md border flex items-center justify-center text-sm shadow-sm ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-200'}`}>3</div>
                    <div>
                      <h4 className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-ink'}`}>Synthesis</h4>
                      <p className={`text-xs mt-1 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>A refined thesis anchored to historical context.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content: Narrative Focus */}
            <div>
              <h2 className={`text-4xl md:text-5xl font-semibold mb-6 leading-tight tracking-tight ${isDarkMode ? 'text-white' : 'text-ink'}`}>The End of <br/>Digital Hoarding.</h2>
              
              <p className={`text-lg mb-8 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                We have enough tools for capturing thoughts. We lack tools for <em>developing</em> them.
              </p>
              
              <p className={`text-lg mb-12 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                Most apps are essentially digital shoeboxes—you throw ideas in, and they gather dust. Roots41 is different. It is an active environment. It fights entropy by constantly surfacing, challenging, and connecting your notes so they compound in value over time.
              </p>

              <div className={`space-y-6 border-t pt-8 ${isDarkMode ? 'border-slate-800' : 'border-gray-100'}`}>
                <div className="flex flex-col gap-1">
                  <span className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-emerald-500' : 'text-sage-600'}`}>The Old Way</span>
                  <p className={`font-medium line-through ${isDarkMode ? 'text-slate-600' : 'text-gray-400'}`}>Capture {'->'} Store {'->'} Forget</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-white' : 'text-ink'}`}>The Roots Way</span>
                  <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-ink'}`}>Seed {'->'} Cultivate {'->'} Harvest</p>
                </div>
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
            "We are drowning in information,<br/> but starving for wisdom."
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-gray-400 leading-relaxed font-light">
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
