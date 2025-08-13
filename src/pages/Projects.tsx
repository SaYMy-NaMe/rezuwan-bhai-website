import React, { useState } from 'react';
import PageTitle from '../components/sections/PageTitle';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'research', name: 'Research' }
  ];

  const projects = [
    {
      id: 1,
      title: 'AgriBuddy AI',
      category: 'ai',
      image: '/assets/img/research/agriBuddy.jpg',
      description: 'AI-powered agricultural assistant for Bangladeshi farmers using RAG and Vision Models',
      technologies: ['Python', 'TensorFlow', 'OpenAI', 'React Native', 'MongoDB'],
      links: {
        live: 'https://github.com/agribuddy-ai',
        github: 'https://github.com/agribuddy-ai',
        demo: 'https://youtube.com/watch?v=agribuddy-demo'
      },
      year: '2024'
    },
    {
      id: 2,
      title: 'Bengali Speech Recognition',
      category: 'research',
      image: '/assets/img/research/w2v2_char_tok.png',
      description: 'Character gram modeling approach for Bengali Speech to Text with Regional Dialects',
      technologies: ['Python', 'PyTorch', 'Transformers', 'Speech Recognition'],
      links: {
        github: 'https://github.com/bengali-speech',
        demo: 'https://huggingface.co/bengali-asr'
      },
      year: '2023'
    },
    {
      id: 3,
      title: 'Federated Learning System',
      category: 'ai',
      image: '/assets/img/research/federated-gif.gif',
      description: 'Horizontal Federated Random Forest for Heart Disease Detection from Decentralized Data',
      technologies: ['Python', 'Scikit-learn', 'Federated Learning', 'Healthcare AI'],
      links: {
        paper: 'https://ieeexplore.ieee.org/document/9929490',
        github: 'https://github.com/federated-heart-disease'
      },
      year: '2022'
    },
    {
      id: 4,
      title: 'E-Commerce Platform',
      category: 'web',
      image: '/assets/img/research/app-1.jpg',
      description: 'Full-stack e-commerce solution with modern UI/UX and payment integration',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      links: {
        live: 'https://ecommerce-demo.com',
        github: 'https://github.com/ecommerce-platform'
      },
      year: '2023'
    },
    {
      id: 5,
      title: 'Health Tracker App',
      category: 'mobile',
      image: '/assets/img/research/app-2.jpg',
      description: 'Mobile health monitoring application with real-time data tracking',
      technologies: ['React Native', 'Firebase', 'HealthKit', 'Charts.js'],
      links: {
        live: 'https://health-tracker.app',
        github: 'https://github.com/health-tracker'
      },
      year: '2023'
    },
    {
      id: 6,
      title: 'IPA Transcription System',
      category: 'research',
      image: '/assets/img/research/ipa_header.png',
      description: 'International Phonetic Alphabet transcription framework for Bengali texts',
      technologies: ['Python', 'NLP', 'Phonetics', 'Deep Learning'],
      links: {
        paper: 'https://openreview.net/forum?id=W9gVRjWL8e',
        github: 'https://github.com/bengali-ipa'
      },
      year: '2024'
    },
    {
      id: 7,
      title: 'Monte Carlo Simulation',
      category: 'research',
      image: '/assets/img/research/monte_carlo_paper_fig.png',
      description: 'Reliability worth assessment of distribution system considering momentary interruptions',
      technologies: ['MATLAB', 'Monte Carlo', 'Power Systems', 'Reliability Analysis'],
      links: {
        paper: 'https://ieeexplore.ieee.org/document/10044904',
        github: 'https://github.com/monte-carlo-power'
      },
      year: '2022'
    },
    {
      id: 8,
      title: 'Smart Chatbot System',
      category: 'ai',
      image: '/assets/img/research/app-3.jpg',
      description: 'Intelligent conversational AI with natural language processing capabilities',
      technologies: ['Python', 'NLTK', 'TensorFlow', 'Dialogflow', 'API'],
      links: {
        live: 'https://chatbot-demo.com',
        github: 'https://github.com/smart-chatbot'
      },
      year: '2023'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <PageTitle 
        title="Projects"
        description="AI projects aren't built on code alone, but on curiosity, patience, and a thousand tiny experiments."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Projects' }
        ]}
      />
      
      <section className="projects section">
        <div className="container">
          {/* Filter Buttons */}
          <div className="project-filters" data-aos="fade-up">
            <ul className="filter-list">
              {filters.map(filter => (
                <li 
                  key={filter.id}
                  className={`filter-item ${activeFilter === filter.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid" data-aos="fade-up" data-aos-delay="100">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="project-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-year">{project.year}</div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  
                  <div className="project-links">
                    {project.links?.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link">
                        Live Demo
                      </a>
                    )}
                    {project.links?.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Code
                      </a>
                    )}
                    {project.links?.paper && (
                      <a href={project.links.paper} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Paper
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects; 