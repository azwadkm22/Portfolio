// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Element } from 'react-scroll';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Achievements from './components/Achievements';
import ProfessionalExperience from './components/ProfessionalExperience';
import SideView from './components/Sideview';
function App() {
  return (
    <div>
      <Navbar />
      <SideView />
      <div className="lg:ml-60 md:ml-0">
      {/* Define each section with <Element> for smooth scrolling */}
      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="experience">
        <ProfessionalExperience />
      </Element>
      
      <Element name="education">
        <Education />
      </Element>

      <Element name="achievements">
        <Achievements />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="certifications">
        <Certifications />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
      </div>
    </div>
  );
}

export default App;
