import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero: React.FC = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['a Researcher', 'an Engineer', 'an Artist', 'a Musician'],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img src="/assets/img/cover.jpg" alt="" data-aos="fade-in" />
      <div className="container" data-aos="zoom-out" data-aos-delay="100">
        <h2 style={{fontSize: '4rem', fontWeight: 'bold', color: '#FFFFFF', marginBottom: '1rem'}}>Md. Rezuwan Hassan</h2>
        <p style={{fontSize: '2rem', color: '#FFFFFF', marginBottom: '2rem'}}>
          I'm <span ref={typedRef} style={{borderBottom: '3px solid #20BEFF', paddingBottom: '2px'}}></span>
        </p>
        <div className="social-links" style={{display: 'inline-flex', alignItems: 'center', marginTop: '25px'}}>
          <a href="https://www.linkedin.com/in/md-rezuwan-hasan-04246416b/" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'rgba(250,250,250,0.1)', color: '#fafafa', borderRadius: '50px', fontSize: '14px', marginRight: '20px', textDecoration: 'none', transition: '0.3s'}}>
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/RezuwanHassan262" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'rgba(250,250,250,0.1)', color: '#fafafa', borderRadius: '50px', fontSize: '14px', marginRight: '20px', textDecoration: 'none', transition: '0.3s'}}>
            <i className="bi bi-github"></i>
          </a>
          <a href="https://scholar.google.com/citations?user=ZUrWZhQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'rgba(250,250,250,0.1)', color: '#fafafa', borderRadius: '50px', fontSize: '14px', marginRight: '20px', textDecoration: 'none', transition: '0.3s'}}>
            <i className="fab fa-google-scholar"></i>
          </a>
          <a href="https://huggingface.co/Rezuwan" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'rgba(250,250,250,0.1)', color: '#fafafa', borderRadius: '50px', fontSize: '14px', marginRight: '20px', textDecoration: 'none', transition: '0.3s'}}>
            <i className="fa-solid fa-robot"></i>
          </a>
          <a href="https://www.kaggle.com/mdrezuwanhassan" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'rgba(250,250,250,0.1)', color: '#fafafa', borderRadius: '50px', fontSize: '14px', marginRight: '0', textDecoration: 'none', transition: '0.3s'}}>
            <i className="fab fa-kaggle"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 