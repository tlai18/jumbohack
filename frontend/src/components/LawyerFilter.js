import React, { useState } from 'react';

const MealSwipeFilter = ({ handleFilterChange }) => {
  const [activeFilters, setActiveFilters] = useState([]);

  const handleClick = (filter) => {
    let updatedFilters = [...activeFilters];
  
    if (updatedFilters.includes(filter)) {
      // Filter already exists, remove it from the activeFilters array
      updatedFilters = updatedFilters.filter(f => f !== filter);
    } else {
      // Filter does not exist, add it to the activeFilters array
      updatedFilters.push(filter);
    }
    setActiveFilters(updatedFilters);
    handleFilterChange(updatedFilters); // Call the handleFilterChange function in the parent component with the updatedFilters array
  };

  return (
    <div>
      <button
        onClick={() => handleClick('computer science')}
        className={`filter ${activeFilters.includes('computer science') ? 'active' : ''}`}
      >
        Computer Science
      </button>
      <button
        onClick={() => handleClick('biology')}
        className={`filter ${activeFilters.includes('biology') ? 'active' : ''}`}
      >
        Biology
      </button>
      <button
        onClick={() => handleClick('chemistry')}
        className={`filter ${activeFilters.includes('chemistry') ? 'active' : ''}`}
      >
        Chemistry
      </button>
      <button
        onClick={() => handleClick('electrical engineering')}
        className={`filter ${activeFilters.includes('electrical engineering') ? 'active' : ''}`}
      >
        Electrical Engineering
      </button>
      <button
        onClick={() => handleClick('mechanical engineering')}
        className={`filter ${activeFilters.includes('mechanical engineering') ? 'active' : ''}`}
      >
        Mechanical Engineering
      </button>
      {/* Add more filter buttons as needed */}
    </div>
  );
};

export default MealSwipeFilter;
