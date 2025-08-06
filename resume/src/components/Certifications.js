import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

// --- EDIT YOUR CERTIFICATES HERE ---
const certificationsData = [
  {
    title: "React.js Essential Training",
    issuer: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/your-unique-id"
  },
  {
    title: "Node.js Essential Training",
    issuer: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/your-unique-id"
  },
  {
    title: "Discrete Math",
    issuer: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/86c9bb183a830855ffb0078c003407cf9e30f0bc4569524e842a1ba6621d92d8?trk=share_certificate"
  },
  // You can add more here, up to 4 looks best
];
// -----------------------------------

const Certifications = () => {
  if (certificationsData.length === 0) {
    return null; // Don't render the section if there are no certificates
  }

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">Learning & Certifications</h2>
        <p className="section-subtitle">I believe in continuous learning. Here are some of my recent credentials.</p>
        <div className="cards-grid cert-grid">
          {certificationsData.map((cert, index) => (
            <div key={index} className="card cert-card">
              <div className="cert-icon"><Award size={24} /></div>
              <div>
                <h3 className="card-title" style={{fontSize: '1.25rem'}}>{cert.title}</h3>
                <p style={{color: '#718096', margin: '0 0 1rem 0'}}>{cert.issuer}</p>
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="card-link">
                  <CheckCircle size={16} /> View Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;