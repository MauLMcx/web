
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-[#D8ECF8] selection:text-[#000000] bg-[#000000] text-white">
      {/* Background Cinematic Depth Elements - Minimalist to ensure "pure black" dominance */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Extremely low opacity glowing accents */}
        <div className="absolute top-[-15%] left-[-10%] w-[900px] h-[900px] bg-[#D8ECF8]/[0.005] rounded-full blur-[200px] animate-pulse"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[900px] h-[900px] bg-[#D8ECF8]/[0.005] rounded-full blur-[220px]"></div>
        
        {/* Subtle White Light Spots (Digital Bokeh) */}
        <div className="absolute top-[20%] right-[10%] w-0.5 h-0.5 bg-white/5 rounded-full shadow-[0_0_8px_1px_rgba(255,255,255,0.01)]"></div>
        <div className="absolute top-[50%] left-[20%] w-0.5 h-0.5 bg-white/5 rounded-full shadow-[0_0_12px_3px_rgba(255,255,255,0.01)]"></div>
        <div className="absolute bottom-[25%] right-[30%] w-0.5 h-0.5 bg-white/5 rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.01)]"></div>
      </div>

      <Header isScrolled={isScrolled} />
      
      <main className="relative z-10 bg-[#000000]">
        <section id="home" className="bg-[#000000]">
          <Hero />
        </section>
        
        <section id="about" className="py-32 bg-[#000000]">
          <About />
        </section>
        
        <section id="projects" className="py-32 bg-[#000000]">
          <Projects />
        </section>

        <section id="testimonials" className="py-32 bg-[#000000]">
          <Testimonials />
        </section>

        <section id="gallery" className="py-32 overflow-hidden bg-[#000000]">
          <Gallery />
        </section>

        <section id="contact" className="py-32 bg-[#000000]">
          <Contact />
        </section>
      </main>

      <Footer />
      
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          background-color: #000000;
          color: white;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default App;
