export interface ManifestoProps {
  isDarkMode: boolean;
}

const Manifesto: React.FC<ManifestoProps> = ({ isDarkMode }) => {
  return (
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
  );
};

export default Manifesto;
