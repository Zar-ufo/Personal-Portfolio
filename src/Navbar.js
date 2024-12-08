import React, { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event and track active section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true); // Change navbar when scrolled
      } else {
        setScrolled(false); // Reset when at the top
      }

      // Update active section based on scroll position
      const sections = ["projects", "about-me", "contact-me"];
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? 'bg-gray-900 text-white backdrop-blur-sm' : 'bg-transparent text-black backdrop-blur-sm'
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-2xl">My Portfolio</div>

        {/* Hamburger menu (visible on mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-2xl text-black focus:outline-none"
        >
          {isMenuOpen ? '×' : '☰'}
        </button>

        {/* Navigation links (Desktop Version - Centered) */}
        <ul
          className={`hidden lg:flex justify-center space-x-6 transition-all duration-500 ease-in-out ${
            scrolled ? 'text-white' : 'text-black'
          }`}
        >
          <li>
            <a
              href="#projects"
              className={`${
                activeSection === "projects" ? "text-blue-500" : ""
              } hover:text-blue-400 transition-all duration-300 ease-in-out`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about-me"
              className={`${
                activeSection === "about-me" ? "text-blue-500" : ""
              } hover:text-blue-400 transition-all duration-300 ease-in-out`}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${
                activeSection === "contact-me" ? "text-blue-500" : ""
              } hover:text-blue-400 transition-all duration-300 ease-in-out`}
            >
              Contact Me
            </a>
          </li>
        </ul>

       
      </div>

      {/* Mobile Version - Navigation Links & Resume Button (Vertical) */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:hidden absolute top-16 left-0 w-full bg-gray-800 text-white p-4 space-y-4 transition-transform duration-500 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="space-y-4 text-center">
          <li>
            <a
              href="#projects"
              className="block p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 ease-in-out"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about-me"
              className="block p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 ease-in-out"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 ease-in-out"
            >
              Contact Me
            </a>
          </li>
        </ul>

        
      </div>
    </nav>
  );
}

export default Navbar;
