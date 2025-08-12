import React from 'react';

const Interests: React.FC = () => {
  const researchInterests = [
    {
      title: "Computational Cognitive Science",
      image: "https://cdn-icons-png.flaticon.com/512/1610/1610171.png",
      description: "Understanding human cognition through computational models and AI",
      color: "#ffbb2c"
    },
    {
      title: "Human-Computer Interaction",
      //image: "https://cdn-icons-png.flaticon.com/512/1828/1828778.png",
      image: "https://static.thenounproject.com/png/human-computer-interaction-icon-6947099-512.png",
      description: "Designing intuitive interfaces and user experiences",
      color: "#5578ff"
    },
    {
      title: "Federated Learning",
      image: "https://miro.medium.com/v2/resize:fit:823/1*fEUxSGQGOFgwobm6br9WCg.jpeg",
      description: "Distributed machine learning with privacy preservation",
      color: "#e80368"
    },
    {
      title: "Meta-Learning",
      image: "https://static.vecteezy.com/system/resources/previews/016/530/479/non_2x/icon-meta-learning-related-to-machine-learning-symbol-blue-eyes-style-simple-design-editable-simple-illustration-simple-icons-vector.jpg",
      description: "Learning to learn and few-shot learning approaches",
      color: "#47aeff"
    },
    {
      title: "Reinforcement Learning",
      image: "https://cdn-icons-png.flaticon.com/512/9304/9304481.png",
      description: "AI agents learning through interaction and feedback",
      color: "#ffa76e"
    },
    {
      title: "Healthcare/Medical AI",
      image: "https://static.vecteezy.com/system/resources/previews/029/272/386/non_2x/ai-in-healthcare-icon-vector.jpg",
      description: "AI applications in healthcare and medical diagnosis",
      color: "#11dbcf"
    }
  ];

  return (
    <section id="interests" className="interests section">
      <div className="container">
        <div className="section-title">
          <h2>Research Interests</h2>
          <div><span>I'm</span> <span className="description-title">Interested in</span></div>
        </div>

        <div className="row gy-4">
          {researchInterests.map((interest, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="features-item">
                <div className="icon">
                  <img
                    src={interest.image}
                    alt={interest.title}
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      borderRadius: '8px'
                    }}
                    onError={(e) => {
                      // Fallback to a default icon if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallbackIcon = document.createElement('i');
                      fallbackIcon.className = 'bi bi-gear';
                      fallbackIcon.style.fontSize = '2rem';
                      fallbackIcon.style.color = interest.color;
                      target.parentNode?.appendChild(fallbackIcon);
                    }}
                  />
                </div>
                <h3>{interest.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>
                  {interest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests; 