import React from 'react';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import ProjectSection from './ProjectSection';
import ContactMe from './ContactMe';

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* About Me Section */}
      <section id="about-me" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-8">
        <AboutMe />
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col justify-center items-center bg-white p-8">
        <ProjectSection />  {/* Ensure this is inside the projects section */}
      </section>
      
      {/* Contact Me Section */}
      <section id="projects" className="min-h-screen flex flex-col justify-center items-center bg-white p-8">
        <ContactMe />
      </section>
    </div>
  );
}

export default App;
