import React from 'react';

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);


const Header: React.FC = () => {
  return (
    <header className="max-w-7xl mx-auto px-4 pt-16 md:pt-24 pb-12 md:pb-16 text-center">
      <img
        // NOTE: Replace this with your actual photo URL
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="A portrait of Jane Doe"
        className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-8 shadow-2xl shadow-sky-400/20 object-cover"
        aria-label="Jane Doe's profile picture"
      />
      <h1 className="text-5xl md:text-7xl font-black text-slate-50 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-500 pb-2">
        Jane Doe
      </h1>
      <p className="text-xl md:text-2xl text-slate-300 mt-4 max-w-3xl mx-auto">
        A passionate Frontend Engineer crafting beautiful and functional web experiences. Welcome to my professional journey.
      </p>
      <div className="mt-10 flex justify-center">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Reach me on LinkedIn"
          className="inline-flex items-center gap-3 text-lg font-semibold bg-sky-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-sky-600 transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1"
        >
          <LinkedinIcon className="w-6 h-6" />
          <span>Reach me on LinkedIn</span>
        </a>
      </div>
    </header>
  );
};

export default Header;