
import React from 'react';
import { ToolCard } from './components/ToolCard';
import type { Tool } from './types';

const tools: Tool[] = [
  {
    title: 'Image Converter',
    description: 'Convert your images to different formats like JPG, PNG, WEBP, etc.',
  },
  {
    title: 'Image Compressor',
    description: 'Reduce the file size of your images without losing quality.',
  },
  {
    title: 'Image Crop',
    description: 'Easily crop your images to the perfect size and aspect ratio.',
  },
  {
    title: 'Video Converter',
    description: 'Convert video files to various formats for any device.',
  },
  {
    title: 'Age Calculator',
    description: 'Calculate your age in years, months, and days accurately.',
  },
  {
    title: 'EMI Calculator',
    description: 'Plan your loans by calculating your Equated Monthly Installment.',
  },
  {
    title: 'SIP Calculator',
    description: 'Estimate the returns on your Systematic Investment Plan.',
  },
  {
    title: 'Audio Trim',
    description: 'Trim your audio files to get the exact clip you need.',
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full">
      <header className="bg-[#2B2D42] py-6 shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
          Multi Tool Hub
        </h1>
      </header>

      <main className="container mx-auto p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </main>
      
      <footer className="text-center py-6 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Multi Tool Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
