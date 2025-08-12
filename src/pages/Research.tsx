import React, { useState } from 'react';
import PageTitle from '../components/sections/PageTitle';
import ResearchSection from '../components/sections/Research';
import FilterBar from '../components/common/FilterBar';

const Research: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  // Research-specific filters mapped from user description
  const filters = [
    { id: 'all', name: 'All' },
    { id: 'federated', name: 'Federated Learning' },
    { id: 'power', name: 'Power Distribution System' },
    { id: 'agentic-ai', name: 'Agentic AI' },
    { id: 'smart-agri', name: 'Smart Agriculture' },
    { id: 'nlp', name: 'NLP' }
  ];
  return (
    <>
      <PageTitle
        title="Research"
        description={`"Machines require large datasets and extensive computational training to replicate what comes to you naturally, so embrace your innate abilities and prioritize your humanity."`}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Research' }
        ]}
      />

      {/* Social Links Section */}
      <div style={{ margin: '30px 0 0 0', display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://scholar.google.com/citations?user=ZUrWZhQAAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer" title="Google Scholar" style={{ color: '#20BEFF', fontSize: '2rem' }}>
          <img src="/assets/img/google-scholar.png" alt="Google Scholar" style={{ height: '32px', width: '32px', verticalAlign: 'middle' }} />
        </a>
        <a href="https://www.researchgate.net/profile/Md-Hassan-82" target="_blank" rel="noopener noreferrer" title="ResearchGate" style={{ height: '60px', width: '60px', color: '#20BEFF', fontSize: '2rem' }}>
          <img src="https://user-images.githubusercontent.com/511683/28757557-f82cff1a-7585-11e7-9317-072a838dcca3.png" alt="ResearchGate" style={{ height: '60px', width: '60px', verticalAlign: 'middle' }} />
        </a>
      </div>
      {/* Filter Buttons */}
      <section className="research-filters" style={{ marginTop: '24px' }}>
        <div className="container">
          <FilterBar
            filters={filters}
            activeId={activeFilter}
            onChange={setActiveFilter}
            data-aos="fade-up"
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}
          />
        </div>
      </section>

      <ResearchSection activeFilter={activeFilter} />
    </>
  );
};

export default Research; 