import { useState, useEffect, useCallback, memo } from 'react';
import logo from '/curriculaflex.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const TopAnimatedLogo = memo(function TopAnimatedLogo() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    // Bas smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div
      className={`p-2 transition-all duration-500 ease-in-out cursor-pointer ${
        isScrolled ? 'w-20' : 'w-60'
      }`}
      onClick={scrollToTop}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          scrollToTop();
        }
      }}
      aria-label="Scroll to top"
    >
      {!imageLoaded && (
        <div className="w-full h-32 bg-gray-200 animate-pulse rounded-lg"></div>
      )}
      <img
        src={logo}
        alt="CurriculaFlex Logo"
        className={`w-full h-auto transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageLoaded(true)}
      />
    </div>
  );
});
