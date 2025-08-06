import React from 'react';
import './App.css'; // Your main stylesheet
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certifications from './components/Certifications';

function App() {
  return (
    <div>
      <Hero />
      <main>
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

// A simple, styled footer component
const Footer = () => {
  // --- EDIT YOUR NAME HERE ---
  const name = "Your Name";
  // --------------------------

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-name">{name}<span>.</span></p>
        <p>Building intuitive and powerful digital solutions.</p>
        <p className="copyright">
          &copy; {new Date().getFullYear()} {name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default App;