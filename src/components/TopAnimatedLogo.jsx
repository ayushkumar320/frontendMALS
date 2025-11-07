import { useState, useEffect } from 'react';
import logo from '/curriculaflex.jpg';

export function TopAnimatedLogo() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div
      className={`p-2 transition-all duration-500 ease-in-out ${
        isScrolled ? 'w-20' : 'w-60'
      }`}
    >
      <img src={logo} alt="" className="w-full h-auto" />
    </div>
  );
}
