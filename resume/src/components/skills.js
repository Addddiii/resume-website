import React from 'react';

const skillsData = [
  // Programming Languages
  {
    title: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "language"
  },
  {
    title: "Java", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    category: "language"
  },
  {
    title: "C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", 
    category: "language"
  },
  {
    title: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "language"
  },
  {
    title: "HTML/CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "language"
  },
  {
    title: "SQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "language"
  },
  {
    title: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    category: "language"
  },
  
  // Tools & Frameworks
  {
    title: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "tool"
  },
  {
    title: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    category: "tool"
  },
  {
    title: "IntelliJ IDEA",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
    category: "tool"
  },
  
  // Databases
  {
    title: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "database"
  },
  {
    title: "PostgreSQL", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "database"
  },
  {
    title: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "database"
  },
  
  // Cloud Platforms
  {
    title: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    category: "cloud"
  },
  {
    title: "Amazon Bedrock",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    category: "cloud"
  },
  
  // AI/ML Tools  
  {
    title: "TensorFlow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    category: "ai"
  },
  {
    title: "Pandas",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    category: "ai"
  },
  {
    title: "NumPy",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    category: "ai"
  },
  
  // Operating Systems
  {
    title: "Windows",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    category: "os"
  },
  {
    title: "Linux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    category: "os"
  },
  {
    title: "Ubuntu", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
    category: "os"
  }
];

const Skills = () => {
  if (skillsData.length === 0) {
    return null;
  }

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">These are some of the skills I have amassed over the years.</p>
        
        <div className="skills-container">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-badge">
              <div className="skill-logo">
                <img 
                  src={skill.logo} 
                  alt={`${skill.title} logo`}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="fallback-icon" style={{display: 'none'}}>
                  {skill.title.charAt(0)}
                </div>
              </div>
              <span className="skill-name">{skill.title}</span>
            </div>
          ))}
        </div>
        
        {/* Methodologies as text badges */}
        <div className="methodologies-section">
          <h3 className="methodologies-title">Methodologies & Practices</h3>
          <div className="methodologies-container">
            <span className="methodology-badge">Agile Development</span>
            <span className="methodology-badge">Version Control</span>
            <span className="methodology-badge">Object-Oriented Programming</span>
            <span className="methodology-badge">Claude API Integration</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;