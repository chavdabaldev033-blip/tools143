import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONVERSIONS, FAQ_DATA } from '../constants';
import { ArrowRightIcon, ChevronDownIcon } from '../components/Icons';

function HeroSection() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4 animate-fade-in">
          The Ultimate Client-Side Image Converter
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Convert JPG, PNG, and WEBP images instantly in your browser. No uploads, completely secure, and 100% free.
        </p>
        <a
          href="#tools"
          className="inline-block bg-primary text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

// FIX: Changed component from a function declaration to a const arrow function with React.FC type.
// This ensures that special React props like 'key' are correctly typed and handled by TypeScript.
const ToolCard: React.FC<{ from: string, to: string, path: string }> = ({ from, to, path }) => {
  return (
    <Link to={`/converter/${path}`} className="group block p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary-light transform hover:-translate-y-2 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
            {from} <span className="text-primary dark:text-primary-light">to</span> {to}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Convert {from} images to {to} format.</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-3 group-hover:bg-primary dark:group-hover:bg-primary-light text-primary dark:text-primary-light group-hover:text-white transition-all duration-300">
          <ArrowRightIcon className="w-6 h-6" />
        </div>
      </div>
    </Link>
  );
}

function ToolsSection() {
  return (
    <section id="tools" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Our Conversion Tools</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">Select a tool to start converting your images with ease.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CONVERSIONS.map((conv) => (
            <ToolCard key={conv.path} from={conv.from} to={conv.to} path={conv.path} />
          ))}
        </div>
      </div>
    </section>
  );
}

// FIX: Changed component from a function declaration to a const arrow function with React.FC type.
// This ensures that special React props like 'key' are correctly typed and handled by TypeScript.
const FaqItem: React.FC<{ question: string, answer: string, isOpen: boolean, onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 dark:border-gray-700 py-4">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 dark:text-gray-200"
            >
                <span>{question}</span>
                <ChevronDownIcon className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <p className="text-gray-600 dark:text-gray-400">
                    {answer}
                </p>
            </div>
        </div>
    );
}

function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 md:py-28 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                        Have questions? We've got answers.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                    {FAQ_DATA.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ToolsSection />
      <FaqSection />
    </>
  );
}
