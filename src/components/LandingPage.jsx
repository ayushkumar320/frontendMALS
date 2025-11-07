import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function LandingPage() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const sloganRef = useRef(null);
  const buttonsRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Typewriter effect for title
    const titleText = 'CurriculaFlex';
    const titleChars = titleText.split('');
    titleRef.current.innerHTML = titleChars
      .map(
        (char) =>
          `<span class="inline-block opacity-0">${char === ' ' ? '&nbsp;' : char}</span>`
      )
      .join('');

    gsap.to(titleRef.current.children, {
      opacity: 1,
      duration: 0.05,
      stagger: 0.05,
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Typewriter effect for subtitle
    const subtitleText = 'Not For Oneself But For All';
    const subtitleWords = subtitleText.split(' ');
    subtitleRef.current.innerHTML = subtitleWords
      .map((word) => `<span class="inline-block opacity-0 mr-3">${word}</span>`)
      .join('');

    gsap.to(subtitleRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      stagger: 0.1,
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Fade in and slide up for description
    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: descRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Typewriter for slogan
    const sloganText = 'Learn Your Pace';
    const sloganChars = sloganText.split('');
    sloganRef.current.innerHTML = sloganChars
      .map(
        (char) =>
          `<span class="inline-block opacity-0">${char === ' ' ? '&nbsp;' : char}</span>`
      )
      .join('');

    gsap.to(sloganRef.current.children, {
      opacity: 1,
      duration: 0.03,
      stagger: 0.03,
      scrollTrigger: {
        trigger: sloganRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    // Buttons animation
    gsap.fromTo(
      buttonsRef.current.children,
      { opacity: 0, scale: 0.8, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.15,
        scrollTrigger: {
          trigger: buttonsRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Cards parallax and rotation
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            rotation: index % 2 === 0 ? -15 : 15,
          },
          {
            opacity: 1,
            y: 0,
            rotation: index % 2 === 0 ? -6 : 6,
            duration: 1,
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Decorative Cards with GSAP animations */}

      {/* Empty Card (top left background) */}
      <div
        ref={(el) => (cardsRef.current[0] = el)}
        className="absolute top-8 right-[600px] w-56 h-72 transform z-0"
      >
        <div className="w-full h-full bg-white rounded-lg shadow-2xl border-8 border-white"></div>
      </div>

      {/* Support Us Card */}
      <div
        ref={(el) => (cardsRef.current[1] = el)}
        className="absolute top-16 right-96 w-48 h-32 transform z-0"
      >
        <div className="relative w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden border-8 border-white flex items-center justify-center">
          <span className="text-gray-600 text-lg font-semibold tracking-wider">
            SUPPORT US
          </span>
        </div>
      </div>

      {/* News Card - Woman at desk */}
      <div
        ref={(el) => (cardsRef.current[2] = el)}
        className="absolute top-32 right-72 w-64 h-64 transform z-10"
      >
        <div className="relative w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden border-8 border-white">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
            alt="News"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white p-2">
            <span className="text-gray-700 text-base font-semibold tracking-wider">
              NEWS
            </span>
          </div>
        </div>
      </div>

      {/* Library/Student Card */}
      <div
        ref={(el) => (cardsRef.current[3] = el)}
        className="absolute top-80 right-80 w-72 h-80 transform z-5"
      >
        <div className="relative w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden border-8 border-white">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=500&fit=crop"
            alt="Library"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Empty Card (bottom left) */}
      <div
        ref={(el) => (cardsRef.current[4] = el)}
        className="absolute bottom-32 right-[550px] w-60 h-80 transform z-0"
      >
        <div className="w-full h-full bg-white rounded-lg shadow-2xl border-8 border-white"></div>
      </div>

      {/* Empty Card (far right) */}
      <div
        ref={(el) => (cardsRef.current[5] = el)}
        className="absolute top-64 right-20 w-52 h-64 transform z-0"
      >
        <div className="w-full h-full bg-white rounded-lg shadow-2xl border-8 border-white"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-50 container mx-auto px-8 py-20 mt-8">
        <div className="max-w-3xl">
          <h1
            ref={titleRef}
            className="text-6xl font-serif mb-4 text-gray-900"
          ></h1>

          <h2
            ref={subtitleRef}
            className="text-5xl md:text-6xl font-serif mb-12 leading-tight text-gray-900"
          ></h2>

          <p ref={descRef} className="text-xl text-gray-700 mb-8 max-w-2xl">
            <span className="font-semibold">CurriculaFlex</span> is a
            comprehensive platform designed to help students learn at their own
            pace with flexible, personalized curriculum.
          </p>

          <p
            ref={sloganRef}
            className="text-2xl font-semibold text-gray-800 mb-8 italic"
          ></p>

          <div ref={buttonsRef} className="flex gap-4 flex-wrap">
            <button className="px-6 py-3 border-2 border-yellow-500 text-yellow-600 font-semibold hover:bg-yellow-500 hover:text-white transition-colors duration-300">
              WELCOME TO CURRICULAFLEX
            </button>
            <button className="px-6 py-3 border-2 border-yellow-500 text-yellow-600 font-semibold hover:bg-yellow-500 hover:text-white transition-colors duration-300">
              LATEST NEWS
            </button>
            <button className="px-6 py-3 border-2 border-yellow-500 text-yellow-600 font-semibold hover:bg-yellow-500 hover:text-white transition-colors duration-300">
              GET STARTED
            </button>
          </div>
        </div>
      </div>

      {/* Yellow Diagonal Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-r from-yellow-400 to-yellow-600 transform -skew-y-2 origin-bottom-left"></div>
    </section>
  );
}
