
import React from 'react';
import type { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const handleButtonClick = () => {
    alert(`Redirecting to ${tool.title}`);
  };

  return (
    <div className="group bg-[#3A3D5B] rounded-lg p-6 shadow-lg shadow-[rgba(255,215,0,0.1)] hover:shadow-[rgba(255,215,0,0.2)] hover:shadow-xl flex flex-col justify-between transform hover:-translate-y-2 transition-all duration-300 ease-in-out hover:bg-[#FFD700]">
      <div>
        <h2 className="text-2xl font-bold text-[#EAEAEA] group-hover:text-[#1E1E2F] transition-colors duration-300 mb-2">
          {tool.title}
        </h2>
        <p className="text-gray-300 group-hover:text-[#2B2D42] transition-colors duration-300 mb-6">
          {tool.description}
        </p>
      </div>
      <button
        onClick={handleButtonClick}
        className="w-full mt-auto bg-[#FFD700] text-[#1E1E2F] font-bold py-2 px-4 rounded-md hover:bg-[#E6C200] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#3A3D5B] focus:ring-[#FFD700]"
      >
        Go to Tool
      </button>
    </div>
  );
};
