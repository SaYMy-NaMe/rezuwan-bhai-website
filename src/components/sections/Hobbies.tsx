import React from 'react';
import './Hobbies.css';

interface HobbyItem {
  title: string;
  image: string;
  description: string;
  color: string;
  portfolioLink?: string;
  portfolioName?: string;
}

const Hobbies: React.FC = () => {
  const hobbiesItems = [
    {
      title: "Music",
      image: "https://cdn-icons-png.flaticon.com/512/3659/3659784.png",
      description: "Enjoying and exploring various music genres and artists",
      color: "#ff6b6b",
      portfolioLink: "https://open.spotify.com/user/0efb57bct29kilrcjvkw9jnjk?si=62e69017ee0b4741&nd=1&dlsi=d933f2f98366499b",
      portfolioName: "Spotify"
    },
    {
      title: "Songwriting",
      image: "https://cdn-icons-png.flaticon.com/512/2907/2907253.png",
      description: "Composing lyrics and melodies as a creative outlet",
      color: "#4ecdc4"
    },
    {
      title: "Workout",
      image: "https://cdn-icons-png.flaticon.com/512/2936/2936886.png",
      description: "Maintaining fitness and strength through regular workouts",
      color: "#6a0572"
    },
    {
      title: "Sketching",
      image: "https://cdn-icons-png.flaticon.com/512/1547/1547093.png",
      description: "Drawing portraits, landscapes and conceptual art",
      color: "#45b7d1",
      portfolioLink: "https://www.deviantart.com/noobdoodlerrazor",
      portfolioName: "DeviantArt"
    },
    {
      title: "Photography",
      image: "https://cdn-icons-png.flaticon.com/512/1042/1042390.png",
      description: "Capturing moments and exploring visual storytelling",
      color: "#f8a055",
      portfolioLink: "https://www.flickr.com/photos/139437500@N06/page1",
      portfolioName: "Flickr"
    },
    {
      title: "Writing",
      image: "https://cdn-icons-png.flaticon.com/512/2593/2593482.png",
      description: "Expressing ideas through creative and technical writing",
      color: "#f67280",
      portfolioLink: "https://medium.com/@rezwanhasan626",
      portfolioName: "Medium"
    },
    {
      title: "Movies",
      image: "https://cdn-icons-png.flaticon.com/512/3418/3418886.png",
      description: "Watching and analyzing films across different genres",
      color: "#8675a9",
      portfolioLink: "https://www.imdb.com/user/ur62837581/?ref_=nv_usr_prof_2",
      portfolioName: "IMDb"
    },
    {
      title: "Reading",
      image: "https://cdn-icons-png.flaticon.com/512/2436/2436882.png",
      description: "Exploring literature, fiction and non-fiction books",
      color: "#88d498"
    },
    {
      title: "Cycling",
      image: "https://cdn-icons-png.flaticon.com/512/6669/6669767.png",
      description: "Exploring scenic routes and staying active on two wheels",
      color: "#c06c84"
    },
  ];

  return (
    <section id="hobbies" className="interests section">
      <div className="container">
        <div className="section-title">
          <h2>Hobbies</h2>
          <br/>
          <div><span>My</span> <span className="description-title">Hobbies &amp; Portfolios</span></div>
          <p className="subtitle" style={{ fontSize: '1rem', color: '#666', maxWidth: '750px', margin: '0 auto', marginTop: '15px' }}>
            The activities I enjoy and the projects I work on. Click on any portfolio link to see my work in that area.
          </p>
        </div>

        <div className="row gy-4">
          {hobbiesItems.map((hobby, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="features-item" style={{ borderTop: `3px solid ${hobby.color}` }}>
                <div className="icon" style={{ backgroundColor: `${hobby.color}15` }}>
                  <img
                    src={hobby.image}
                    alt={hobby.title}
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
                      fallbackIcon.className = 'bi bi-controller';
                      fallbackIcon.style.fontSize = '2rem';
                      fallbackIcon.style.color = hobby.color;
                      target.parentNode?.appendChild(fallbackIcon);
                    }}
                  />
                </div>
                <h3>{hobby.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px', marginBottom: '8px' }}>
                  {hobby.description}
                </p>
                {hobby.portfolioLink && (
                  <a 
                    href={hobby.portfolioLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="portfolio-link-button"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: hobby.color,
                      color: '#fff',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      textDecoration: 'none',
                      gap: '5px',
                      marginTop: 'auto',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                    }}
                  >
                    <span>View {hobby.portfolioName}</span>
                    <i className="bi bi-arrow-right" style={{ fontSize: '0.85rem' }}></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
