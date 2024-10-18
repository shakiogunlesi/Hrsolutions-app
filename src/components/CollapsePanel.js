import React, { useState } from 'react';

const CollapsiblePanel = ({ title, children, isInitiallyOpen = false }) => {
  // Set the initial state based on the isInitiallyOpen prop
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  // Toggle panel visibility
  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-lg mb-2">
      {/* Panel Header */}
      <div
        className="bg-blue-500 font-bold text-[30px] text-white p-2 cursor-pointer"
        onClick={togglePanel}
      >
        <h2>{title}</h2>
      </div>

      {/* Collapsible Content */}
      {isOpen && (
        <div className="px-4 py-2 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsiblePanel;
