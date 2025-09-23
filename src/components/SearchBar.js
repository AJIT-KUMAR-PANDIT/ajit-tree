'use client';

import { useState, useEffect, useRef } from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, totalLinks, filteredLinks }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  // Show search bar when there are multiple links
  useEffect(() => {
    if (totalLinks > 3) {
      setIsVisible(true);
    }
  }, [totalLinks]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+F or Cmd+F or just "/" to focus search
      if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === '/' && !isFocused) {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === 'Escape' && isFocused) {
        inputRef.current?.blur();
        setSearchQuery('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFocused, setSearchQuery]);

  const clearSearch = () => {
    setSearchQuery('');
    inputRef.current?.focus();
  };

  if (!isVisible) return null;

  return (
    <div className="mb-6 animate-slide-up delay-300">
      <div className="relative max-w-md mx-auto">
        <div
          className={`
            relative bg-white dark:bg-gray-800 rounded-2xl border-2 transition-all duration-300
            ${isFocused 
              ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
            }
          `}
        >
          {/* Search Icon */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-colors duration-200 ${
                isFocused 
                  ? 'text-purple-500' 
                  : 'text-gray-400 dark:text-gray-500'
              }`}
            >
              <path
                d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Search Input */}
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search your links..."
            className="
              w-full pl-12 pr-12 py-4 rounded-2xl
              bg-transparent text-gray-900 dark:text-white
              placeholder-gray-500 dark:placeholder-gray-400
              focus:outline-none text-lg
            "
          />

          {/* Clear Button */}
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="
                absolute right-4 top-1/2 transform -translate-y-1/2
                p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700
                transition-colors duration-200 group
              "
              aria-label="Clear search"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Search Results Count */}
        {searchQuery && (
          <div className="mt-3 text-center animate-fade-in">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {filteredLinks === 0 ? (
                <span className="text-red-500 dark:text-red-400">
                  No results found for &ldquo;{searchQuery}&rdquo;
                </span>
              ) : filteredLinks === 1 ? (
                <span className="text-green-500 dark:text-green-400">
                  Found 1 result
                </span>
              ) : (
                <span className="text-green-500 dark:text-green-400">
                  Found {filteredLinks} results
                </span>
              )}
            </span>
          </div>
        )}

        {/* Keyboard Shortcut Hint */}
        {!searchQuery && !isFocused && (
          <div className="mt-2 text-center animate-fade-in">
            <span className="text-xs text-gray-400 dark:text-gray-500">
              Press <kbd className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded">Ctrl+F</kbd> or <kbd className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded">/</kbd> to search
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;