import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    "Wilson's School",
    'Admissions',
    'Curriculum',
    'Pastoral',
    'Information',
    'Development',
    'Contact',
  ];

  return (
    <>
      {/* Container for both black menu and yellow bar - 30% when open */}
      <div
        className={`fixed right-0 top-0 h-full z-[100] transition-all duration-500 ease-in-out ${
          isOpen ? 'w-[30%]' : 'w-20'
        }`}
      >
        {/* Black menu area - slides in from left when open */}
        <div
          className={`absolute left-0 top-0 h-full bg-black transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isOpen
              ? 'w-[calc(100%-80px)] opacity-100 translate-x-0'
              : 'w-0 opacity-0 -translate-x-full'
          } overflow-hidden`}
        >
          {/* Navigation Links */}
          <div className="pt-20 pl-8 min-w-[200px]">
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors text-lg font-medium whitespace-nowrap"
                  >
                    <span>{item}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
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
                    isOpen
                      ? 'rotate-45 translate-y-2.5'
                      : 'translate-y-0'
                  }`}
                />
                <span
                  className={`absolute left-0 top-2.5 w-full h-0.5 bg-black transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 top-5 w-full h-0.5 bg-black transition-all duration-300 ${
                    isOpen
                      ? '-rotate-45 -translate-y-2.5'
                      : 'translate-y-0'
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
              onClick={() => setIsOpen(true)}
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
              onClick={() => setIsOpen(true)}
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
              onClick={() => setIsOpen(true)}
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
    </>
  );
}

export default Navbar;
