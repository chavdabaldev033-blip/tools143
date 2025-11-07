
import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon, TwitterIcon, GithubIcon, LinkedinIcon } from './Icons';
import { CONVERSIONS } from '../constants';

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Socials */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-primary dark:text-primary-light">
              <LogoIcon className="h-10 w-10" />
              <span className="font-bold text-2xl">ImageConv</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">Fast, secure, and free client-side image conversions.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"><TwitterIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-500 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"><GithubIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-500 hover:text-primary dark:hover:text-primary-light transition-colors duration-300"><LinkedinIcon className="h-6 w-6" /></a>
            </div>
          </div>

          {/* Column 2: Tools */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Tools</h3>
            <ul className="space-y-2">
              {CONVERSIONS.map((conv) => (
                <li key={conv.path}>
                  <Link to={`/converter/${conv.path}`} className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300">{`${conv.from} to ${conv.to}`}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300">Disclaimer</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and features.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col sm:flex-row gap-2">
                <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary" />
                <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md font-semibold hover:bg-primary-dark transition-colors duration-300">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} ImageConv. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
