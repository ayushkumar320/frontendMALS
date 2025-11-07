import { useState, useRef, useEffect, useCallback, memo } from 'react';

const Navbar = memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Remove all highlights
  const removeHighlights = () => {
    const highlights = document.querySelectorAll('.search-highlight');
    highlights.forEach((highlight) => {
      const parent = highlight.parentNode;
      if (parent) {
        parent.replaceChild(
          document.createTextNode(highlight.textContent),
          highlight
        );
        parent.normalize();
      }
    });
  };

  // Highlight matching words on the page
  const highlightWords = (query) => {
    removeHighlights();

    if (!query.trim()) {
      return null;
    }

    const searchText = query.toLowerCase();
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    const nodesToProcess = [];
    let node;
    while ((node = walker.nextNode())) {
      // Exclude search input, navbar, and header elements
      if (
        node.parentElement &&
        !node.parentElement.closest('nav') &&
        !node.parentElement.closest('header') &&
        !node.parentElement.closest('.search-popup') &&
        !node.parentElement.classList.contains('search-highlight')
      ) {
        nodesToProcess.push(node);
      }
    }

    let firstHighlight = null;

    nodesToProcess.forEach((textNode) => {
      const text = textNode.textContent;
      const lowerText = text.toLowerCase();

      if (lowerText.includes(searchText)) {
        const fragment = document.createDocumentFragment();
        let lastIndex = 0;
        const regex = new RegExp(
          `(${searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`,
          'gi'
        );

        let match;
        while ((match = regex.exec(text)) !== null) {
          // Add text before match
          if (match.index > lastIndex) {
            fragment.appendChild(
              document.createTextNode(text.substring(lastIndex, match.index))
            );
          }

          // Add highlighted span
          const highlight = document.createElement('span');
          highlight.className =
            'search-highlight bg-yellow-300 text-gray-900 px-0.5 rounded';
          highlight.textContent = text.substring(
            match.index,
            match.index + match[0].length
          );
          fragment.appendChild(highlight);

          // Store the first highlight for scrolling
          if (!firstHighlight) {
            firstHighlight = highlight;
          }

          lastIndex = match.index + match[0].length;
        }

        // Add remaining text
        if (lastIndex < text.length) {
          fragment.appendChild(
            document.createTextNode(text.substring(lastIndex))
          );
        }

        if (fragment.childNodes.length > 0) {
          textNode.parentNode.replaceChild(fragment, textNode);
        }
      }
    });

    // Scroll to first highlight after DOM updates
    if (firstHighlight) {
      setTimeout(() => {
        // Query the DOM to get the actual highlighted element
        const firstHighlightElement =
          document.querySelector('.search-highlight');
        if (firstHighlightElement) {
          firstHighlightElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }, 150);
    }

    return firstHighlight;
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    highlightWords(query);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsSearchOpen(false);
      setSearchQuery('');
      removeHighlights();
    }
  };

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Clean up highlights when search closes
  useEffect(() => {
    if (!isSearchOpen) {
      removeHighlights();
    }
  }, [isSearchOpen]);

  const handleMenuItemClick = (item) => {
    if (item === 'Home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      setIsOpen(false); // Close the menu after clicking
    } else if (item === 'About us') {
      window.open(
        'https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf',
        '_blank'
      );
    } else if (item === 'Information') {
      const nepSection = document.getElementById('nep2020');
      if (nepSection) {
        nepSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setIsOpen(false); // Close the menu after clicking
    } else if (item === 'Contact us') {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
      setIsOpen(false); // Close the menu after clicking
    }
  };

  const menuItems = [
    'Home',
    'Register College',
    'Student Login',
    'Teacher Login',
    'Information',
    'About us',
    'Contact us',
  ];

  return (
    <>
      {/* Container for both black menu and yellow bar - 30% when open */}
      <div
        className={`fixed right-0 top-0 h-full z-100 transition-all duration-500 ease-in-out ${
          isOpen ? 'w-[30%]' : 'w-20'
        }`}
      >
        {/* Black menu area - slides in from left when open */}
        <div
          className={`absolute left-0 top-0 h-full bg-black transition-all duration-700 ease-in-out ${
            isOpen
              ? 'w-[calc(100%-80px)] opacity-100 translate-x-0'
              : 'w-0 opacity-0 -translate-x-full'
          } overflow-hidden`}
        >
          {/* Navigation Links */}
          <div className="pt-20 pl-8 min-w-[200px]">
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`transition-all duration-500 ease-out ${
                    isOpen
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-8'
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${700 + index * 100}ms` : '0ms',
                  }}
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick(item);
                    }}
                    className="text-yellow-400 hover:text-yellow-300 transition-colors text-lg font-medium whitespace-nowrap cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Yellow sidebar - always fixed on right */}
        <div className="absolute right-0 top-0 h-full w-20 bg-yellow-400 z-10">
          {/* Menu Icon and Text Section */}
          <div className="flex flex-col items-center pt-8">
            <button
              onClick={toggleMenu}
              className="flex flex-col items-center justify-center w-12 h-12 transition-all duration-300 cursor-pointer"
              aria-label="Toggle menu"
            >
              {/* Hamburger to X transition */}
              <div className="relative w-8 h-6">
                <span
                  className={`absolute left-0 top-0 w-full h-0.5 bg-black transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'
                  }`}
                />
                <span
                  className={`absolute left-0 top-2.5 w-full h-0.5 bg-black transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 top-5 w-full h-0.5 bg-black transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-0'
                  }`}
                />
              </div>
            </button>
            <span className="text-black font-bold uppercase mt-2 text-sm tracking-wide">
              MENU
            </span>
          </div>

          {/* Bottom Icons */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col gap-6">
            <button
              onClick={() => handleMenuItemClick('Home')}
              className="text-black hover:opacity-70 transition-opacity cursor-pointer"
              aria-label="Home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </button>
            <button
              onClick={() => handleMenuItemClick('About us')}
              className="text-black hover:opacity-70 transition-opacity cursor-pointer"
              aria-label="Information"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-black hover:opacity-70 transition-opacity cursor-pointer"
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Small Search Popup - Top Right */}
      {isSearchOpen && (
        <div className="fixed top-4 right-4 z-200 search-popup">
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-3 w-64">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleSearchKeyDown}
                placeholder="Search page..."
                className="flex-1 outline-none text-sm text-gray-800 placeholder-gray-400"
              />
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                  removeHighlights();
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors shrink-0"
                aria-label="Close search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {searchQuery && (
              <div className="mt-2 text-xs text-gray-500">
                Press Esc to close
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
});

export default Navbar;
