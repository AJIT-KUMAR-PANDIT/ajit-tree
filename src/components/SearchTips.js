'use client';

import { useState } from 'react';

const SearchTips = ({ searchQuery, totalLinks }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible || searchQuery || totalLinks <= 5) return null;

  return (
    <div className="max-w-md mx-auto mb-4 animate-fade-in">
      <div className="relative">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg 
                  className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-medium text-blue-800 dark:text-blue-200">
                  💡 Pro Tip
                </h4>
                <div className="text-xs text-blue-700 dark:text-blue-300 mt-1 space-y-1">
                  <p>• Use <kbd className="px-1 py-0.5 bg-blue-100 dark:bg-blue-800 rounded text-xs">Ctrl+F</kbd> or <kbd className="px-1 py-0.5 bg-blue-100 dark:bg-blue-800 rounded text-xs">/</kbd> to quickly search</p>
                  <p>• Search by title, description, or URL</p>
                  <p>• Press <kbd className="px-1 py-0.5 bg-blue-100 dark:bg-blue-800 rounded text-xs">Esc</kbd> to clear search</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="flex-shrink-0 ml-4 p-1 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              aria-label="Dismiss tip"
            >
              <svg 
                className="w-4 h-4 text-blue-500 dark:text-blue-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTips;
