
import React from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';

const App: React.FC = () => {
  return (
    <div className="antialiased text-slate-300">
      <Header />
      <main>
        <Timeline />
      </main>
      <footer className="text-center py-8 text-slate-500">
        <p>Built by a world-class senior frontend React engineer.</p>
        <p>&copy; 2024 - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
