import React, { useEffect, useRef } from 'react';

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const triggerAnimation = () => {
    console.log('Manually triggering animation...');
    const progressBars = skillsRef.current?.querySelectorAll('.progress .progress-bar');
    console.log('Found progress bars:', progressBars?.length);
    
    progressBars?.forEach((el, index) => {
      const progressBar = el as HTMLElement;
      const percentage = progressBar.getAttribute('aria-valuenow');
      console.log(`Animating progress bar ${index + 1} to ${percentage}%`);
      
      if (percentage) {
        // Ensure the progress bar starts at 1px
        progressBar.style.width = '1px';
        
        // Animate to the target percentage
        setTimeout(() => {
          progressBar.style.width = percentage + '%';
          console.log(`Set progress bar ${index + 1} to ${percentage}%`);
        }, index * 200); // Stagger the animations
      }
    });
  };

  useEffect(() => {
    console.log('Skills component mounted');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Skills section is visible, starting animation...');
            
            // Add a small delay to ensure the section is fully visible
            setTimeout(() => {
              triggerAnimation();
            }, 500);
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.8 } // 80% visible
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="skills section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <div><span>My</span> <span className="description-title">Skills</span></div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation" ref={skillsRef}>
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill" style={{color: 'var(--heading-color)', display: 'block', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '600'}}>
                <span>HTML</span> <i className="val" style={{float: 'right', fontStyle: 'normal'}}>100%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '1px'}}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill" style={{color: 'var(--heading-color)', display: 'block', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '600'}}>
                <span>CSS</span> <i className="val" style={{float: 'right', fontStyle: 'normal'}}>90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '1px'}}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill" style={{color: 'var(--heading-color)', display: 'block', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '600'}}>
                <span>JavaScript</span> <i className="val" style={{float: 'right', fontStyle: 'normal'}}>75%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '1px'}}></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="progress">
              <span className="skill" style={{color: 'var(--heading-color)', display: 'block', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '600'}}>
                <span>PHP</span> <i className="val" style={{float: 'right', fontStyle: 'normal'}}>80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '1px'}}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill" style={{color: 'var(--heading-color)', display: 'block', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '600'}}>
                <span>WordPress/CMS</span> <i className="val" style={{float: 'right', fontStyle: 'normal'}}>90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '1px'}}></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill" style={{color: 'var(--heading-color)', display: 'block', marginBottom: '6px', textTransform: 'uppercase', fontWeight: '600'}}>
                <span>Photoshop</span> <i className="val" style={{float: 'right', fontStyle: 'normal'}}>55%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} style={{width: '1px'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 