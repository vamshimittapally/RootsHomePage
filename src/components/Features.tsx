import React from 'react';
import { Anchor, Filter, Wind } from 'lucide-react';

export interface FeaturesProps {
  isDarkMode: boolean;
}

const Features: React.FC<FeaturesProps> = ({ isDarkMode }) => {
  return (
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
  );
};

export default Features;
