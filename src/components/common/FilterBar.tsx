import React from 'react';

export interface FilterOption {
  id: string;
  name: string;
}

interface FilterBarProps {
  filters: FilterOption[];
  activeId: string;
  onChange: (id: string) => void;
  listClassName?: string;
  itemClassName?: string;
  style?: React.CSSProperties;
  ['data-aos']?: string;
}

const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  activeId,
  onChange,
  listClassName,
  itemClassName,
  style,
  'data-aos': dataAos,
}) => {
  return (
    <ul className={`filter-list ${listClassName ?? ''}`} data-aos={dataAos} style={style}>
      {filters.map((filter) => (
        <li
          key={filter.id}
          className={`filter-item ${activeId === filter.id ? 'active' : ''} ${itemClassName ?? ''}`.trim()}
          onClick={() => onChange(filter.id)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onChange(filter.id);
            }
          }}
        >
          {filter.name}
        </li>
      ))}
    </ul>
  );
};

export default FilterBar;


