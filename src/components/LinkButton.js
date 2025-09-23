'use client';

import { useState } from 'react';
import { highlightText } from '@/utils/searchUtils';

const LinkButton = ({ link, index, searchQuery, isFiltered = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Add click tracking or analytics here if needed
    window.open(link.url, '_blank', 'noopener noreferrer');
  };

  return (
    <div 
      className={`
        transform transition-all duration-500 ease-in-out
        ${isFiltered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-100 scale-100 translate-y-0'}
        ${searchQuery && !isFiltered ? 'opacity-40 scale-95' : ''}
      `}
      style={{
        animationDelay: searchQuery ? '0ms' : `${index * 100}ms`
      }}
    >
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          w-full max-w-md mx-auto mb-4 p-4 rounded-2xl
          ${link.color} 
          text-white font-semibold
          transform transition-all duration-300 ease-in-out
          hover:scale-105 hover:shadow-2xl
          focus:outline-none focus:ring-4 focus:ring-purple-300
          animate-slide-up
          relative overflow-hidden
          group
          ${searchQuery && isFiltered ? 'ring-2 ring-yellow-300 ring-opacity-50' : ''}
        `}
      >
      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-2xl" role="img" aria-label={link.title}>
            {link.icon}
          </span>
          <div className="text-left">
            <div className="text-lg font-bold">
              {searchQuery ? highlightText(link.title, searchQuery) : link.title}
            </div>
            {link.description && (
              <div className="text-sm opacity-90">
                {searchQuery ? highlightText(link.description, searchQuery) : link.description}
              </div>
            )}
          </div>
        </div>
        
        {/* Arrow icon */}
        <div className={`
          transition-transform duration-300 ease-in-out
          ${isHovered ? 'translate-x-1' : ''}
        `}>
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path 
              d="M7 17L17 7M17 7H7M17 7V17" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-2xl">
          <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150"></div>
        </div>
      </button>
    </div>
  );
};

export default LinkButton;