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
  const floatingElementsRef = useRef([]);

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

    // Floating elements continuous animation
    floatingElementsRef.current.forEach((element, index) => {
      if (element) {
        gsap.to(element, {
          y: '+=30',
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-linear-to-br from-gray-50 via-white to-yellow-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large decorative circles */}
        <div
          ref={(el) => (floatingElementsRef.current[0] = el)}
          className="absolute top-20 left-10 w-64 h-64 bg-yellow-200 rounded-full opacity-20 blur-3xl"
        ></div>
        <div
          ref={(el) => (floatingElementsRef.current[1] = el)}
          className="absolute top-40 left-1/4 w-96 h-96 bg-blue-200 rounded-full opacity-10 blur-3xl"
        ></div>
        <div
          ref={(el) => (floatingElementsRef.current[2] = el)}
          className="absolute bottom-40 left-1/3 w-80 h-80 bg-yellow-300 rounded-full opacity-15 blur-3xl"
        ></div>

        {/* Decorative dots pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 60}%`,
                opacity: Math.random() * 0.5,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-600 z-0"></div>

      {/* Decorative Cards with GSAP animations - MORE CARDS FOR FULLER LOOK */}

      {/* Top row cards */}
      <div
        ref={(el) => (cardsRef.current[0] = el)}
        className="absolute top-8 right-[650px] w-56 h-72 transform z-0 transition-all duration-500"
        style={{ perspective: '1000px' }}
      >
        <div
          className="w-full h-full bg-white rounded-lg shadow-2xl border-8 border-white backdrop-blur-sm bg-opacity-90 transition-transform duration-500"
          style={{ transformStyle: 'preserve-3d' }}
        ></div>
      </div>

      <div
        ref={(el) => (cardsRef.current[1] = el)}
        className="absolute top-16 right-96 w-48 h-32 transform z-10 cursor-pointer transition-all duration-500 hover:scale-105"
        style={{ perspective: '1000px' }}
      >
        <div
          className="relative w-full h-full bg-yellow-400 rounded-lg shadow-2xl overflow-hidden border-8 border-white flex items-center justify-center transition-transform duration-500 hover:rotate-y-12 hover:rotate-x-5"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <span className="text-white text-lg font-bold tracking-wider">
            SUPPORT US
          </span>
        </div>
      </div>

      {/* News Card - Woman at desk */}
      <div
        ref={(el) => (cardsRef.current[2] = el)}
        className="absolute top-32 right-72 w-64 h-64 transform z-20 cursor-pointer transition-all duration-500 hover:scale-105"
        style={{ perspective: '1000px' }}
      >
        <div
          className="relative w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden border-8 border-white transition-transform duration-500 hover:rotate-y-12 hover:rotate-x-5"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
            alt="News"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 p-2">
            <span className="text-white text-base font-bold tracking-wider">
              NEWS
            </span>
          </div>
        </div>
      </div>

      {/* Additional small accent card */}
      <div
        ref={(el) => (cardsRef.current[3] = el)}
        className="absolute top-24 right-[500px] w-40 h-40 transform z-5 cursor-pointer transition-all duration-500 hover:scale-105"
        style={{ perspective: '1000px' }}
      >
        <div
          className="relative w-full h-full bg-linear-to-br from-yellow-300 to-yellow-500 rounded-lg shadow-xl border-4 border-white flex items-center justify-center transition-transform duration-500 hover:rotate-y-12 hover:rotate-x-5"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="text-white text-center">
            <div className="text-3xl font-bold">2024</div>
            <div className="text-xs">LEARN</div>
          </div>
        </div>
      </div>

      {/* Library/Student Card */}
      <div
        ref={(el) => (cardsRef.current[4] = el)}
        className="absolute top-80 right-80 w-72 h-80 transform z-15 cursor-pointer transition-all duration-500 hover:scale-105"
        style={{ perspective: '1000px' }}
      >
        <div
          className="relative w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden border-8 border-white transition-transform duration-500 hover:rotate-y-12 hover:rotate-x-5"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=500&fit=crop"
            alt="Library"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Empty Card (bottom left) */}
      <div
        ref={(el) => (cardsRef.current[5] = el)}
        className="absolute bottom-32 right-[550px] w-60 h-80 transform z-5 transition-all duration-500"
        style={{ perspective: '1000px' }}
      >
        <div
          className="w-full h-full bg-linear-to-br from-white to-gray-100 rounded-lg shadow-2xl border-8 border-white transition-transform duration-500"
          style={{ transformStyle: 'preserve-3d' }}
        ></div>
      </div>

      {/* Empty Card (far right) */}
      <div
        ref={(el) => (cardsRef.current[6] = el)}
        className="absolute top-64 right-20 w-52 h-64 transform z-5 transition-all duration-500"
        style={{ perspective: '1000px' }}
      >
        <div
          className="w-full h-full bg-white rounded-lg shadow-2xl border-8 border-white transition-transform duration-500"
          style={{ transformStyle: 'preserve-3d' }}
        ></div>
      </div>

      {/* Additional decorative card - bottom right corner */}
      <div
        ref={(el) => (cardsRef.current[7] = el)}
        className="absolute bottom-48 right-32 w-48 h-48 transform z-10 cursor-pointer transition-all duration-500 hover:scale-105"
        style={{ perspective: '1000px' }}
      >
        <div
          className="relative w-full h-full bg-linear-to-tr from-blue-400 to-blue-600 rounded-lg shadow-xl border-6 border-white flex items-center justify-center transition-transform duration-500 hover:rotate-y-12 hover:rotate-x-5"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="text-white text-center">
            <div className="text-4xl mb-2">📚</div>
            <div className="text-sm font-semibold">RESOURCES</div>
          </div>
        </div>
      </div>

      {/* Stats badge */}
      <div
        ref={(el) => (cardsRef.current[8] = el)}
        className="absolute top-56 right-[450px] w-44 h-44 transform z-15 cursor-pointer transition-all duration-500 hover:scale-105"
        style={{ perspective: '1000px' }}
      >
        <div
          className="relative w-full h-full bg-white rounded-full shadow-xl border-6 border-yellow-400 flex items-center justify-center transition-transform duration-500 hover:rotate-y-12 hover:rotate-x-5"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="text-center">
            <div className="text-yellow-600 text-3xl font-bold">10K+</div>
            <div className="text-gray-600 text-xs font-semibold mt-1">
              Students
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-50 container mx-auto px-8 py-20 mt-8">
        <div className="max-w-3xl">
          {/* Small badge above title */}
          <div className="inline-block mb-4 px-4 py-2 bg-yellow-400 text-white rounded-full text-sm font-semibold shadow-lg">
            🎓 Transforming Education
          </div>

          <h1
            ref={titleRef}
            className="text-7xl font-serif mb-6 text-gray-900 drop-shadow-sm"
          ></h1>

          <h2
            ref={subtitleRef}
            className="text-5xl md:text-6xl font-serif mb-8 leading-tight text-gray-800"
          ></h2>

          {/* Decorative line */}
          <div className="w-32 h-1 bg-linear-to-r from-yellow-400 to-yellow-600 mb-8 rounded-full"></div>

          <p
            ref={descRef}
            className="text-xl text-gray-700 mb-6 max-w-2xl leading-relaxed"
          >
            <span className="font-bold text-yellow-600">CurriculaFlex</span> is
            a comprehensive platform designed to help students learn at their
            own pace with flexible, personalized curriculum.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl">
            <div
              className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md border-2 border-yellow-200 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl"
              style={{ perspective: '1000px' }}
            >
              <div
                className="transition-transform duration-500 hover:rotate-y-6 hover:rotate-x-3"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-sm font-semibold text-gray-800">
                  Fast Learning
                </div>
              </div>
            </div>
            <div
              className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md border-2 border-yellow-200 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl"
              style={{ perspective: '1000px' }}
            >
              <div
                className="transition-transform duration-500 hover:rotate-y-6 hover:rotate-x-3"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="text-2xl mb-2">🎯</div>
                <div className="text-sm font-semibold text-gray-800">
                  Personalized
                </div>
              </div>
            </div>
            <div
              className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md border-2 border-yellow-200 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl"
              style={{ perspective: '1000px' }}
            >
              <div
                className="transition-transform duration-500 hover:rotate-y-6 hover:rotate-x-3"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="text-2xl mb-2">🏆</div>
                <div className="text-sm font-semibold text-gray-800">
                  Certified
                </div>
              </div>
            </div>
          </div>

          <p
            ref={sloganRef}
            className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-yellow-600 to-yellow-400 mb-8 italic"
          ></p>

          <div ref={buttonsRef} className="flex gap-4 flex-wrap">
            <button className="px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              WELCOME TO CURRICULAFLEX
            </button>
            <button className="px-8 py-4 border-2 border-yellow-500 text-yellow-600 font-bold rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300 shadow-md">
              LATEST NEWS
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-yellow-500 hover:text-yellow-600 transition-all duration-300">
              GET STARTED
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Yellow Diagonal Bottom Section with pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-600 transform -skew-y-2 origin-bottom-left shadow-2xl">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
