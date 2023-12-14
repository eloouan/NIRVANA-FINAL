import React, { useState } from "react";

interface FilterButtonProps {
  markerTypes: string[];
  displayTypes: string[];
  onClick: (type: string) => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  markerTypes,
  displayTypes,
  onClick,
}) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleFilter = (type: string) => {
    if (selectedType === type) {
      setSelectedType(null);
    } else {
      setSelectedType(type);
    }
    onClick(type);
  };

  return (
    <div className="filter-menu">
      {displayTypes.map((type, index) => (
        <div className="filter-item" key={index}>
          <label className="filter-label" title={markerTypes[index]}>
            <input
              type="checkbox"
              checked={selectedType === type}
              onChange={() => handleFilter(markerTypes[index])}
            />
            {type}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterButton;
