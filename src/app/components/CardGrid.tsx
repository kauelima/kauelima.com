import React from 'react';

interface CardGridProps {
  children: React.ReactNode;
}

const CardGrid: React.FC<CardGridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  );
};

export default CardGrid;
