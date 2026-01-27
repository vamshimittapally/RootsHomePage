import { Sun, Moon } from 'lucide-react';
import Roots41Logo from './Logo';

export interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode, scrollToSection }) => {
  return (
    <nav className={`fixed w-full top-0 left-0 backdrop-blur-md border-b z-50 transition-colors duration-300 ${isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group">
          <Roots41Logo className="w-7 h-7 group-hover:rotate-6 transition-transform duration-300" />
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
  );
};

export default Navbar;
