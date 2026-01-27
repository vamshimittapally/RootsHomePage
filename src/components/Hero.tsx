import Globe from './Globe';

export interface HeroProps {
  isDarkMode: boolean;
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode, scrollToSection }) => {
  return (
    <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div id="globe-container" className={isDarkMode ? "before:content-[''] before:absolute before:inset-0 before:bg-[#FFD700]/5 before:rounded-full before:blur-[100px]" : ""}>
        <Globe isDarkMode={isDarkMode} />
      </div>

      <div className="content-layer gpu-accelerate max-w-3xl mx-auto px-6 text-center relative pointer-events-none">
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
  );
};

export default Hero;
