import React, { useState } from 'react';

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const experienceData = [
    {
      id: 1,
      title: "Artificial Intelligence (AI) Engineer",
      company: "RoboFication LLC",
      location: "Canton, Michigan, United States",
      period: "March, 2025 - Present",
      description: "Specializing in automating systems engineering and certification processes for safety-critical industries using AI and Formal Methods. Developing AI-powered tools for safety analyses, requirements generation, and regulatory compliance.",
      responsibilities: [
        "Develop AI-driven automation tools for safety-critical industries",
        "Incorporate advanced AI techniques to enhance existing systems",
        "Develop natural language processing capabilities for system comprehension",
        "Integrate AI functionalities into current applications",
        "Design and automate workflows to minimize repetitive tasks",
        "Collaborate with the team on various projects"
      ],
      supervisors: [
        { name: "Dr. Farig Yousuf Sadeque", link: "https://scholar.google.com/citations?user=ULNaeowAAAAJ&hl=en" },
        { name: "Dr. Golam Rabiul Alam", link: "https://scholar.google.com/citations?user=t4GrJR4AAAAJ&hl=en" },
        { name: "Dr. S M Taiabul Haque", link: "https://scholar.google.com/citations?user=tMCRaaEAAAAJ&hl=en" },
        { name: "Dr. Swakkhar Shatabda", link: "https://scholar.google.com/citations?user=2DhrWFgAAAAJ&hl=en" }
      ],
      projects: [
        "Bengali Speech Recognition, Diarization, and Synthesis",
        "Transliteration and standardization of Bengali Dialects",
        "Various Bengali Text-to-Speech projects",
        "Speech to IPA Conversion",
        "Speech Biometric System (Voice signature authentication)",
        "AI-Driven Agentic Agriculture Support System",
        "Bengali humor and cultural roots with agentic AI"
      ]
    },
    {
      id: 2,
      title: "Research Engineer",
      company: "BRAC University",
      location: "Dhaka, Bangladesh",
      period: "February, 2024 - February, 2025",
      description: "Led research initiatives in speech processing and AI applications, focusing on Bengali language technologies and deep learning models.",
      responsibilities: [
        "Develop research protocols, pipeline, and methodology",
        "Process and analyze multiple types of raw data",
        "Automate research projects and fine-tune deep learning models",
        "Co-supervise and evaluate undergraduate thesis students",
        "Perform exam invigilation and lab classes when required"
      ],
      supervisors: [
        { name: "Dr. Farig Yousuf Sadeque", link: "https://scholar.google.com/citations?user=ULNaeowAAAAJ&hl=en" },
        { name: "Dr. Golam Rabiul Alam", link: "https://scholar.google.com/citations?user=t4GrJR4AAAAJ&hl=en" },
        { name: "Dr. S M Taiabul Haque", link: "https://scholar.google.com/citations?user=tMCRaaEAAAAJ&hl=en" },
        { name: "Dr. Swakkhar Shatabda", link: "https://scholar.google.com/citations?user=2DhrWFgAAAAJ&hl=en" }
      ],
      projects: [
        "Bengali Speech Recognition, Diarization, and Synthesis",
        "Transliteration and standardization of Bengali Dialects",
        "Various Bengali Text-to-Speech projects",
        "Speech to IPA Conversion",
        "Speech Biometric System (Voice signature authentication)",
        "AI-Driven Agentic Agriculture Support System",
        "Bengali humor and cultural roots with agentic AI"
      ]
    }
  ];

  const educationData = [
    {
      id: 1,
      degree: "Master of Science - M.Sc",
      field: "Computer Science Engineering",
      institution: "BRAC University, Dhaka, Bangladesh",
      period: "2021 - 2023",
      thesis: {
        title: "A character gram modeling approach towards Bengali Speech to Text with Regional Dialects",
        link: "https://dspace.bracu.ac.bd/xmlui/handle/10361/25982"
      },
      supervisor: {
        name: "Dr. Golam Rabiul Alam",
        link: "https://scholar.google.com/citations?user=t4GrJR4AAAAJ&hl=en"
      },
      publication: "Approaching for a Journal with the MS thesis",
      concentration: "Natural Language Processing & Speech Recognition",
      courses: [
        "CSE710: Advanced Artificial Intelligence",
        "CSE711: Symbolic Machine Learning",
        "CSE712: Natural Language Processing",
        "CSE713: Synthetic Pattern & Speech Recognition",
        "CSE715: Neural Networks & Fuzzy Systems",
        "CSE799: Data Science"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Science - B.Sc",
      field: "Electrical and Electronics Engineering",
      institution: "BRAC University, Dhaka, Bangladesh",
      period: "2016 - 2020",
      thesis: {
        title: "Efficient approach for reliability evaluation of the BUS4 distribution system considering momentary interruption",
        link: "https://dspace.bracu.ac.bd/xmlui/handle/10361/14487"
      },
      supervisor: {
        name: "Dr. A.S. Nazmul Huda",
        link: "https://scholar.google.com/citations?user=-QIR2lUAAAAJ&hl=en"
      },
      publication: {
        title: "Monte Carlo Simulation for Reliability Worth Assessment of Distribution System Considering Momentary Interruptions",
        link: "https://dspace.bracu.ac.bd/xmlui/handle/10361/14487"
      },
      concentration: "Networking, Signal Processing & Wireless Technologies",
      courses: [
        "EEE201 | EEE202: Electrical Circuits I | Electrical Circuits I Laboratory",
        "EEE203 | EEE204: Electrical Circuits II | Electrical Circuits II Laboratory",
        "EEE205 | EEE206: Electrical Devices I | Electrical Devices I Laboratory",
        "EEE207 | EEE208: Electrical Devices II | Electrical Devices II Laboratory",
        "EEE209: Semiconductor Devices and Materials",
        "EEE221: Energy Conversion I",
        "EEE223 | EEE224: Energy Conversion II | Energy Conversion II Laboratory",
        "EEE241: Electromagnetic Fields and Waves",
        "EEE243: Signal and Systems",
        "EEE301 | EEE302: Digital Electronics | Digital Electronics Laboratory",
        "EEE305 | EEE306: Control Systems | Control Systems Laboratory",
        "EEE341 | EEE342: Introduction to Communication Engineering | Laboratory",
        "EEE343 | EEE344: Digital Signal Processing | Digital Signal Processing Laboratory",
        "EEE361 | EEE362: Data Communication | Data Communication Laboratory",
        "EEE365 | EEE366: Microprocessor and Interfacing | Microprocessor and Interfacing Laboratory",
        "EEE411 | EEE412: VLSI Design | VLSI Design Laboratory",
        "EEE445 | EEE446: Digital Communications | Digital Communications Laboratory",
        "EEE455 | EEE456: Fundamentals of Wireless LAN | Fundamentals of Wireless LAN Laboratory"
      ]
    }
  ];

  return (
    <section id="resume" className="resume section">
      <div className="container">
        {/* Tab Navigation */}
        <div className="resume-tabs" data-aos="fade-up">
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <i className="bi bi-briefcase"></i>
              Experience
            </button>
            <button
              className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <i className="bi bi-mortarboard"></i>
              Education
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="resume-content" data-aos="fade-up" data-aos-delay="100">
          {activeTab === 'experience' && (
            <div className="experience-section">
              {experienceData.map((exp, index) => (
                <div key={exp.id} className="resume-card" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card-header">
                    <div className="card-info">
                      <h3 className="card-title">{exp.title}</h3>
                      <h4 className="card-company">{exp.company}</h4>
                      <div className="card-meta">
                        <span className="location">{exp.location}</span>
                        <span className="period">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-body">
                    <p className="card-description">{exp.description}</p>
                    
                    {exp.supervisors && (
                      <div className="supervisors">
                        <strong>Supervisors:</strong>
                        <div className="supervisor-links">
                          {exp.supervisors.map((supervisor, idx) => (
                            <a key={idx} href={supervisor.link} target="_blank" rel="noopener noreferrer">
                              {supervisor.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="responsibilities">
                      <strong>Key Responsibilities:</strong>
                      <ul>
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>

                    {exp.projects && (
                      <div className="projects">
                        <strong>Projects:</strong>
                        <ul>
                          {exp.projects.map((project, idx) => (
                            <li key={idx}>{project}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="education-section">
              {educationData.map((edu, index) => (
                <div key={edu.id} className="resume-card" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card-header">
                    <div className="card-info">
                      <h3 className="card-title">{edu.degree}</h3>
                      <h4 className="card-company">{edu.field}</h4>
                      <div className="card-meta">
                        <span className="institution">{edu.institution}</span>
                        <span className="period">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-body">
                    <div className="thesis-info">
                      <strong>Thesis:</strong>
                      <a href={edu.thesis.link} target="_blank" rel="noopener noreferrer">
                        {edu.thesis.title}
                      </a>
                    </div>

                    <div className="supervisor-info">
                      <strong>Supervisor:</strong>
                      <a href={edu.supervisor.link} target="_blank" rel="noopener noreferrer">
                        {edu.supervisor.name}
                      </a>
                    </div>

                    <div className="publication-info">
                      <strong>Publication:</strong>
                      {typeof edu.publication === 'string' ? (
                        <span>{edu.publication}</span>
                      ) : (
                        <a href={edu.publication.link} target="_blank" rel="noopener noreferrer">
                          {edu.publication.title}
                        </a>
                      )}
                    </div>

                    <div className="concentration-info">
                      <strong>Concentration:</strong>
                      <span>{edu.concentration}</span>
                    </div>

                    <div className="courses-section">
                      <strong>Courses:</strong>
                      <div className="courses-list">
                        {edu.courses.map((course, idx) => (
                          <span key={idx} className="course-item">{course}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume; 