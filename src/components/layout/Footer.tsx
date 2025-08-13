import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer dark-background">
      <div className="container">
        <h3>Md. Rezuwan Hassan</h3>
        <p>A researcher by day, an engineer by night, and an artist all the way.</p>
        <br/>
        <div className="social-links d-flex justify-content-center">
          {/*<a href=""><i className="bi bi-twitter-x"></i></a> 
          <a href=""><i className="bi bi-instagram"></i></a>
          <a href=""><i className="bi bi-skype"></i></a>*/}
          {/* <a href="https://www.facebook.com/listener.rezwan.1" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a> */}
          <a href="https://www.linkedin.com/in/md-rezuwan-hasan-04246416b/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/RezuwanHassan262" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://scholar.google.com/citations?user=ZUrWZhQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-google-scholar"></i>
          </a>
          <a href="https://huggingface.co/Rezuwan" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-robot"></i>
          </a>
          <a href="https://www.kaggle.com/mdrezuwanhassan" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-kaggle"></i>
          </a>
        </div>
        <div className="container">
          <div className="copyright">
            <span>© {currentYear}</span> <strong className="px-1">Md. Rezuwan Hassan</strong> <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 