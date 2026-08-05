import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  // --- EDIT YOUR INFO HERE ---
  const personalInfo = {
    name: "Aditya Ajay",
    tagline: "Driven by curiosity, defined by execution.",
    profileImage: "process.env.PUBLIC_URL + '/profile.png'",
    githubUser: "Addddiii", 
    linkedinUser: "www.linkedin.com/in/aditya-ajay-33228031b", 
    email: "Aditiyaajay0106@gmail.com",
    resumeUrl: "/ADITYA AJAY(pro).pdf" 
  };
  // --------------------------

  return (
    <div className="hero">
      <div className="container">
        <div className="profile-image-container">
          <img 
            src={personalInfo.profileImage} 
            alt={`${personalInfo.name} `}
            className="profile-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="profile-fallback" style={{display: 'none'}}>
            {personalInfo.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
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