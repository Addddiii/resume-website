import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Star, GitFork, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  
  const githubUsername = "Addddiii";
 

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${githubUsername}/repos?sort=updated&direction=desc`);
        setRepos(response.data);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, [githubUsername]);

  return (
    <section id="projects" className="section bg-light">
      <div className="container">
        <h2 className="section-title">My GitHub Projects</h2>
        <p className="section-subtitle">Here is a selection of my latest work. See my GitHub for more!</p>
        
        {loading ? (
          <p>Loading projects...</p>
        ) : (
          <div className="cards-grid">
            {repos.slice(0, 6).map((repo) => ( // We only show the 6 most recent repos
              <div key={repo.id} className="card">
                <h3 className="card-title">{repo.name}</h3>
                <p className="card-description">{repo.description || 'No description provided for this repository.'}</p>
                <div className="card-footer">
                  <div className="card-stats">
                    <span className="card-stat"><Star size={16} color="#FF9F00" /> {repo.stargazers_count}</span>
                    <span className="card-stat"><GitFork size={16} /> {repo.forks_count}</span>
                  </div>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="card-link">
                    View Code <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;