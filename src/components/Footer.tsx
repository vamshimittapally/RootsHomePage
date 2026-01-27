import React from 'react';

export interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
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
  );
};

export default Footer;
