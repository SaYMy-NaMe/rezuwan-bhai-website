import React from 'react';
import PageTitle from '../components/sections/PageTitle';
import AboutSection from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Interests from '../components/sections/Interests';

const About: React.FC = () => {
  return (
    <>
      <PageTitle 
        title="About"
        description="An Artificial Intelligence (AI) engineer with a strong passion for Deep learning, Natural language processing & Computational Cognitive Science. Dedicated to advancing open-source technologies and aim to combine passion, dedication, and hard work to achieve impactful results by contributing to meaningful initiatives while building my expertise."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About' }
        ]}
      />
      <AboutSection />
      <Skills />
      <Interests />
    </>
  );
};

export default About; 