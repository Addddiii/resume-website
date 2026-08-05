import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/skills';

function App() {
  return (
    <div>
      <Hero />
      <main>
        <Skills />
        <Projects />

        {/* Live demo embed */}
        <section className="embed-section">
          <h2 className="section-title">Try it live</h2>
          <p className="section-subtitle">A quick look at one of the projects, running right here.</p>
          <div className="embed-frame">
            <iframe
              src="https://Addddiii.github.io/moviebot"
              width="400"
              height="500"
              title="MovieBot live demo"
            />
          </div>
        </section>

        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

// A simple, styled footer component
const Footer = () => {
  const name = "Aditya Ajay";

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