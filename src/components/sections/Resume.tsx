import React, { useState } from 'react';
import OptimizedImage from '../common/OptimizedImage';

interface MediaItem {
  src: string;
  alt: string;
}

interface SimpleResumeItem {
  id: number;
  title: string;
  shortDescription?: string;
  description?: string | string[];
  images?: MediaItem[];
}

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'achievement' | 'volunteering' | 'awards'>('experience');

  const experienceData = [
    {
      id: 1,
      title: "Artificial Intelligence (AI) Engineer",
      company: "RoboFication LLC",
      companyUrl: "http://robofication.net/",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQG0Bzg2J3J4FQ/company-logo_200_200/company-logo_200_200/0/1722983644704?e=1758153600&v=beta&t=fN4fq6PZU8uB5-JXyihyRNroksDJueG7rm33v8V01BI",
      logoAlt: "RoboFication LLC logo",
      employmentType: "Full-Time",
      locationType: "Remote",
      location: "Canton, Michigan, United States",
      period: "March, 2025 - Present",
      description: "RoboFication LLC is an US-based (Canton, Michigan) company that specializes in automating systems engineering and certification processes for safety-critical industries like automotive, aerospace, defense, and robotics using AI and Formal Methods. Their AI-powered tools enhance efficiency by automating safety analyses, generating precise requirements, and ensuring regulatory compliance. From AI-driven SysML generation to real-time collaboration, RoboFication LLC enhances efficiency and safety.",
      responsibilities: [
        "Develop AI-driven automation tools for safety-critical industries",
        "Incorporate advanced AI techniques to enhance existing systems",
        "Develop natural language processing capabilities for system comprehension",
        "Integrate AI functionalities into current applications",
        "Design and automate workflows to minimize repetitive tasks",
        "Collaborate with the team on various projects"
      ]
    },

    {
      id: 2,
      title: "Research Engineer",
      company: "BRAC University",
      companyUrl: "https://www.bracu.ac.bd/",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQGLfIJZJcC3rQ/company-logo_200_200/company-logo_200_200/0/1631312895616?e=1758153600&v=beta&t=mLXMbe5WZtzauJr_5uRpQzlRgo3zD1O8zkujk-lsEkw",
      logoAlt: "BRAC University logo",
      employmentType: "Full-Time",
      locationType: "Hybrid",
      location: "Dhaka, Bangladesh",
      period: "February, 2024 - February, 2025",
      description: "BRAC University is a leading private university in Bangladesh, known for its innovative research and academic programs. The university focuses on interdisciplinary studies and aims to produce graduates who are not only knowledgeable but also socially responsible. The research initiatives at BRAC University emphasize real-world applications and community engagement.",
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
    },

    {
      id: 3,
      title: "Freelance Data Scientist",
      company: "Freelance",
      companyUrl: "",
      logo: "https://cdn.worldvectorlogo.com/logos/freelancer-1.svg",
      logoAlt: "Freelancer logo",
      employmentType: "Freelance",
      locationType: "Remote",
      location: "Dhaka, Bangladesh",
      period: "July, 2022 - Present",
      description: `I sometimes do freelance Machine Learning, Deep Learning, Data Science, or any AI domain-related projects to challenge and hone my technical skills.

So far, I have pulled off a substantial amount of gigs/tasks given to me by clients from not only from Bangladesh, but also from foreign countries (US, UK & Germany to be more specific).`
    },

       {
      id: 4,
      title: "Instructor",
      company: "Lead Academy",
      companyUrl: "https://www.lead.academy/",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQEVTJ4dcwdP_g/company-logo_200_200/company-logo_200_200/0/1660997818720?e=1758153600&v=beta&t=c3p67_LZJbsvvMCl9ptSSonT_ZNGiVO47ImnKrFQPVA",
      logoAlt: "Lead Academy logo",
      employmentType: "Full-Time",
      locationType: "Hybrid",
      location: "Dhaka, Bangladesh",
      period: "October, 2023 - December, 2023",
      description: `Lead Academy approached me to design and take a NLP course by developing relevant pre-recorded contents for the course and I accepted the offer.

I worked as an instructor there on a contractual basis. So far, I have only developed one course titled "<a href="https://lead.academy/course/natural-language-processing-nlp-for-beginners-online-course" target="_blank" rel="noopener noreferrer">Natural Language Processing (NLP) for Beginners using Python</a>" where I covered all the relevant topics one might need to get started with Natural Language Processing (NLP), from the very basics of NLP to developing deep learning models and using few existing large language models. 
Apart from covering the theories, I also demonstrated the concepts practically using the programming language Python and also demonstrated the usage of a few other relevant tools and platforms.`
    },

           {
      id: 5,
      title: "Coding Instructor",
      company: "Learn Time",
      companyUrl: "https://www.learntime.com.bd/math",
      logo: "https://images.clickfunnels.com/cdn-cgi/image/width=600,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/JMBYmY/image/10386400/file/2d487c4f1b68dbc679a2a6a6c12a4e7c.png",
      logoAlt: "Learn Time logo",
      employmentType: "Part-Time",
      locationType: "Remote",
      location: "Rajshahi, Bangladesh",
      period: "November, 2021 - December, 2022",
      description: `LearnTime is a Rajshahi-based e-learning platform. This is a remote part-time job where I provide 3-4 hours a week.`,
      responsibilities: [
        "Teach programming (With Python) to people(of all ages, especially kids) from non-programming backgrounds who have little to no prior programming experience.",
        "Make notes, and documents, and set problems for the tests.",
        "Provide solutions to the problems students are struggling withh",
        "Teach data analytics using Python to interested people."
      ]
    },

    {
      id: 6,
      title: "Chief Author & Coordinator (Music Segment)",
      company: "নিয়ন আলোয় - Neon Aloy",
      companyUrl: "https://www.linkedin.com/company/neonaloy/posts/?feedView=all",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQHdIeTqRknL4Q/company-logo_200_200/company-logo_200_200/0/1630611693418/neonaloy_logo?e=1758153600&v=beta&t=qhpZc85HfQ6wUL6XJH-gf7wNpFqFKzive6jDBS3ea2k",
      logoAlt: "Neon Aloy logo",
      employmentType: "Part-Time",
      locationType: "Remote",
      location: "Sylhet, Bangladesh",
      period: "November, 2017 - December, 2019",
      description: `Neon Aloy was a Sylhet based online portal founded by 4 SUST graduates. I worked at a online bangla portal or Magazine named "NEON ALOY". I started out as a trainee author and with time & proven experience, I became the Chief author & coordinator of the music segment. This was also a part time job that I used to do besides academic works & study.`,
      responsibilities: [
        "Train, proofread new authors work and provide feedback",
        "Coordinate with the editorial team for content planning",
        "Manage the music segment's content calendar",
        "Write music articles and song/album reviews of the local/international artists",
        "Interview local artists and write followup reports",
        "Organize online events and webinars featuring local artists"
      ]
    }
  ];

  const educationData = [
    {
      id: 1,
      degree: "Master of Science - M.Sc",
      field: "Computer Science Engineering",
      institution: "BRAC University",
      location: "Dhaka, Bangladesh",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQGLfIJZJcC3rQ/company-logo_200_200/company-logo_200_200/0/1631312895616?e=1758153600&v=beta&t=mLXMbe5WZtzauJr_5uRpQzlRgo3zD1O8zkujk-lsEkw",
      logoAlt: "BRAC University logo",
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
      institution: "BRAC University",
      location: "Dhaka, Bangladesh",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQGLfIJZJcC3rQ/company-logo_200_200/company-logo_200_200/0/1631312895616?e=1758153600&v=beta&t=mLXMbe5WZtzauJr_5uRpQzlRgo3zD1O8zkujk-lsEkw",
      logoAlt: "BRAC University logo",
      period: "2016 - 2020",
      thesis: {
        title: "Efficient approach for reliability evaluation of the BUS4 distribution system considering momentary interruption. ",
        link: "https://dspace.bracu.ac.bd/xmlui/handle/10361/14487"
      },
      supervisor: {
        name: "Dr. A.S. Nazmul Huda",
        link: "https://scholar.google.com/citations?user=-QIR2lUAAAAJ&hl=en"
      },
      publication: {
        title: "Monte Carlo Simulation for Reliability Worth Assessment of Distribution System Considering Momentary Interruptions",
        link: "https://ieeexplore.ieee.org/document/10044904/"
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

  // New tabs data (dummy/sample items)
  const achievementData: SimpleResumeItem[] = [
    {
      id: 1,
      title: "Kaggle Competition – Top 5%",
      shortDescription: "Ranked 158/3,200 teams in an image classification challenge",
      description: [
        "Built an ensemble of CNNs with heavy augmentations and pseudo-labeling.",
        "Leveraged stratified k-fold validation and test-time augmentation."
      ],
      images: [
        { src: "https://placehold.co/420x260/png?text=Leaderboard", alt: "Leaderboard screenshot" },
        { src: "https://placehold.co/420x260/png?text=Confusion+Matrix", alt: "Confusion matrix" }
      ]
    },
    {
      id: 2,
      title: "Open Source – Contributor of the Month",
      shortDescription: "Recognized for impactful PRs to a popular NLP toolkit",
      description: [
        "Added multilingual tokenization fixes and improved benchmarks pipeline.",
        "Wrote documentation and examples that increased adoption."
      ],
      images: [
        { src: "https://placehold.co/420x260/png?text=Pull+Requests", alt: "Pull requests" },
        { src: "https://placehold.co/420x260/png?text=Docs+Preview", alt: "Docs preview" }
      ]
    }
  ];

  const volunteeringData: SimpleResumeItem[] = [
    {
      id: 1,
      title: "Community Tech Mentor",
      shortDescription: "Weekly mentoring sessions for university students",
      description: [
        "Helped students learn Python, ML basics, and project structuring.",
        "Set up code reviews and mini hackathons to practice collaboration."
      ],
      images: [
        { src: "https://placehold.co/420x260/png?text=Mentoring", alt: "Mentoring session" },
        { src: "https://placehold.co/420x260/png?text=Workshop", alt: "Workshop group photo" }
      ]
    },
    {
      id: 2,
      title: "Data Science Meetup – Organizer",
      shortDescription: "Quarterly meetup hosting 100+ practitioners",
      description: [
        "Coordinated speakers, logistics, and capture of talk recordings.",
        "Curated beginner-friendly talks alongside advanced sessions."
      ],
      images: [
        { src: "https://placehold.co/420x260/png?text=Meetup", alt: "Meetup event" },
        { src: "https://placehold.co/420x260/png?text=Talks", alt: "Speaker session" }
      ]
    }
  ];

  const awardsData: SimpleResumeItem[] = [
    {
      id: 1,
      title: "Dean's List – BRAC University",
      shortDescription: "Awarded for outstanding academic performance",
      description: "Recognized for maintaining a high CGPA and demonstrating leadership in student initiatives.",
      images: [
        { src: "https://placehold.co/420x260/png?text=Certificate", alt: "Dean's list certificate" },
        { src: "https://placehold.co/420x260/png?text=Ceremony", alt: "Award ceremony photo" }
      ]
    },
    {
      id: 2,
      title: "Best Paper Award – IEEE Student Conference",
      shortDescription: "Paper on low-resource ASR techniques",
      description: [
        "Proposed a character-gram approach improving WER in dialectal Bengali.",
        "Released reproducible code and dataset splits to the community."
      ],
      images: [
        { src: "https://placehold.co/420x260/png?text=Best+Paper", alt: "Best paper badge" },
        { src: "https://placehold.co/420x260/png?text=Presentation", alt: "Conference presentation" }
      ]
    }
  ];

  const renderSimpleCards = (items: SimpleResumeItem[]) => {
    if (!items || items.length === 0) {
      return (
        <div className="resume-card" data-aos="fade-up" data-aos-delay="0">
          <div className="card-body">
            <p className="card-description">No records added yet.</p>
          </div>
        </div>
      );
    }
    return items.map((item, index) => (
      <div key={item.id} className="resume-card" data-aos="fade-up" data-aos-delay={index * 100}>
        <div className="card-header">
          <div className="card-info">
            <h3 className="card-title">{item.title}</h3>
            {item.shortDescription && (
              <div className="card-short-description">{item.shortDescription}</div>
            )}
          </div>
        </div>
        <div className="card-body">
          {item.description && (
            <div className="card-description">
              <p>
                {Array.isArray(item.description)
                  ? item.description.join(' ')
                  : item.description.replace(/\n+/g, ' ')}
              </p>
            </div>
          )}
          {item.images && item.images.length > 0 && (
            <div className="card-images">
              {item.images.map((img, i) => (
                <img key={i} src={img.src} alt={img.alt} />
              ))}
            </div>
          )}
        </div>
      </div>
    ));
  };

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
            <button
              className={`tab-button ${activeTab === 'achievement' ? 'active' : ''}`}
              onClick={() => setActiveTab('achievement')}
            >
              <i className="bi bi-trophy"></i>
              Achievement
            </button>
            <button
              className={`tab-button ${activeTab === 'volunteering' ? 'active' : ''}`}
              onClick={() => setActiveTab('volunteering')}
            >
              <i className="bi bi-people"></i>
              Volunteering
            </button>
            <button
              className={`tab-button ${activeTab === 'awards' ? 'active' : ''}`}
              onClick={() => setActiveTab('awards')}
            >
              <i className="bi bi-award"></i>
              Awards and Honors
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
                    {exp.logo && (
                      <div className="card-logo">
                        <OptimizedImage
                          src={exp.logo}
                          alt={exp.logoAlt || `${exp.company} logo`}
                          aspectRatio="1/1"
                          objectFit="contain"
                        />
                      </div>
                    )}
                    <div className="card-info">
                      <h3 className="card-title">{exp.title}</h3>
                      <h4 className="card-company">
                        {exp.companyUrl ? (
                          <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                            {exp.company}
                          </a>
                        ) : (
                          exp.company
                        )}
                      </h4>
                      <div className="employment-details">
                        <span className="location">{exp.location}</span>
                      </div>
                      <div className="card-meta">
                        <span>{exp.employmentType}</span>
                        <span className="separator">·</span>
                        <span>{exp.locationType}</span>
                      </div>
                      <div className="card-period">
                        <span className="period">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-body">
                    <div 
                      className="card-description" 
                      dangerouslySetInnerHTML={{ 
                        __html: exp.description.split('\n\n').map(para => `<p>${para}</p>`).join('') 
                      }} 
                    />
                    
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

                    {exp.responsibilities && (
                      <div className="responsibilities">
                        <strong>Key Responsibilities:</strong>
                        <ul>
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    )}

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
                    {edu.logo && (
                      <div className="card-logo">
                        <OptimizedImage
                          src={edu.logo}
                          alt={edu.logoAlt || `${edu.institution} logo`}
                          aspectRatio="1/1"
                          objectFit="contain"
                        />
                      </div>
                    )}
                    <div className="card-info">
                      <h3 className="card-title">{edu.degree}</h3>
                      <h4 className="card-company">{edu.field}</h4>
                      <div className="card-meta">
                        <span className="institution">{edu.institution}</span>
                      </div>
                      <div className="card-meta">
                        <span className="location">{edu.location}</span>
                      </div>
                      <div className="card-period">
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

          {activeTab === 'achievement' && (
            <div className="achievement-section">
              {renderSimpleCards(achievementData)}
            </div>
          )}

          {activeTab === 'volunteering' && (
            <div className="volunteering-section">
              {renderSimpleCards(volunteeringData)}
            </div>
          )}

          {activeTab === 'awards' && (
            <div className="awards-section">
              {renderSimpleCards(awardsData)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume; 