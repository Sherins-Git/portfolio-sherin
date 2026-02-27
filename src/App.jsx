import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

import { Routes, Route } from 'react-router-dom';
import Resume from './components/Resume';
import SoftEdgeCaseStudy from './pages/SoftEdgeCaseStudy';
import ProHockeyCaseStudy from './pages/ProHockeyCaseStudy';
import SystemsWithSoulCaseStudy from './pages/SystemsWithSoulCaseStudy';

function App() {
  return (
    <div className="bg-background min-h-screen font-sans text-gray-900 selection:bg-primary/20 selection:text-primary">
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="/resume" element={<Resume />} />
        <Route path="/case-study/softedge" element={<SoftEdgeCaseStudy />} />
        <Route path="/case-study/prohockey" element={<ProHockeyCaseStudy />} />
        <Route path="/case-study/systems-with-soul" element={<SystemsWithSoulCaseStudy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
