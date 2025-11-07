import { memo, useMemo } from 'react';

export const Footer = memo(function Footer() {
  const teamMembers = useMemo(
    () => [
      {
        name: 'Member 1',
        email: 'member1@example.com',
        github: 'https://github.com/member1',
        linkedin: 'https://linkedin.com/in/member1',
      },
      {
        name: 'Member 2',
        email: 'member2@example.com',
        github: 'https://github.com/member2',
        linkedin: 'https://linkedin.com/in/member2',
      },
      {
        name: 'Member 3',
        email: 'member3@example.com',
        github: 'https://github.com/member3',
        linkedin: 'https://linkedin.com/in/member3',
      },
      {
        name: 'Member 4',
        email: 'member4@example.com',
        github: 'https://github.com/member4',
        linkedin: 'https://linkedin.com/in/member4',
      },
    ],
    []
  );

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              CurriculaFlex
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Transforming education with flexible, accessible, and personalized
              learning experiences for every student.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/ayushkumar320/frontendMALS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#nep2020"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById('nep2020')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  NEP 2020
                </a>
              </li>
              <li>
                <a
                  href="https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/ayushkumar320/frontendMALS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-yellow-400 mb-4">
              Contact Us
            </h3>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-1 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@curriculaflex.com"
                  className="hover:text-yellow-400 transition-colors"
                >
                  info@curriculaflex.com
                </a>
              </p>
              <p className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-1 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>India</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} CurriculaFlex. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
            <p className="text-gray-400 text-sm">Made with ❤️ in India</p>
          </div>
        </div>
      </div>
    </footer>
  );
});
