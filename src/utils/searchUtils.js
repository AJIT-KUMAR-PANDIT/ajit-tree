/**
 * Filter links based on search query
 * @param {Array} links - Array of link objects
 * @param {string} searchQuery - Search query string
 * @returns {Array} Filtered array of links
 */
export const filterLinks = (links, searchQuery) => {
  if (!searchQuery || !searchQuery.trim()) {
    return links;
  }

  const query = searchQuery.toLowerCase().trim();
  
  return links.filter(link => {
    const title = link.title?.toLowerCase() || '';
    const description = link.description?.toLowerCase() || '';
    const url = link.url?.toLowerCase() || '';
    
    return (
      title.includes(query) ||
      description.includes(query) ||
      url.includes(query)
    );
  });
};

/**
 * Highlight search matches in text
 * @param {string} text - Text to highlight
 * @param {string} searchQuery - Search query to highlight
 * @returns {JSX.Element} Text with highlighted matches
 */
export const highlightText = (text, searchQuery) => {
  if (!searchQuery || !searchQuery.trim() || !text) {
    return text;
  }

  const query = searchQuery.trim();
  const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (regex.test(part)) {
      return (
        <mark 
          key={index} 
          className="bg-yellow-200 dark:bg-yellow-500 text-gray-900 dark:text-gray-100 px-1 rounded-sm font-semibold"
        >
          {part}
        </mark>
      );
    }
    return part;
  });
};

/**
 * Escape regex special characters
 * @param {string} string - String to escape
 * @returns {string} Escaped string
 */
const escapeRegex = (string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

/**
 * Check if a link matches the search query
 * @param {Object} link - Link object
 * @param {string} searchQuery - Search query string
 * @returns {boolean} Whether the link matches
 */
export const linkMatches = (link, searchQuery) => {
  if (!searchQuery || !searchQuery.trim()) {
    return true;
  }

  const query = searchQuery.toLowerCase().trim();
  const title = link.title?.toLowerCase() || '';
  const description = link.description?.toLowerCase() || '';
  const url = link.url?.toLowerCase() || '';
  
  return (
    title.includes(query) ||
    description.includes(query) ||
    url.includes(query)
  );
};

/**
 * Get search match context for analytics or debugging
 * @param {Object} link - Link object
 * @param {string} searchQuery - Search query string
 * @returns {Object} Match context information
 */
export const getMatchContext = (link, searchQuery) => {
  if (!searchQuery || !searchQuery.trim()) {
    return { matched: false };
  }

  const query = searchQuery.toLowerCase().trim();
  const title = link.title?.toLowerCase() || '';
  const description = link.description?.toLowerCase() || '';
  const url = link.url?.toLowerCase() || '';
  
  const matchedIn = [];
  
  if (title.includes(query)) matchedIn.push('title');
  if (description.includes(query)) matchedIn.push('description');
  if (url.includes(query)) matchedIn.push('url');
  
  return {
    matched: matchedIn.length > 0,
    matchedIn,
    query
  };
};