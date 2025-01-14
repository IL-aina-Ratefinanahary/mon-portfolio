import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsInformatique from './pages/ProjectsInformatique';
import ProjectsElectronique from './pages/ProjectsElectronique';
import About from './pages/About';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Experience from './pages/Experience';
import Contact from './pages/Contact';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <ProjectsInformatique />
      <ProjectsElectronique />
      <About />
      <Skills />
      <Certifications />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;

