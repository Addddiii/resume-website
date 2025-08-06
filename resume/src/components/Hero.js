import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  // --- EDIT YOUR INFO HERE ---
  const personalInfo = {
    name: "Aditya Ajay",
    tagline: "A passionate developer!",
    githubUser: "Addddiii", // Your GitHub username
    linkedinUser: "www.linkedin.com/in/aditya-ajay-33228031b", // The part of your LinkedIn URL after "linkedin.com/in/"
    email: "Aditiyaajay0106@gmail.com",
    resumeUrl: "/ADITYA AJAY(pro).pdf" // Place your resume PDF in the 'public' folder
  };
  // --------------------------

  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero-title">{personalInfo.name}</h1>
        <p className="hero-tagline">{personalInfo.tagline}</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={20} />
          </a>
          <a href={personalInfo.resumeUrl} download className="btn btn-secondary">
            <Download size={20} /> Download CV
          </a>
        </div>
        <div className="hero-socials">
          <a href={`https://github.com/${personalInfo.githubUser}`} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <Github color="#2d3748" />
          </a>
          <a href={`https://${personalInfo.linkedinUser}`} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <Linkedin color="#2d3748" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="social-link" aria-label="Email">
            <Mail color="#2d3748" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;