import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function NEP2020() {
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const whatIsNEPTitleRef = useRef(null);
  const whatIsNEPDescRef = useRef(null);
  const keyFeaturesTitleRef = useRef(null);
  const benefitsTitleRef = useRef(null);
  const ctaTitleRef = useRef(null);
  const statsRefs = useRef([]);
  const featureRefs = useRef([]);
  const benefitRefs = useRef([]);

  useEffect(() => {
    // Hero title typewriter animation
    const heroTitle = 'National Education Policy';
    const heroTitleWords = heroTitle.split(' ');
    heroTitleRef.current.innerHTML = heroTitleWords
      .map((word) => `<span class="inline-block opacity-0 mr-3">${word}</span>`)
      .join('');

    gsap.to(heroTitleRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: heroTitleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Hero subtitle typewriter
    const heroSubtitle =
      'Making education flexible, accessible, and transformative for every college student';
    const heroSubWords = heroSubtitle.split(' ');
    heroSubtitleRef.current.innerHTML = heroSubWords
      .map((word) => `<span class="inline-block opacity-0 mr-2">${word}</span>`)
      .join('');

    gsap.to(heroSubtitleRef.current.children, {
      opacity: 1,
      duration: 0.2,
      stagger: 0.05,
      scrollTrigger: {
        trigger: heroSubtitleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // "What is NEP 2020?" title typewriter
    const whatTitle = 'What is NEP 2020?';
    const whatTitleChars = whatTitle.split('');
    whatIsNEPTitleRef.current.innerHTML = whatTitleChars
      .map(
        (char) =>
          `<span class="inline-block opacity-0">${char === ' ' ? '&nbsp;' : char}</span>`
      )
      .join('');

    gsap.to(whatIsNEPTitleRef.current.children, {
      opacity: 1,
      duration: 0.03,
      stagger: 0.03,
      scrollTrigger: {
        trigger: whatIsNEPTitleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // What is NEP description fade in
    gsap.fromTo(
      whatIsNEPDescRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: whatIsNEPDescRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Stats cards animation
    statsRefs.current.forEach((stat, index) => {
      if (stat) {
        gsap.fromTo(
          stat,
          { opacity: 0, scale: 0.8, y: 50 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: stat,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    // "Key Features" title typewriter
    const featuresTitle = 'Key Features for Students';
    const featuresTitleChars = featuresTitle.split('');
    keyFeaturesTitleRef.current.innerHTML = featuresTitleChars
      .map(
        (char) =>
          `<span class="inline-block opacity-0">${char === ' ' ? '&nbsp;' : char}</span>`
      )
      .join('');

    gsap.to(keyFeaturesTitleRef.current.children, {
      opacity: 1,
      duration: 0.02,
      stagger: 0.02,
      scrollTrigger: {
        trigger: keyFeaturesTitleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Feature cards staggered animation
    featureRefs.current.forEach((feature, index) => {
      if (feature) {
        gsap.fromTo(
          feature,
          { opacity: 0, y: 60, rotationX: -15 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            delay: index * 0.15,
            scrollTrigger: {
              trigger: feature,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    // "Why It Matters to You" title typewriter
    const benefitsTitle = 'Why It Matters to You';
    const benefitsTitleChars = benefitsTitle.split('');
    benefitsTitleRef.current.innerHTML = benefitsTitleChars
      .map(
        (char) =>
          `<span class="inline-block opacity-0">${char === ' ' ? '&nbsp;' : char}</span>`
      )
      .join('');

    gsap.to(benefitsTitleRef.current.children, {
      opacity: 1,
      duration: 0.03,
      stagger: 0.03,
      scrollTrigger: {
        trigger: benefitsTitleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Benefits list items animation
    benefitRefs.current.forEach((benefit, index) => {
      if (benefit) {
        gsap.fromTo(
          benefit,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: benefit,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    // CTA title typewriter
    const ctaTitle = 'Ready to Learn Your Way?';
    const ctaTitleWords = ctaTitle.split(' ');
    ctaTitleRef.current.innerHTML = ctaTitleWords
      .map((word) => `<span class="inline-block opacity-0 mr-3">${word}</span>`)
      .join('');

    gsap.to(ctaTitleRef.current.children, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ctaTitleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  const features = [
    {
      title: 'Flexible Learning Pathways',
      description:
        'Multiple entry and exit points allowing students to take breaks and re-enter education at their convenience.',
      icon: '🎓',
    },
    {
      title: 'Multidisciplinary Education',
      description:
        'Freedom to choose subjects across streams, promoting holistic development and diverse skill acquisition.',
      icon: '📚',
    },
    {
      title: 'Credit-Based System',
      description:
        'Academic Bank of Credits (ABC) enables credit transfer and accumulation across institutions.',
      icon: '💳',
    },
    {
      title: 'Skill Development',
      description:
        'Integration of vocational education with higher education for industry-ready graduates.',
      icon: '🛠️',
    },
    {
      title: 'Research & Innovation',
      description:
        'Emphasis on research at all levels with dedicated funding and infrastructure support.',
      icon: '🔬',
    },
    {
      title: 'Technology Integration',
      description:
        'Digital learning platforms and online resources for accessible education nationwide.',
      icon: '💻',
    },
  ];

  const benefits = [
    'Learn at your own pace with flexible timelines',
    'Explore multiple disciplines before specialization',
    'Earn while you learn with internship credits',
    'Seamless credit transfer between institutions',
    'Global recognition with international standards',
    'Practical skills alongside theoretical knowledge',
  ];

  return (
    <div id="nep2020" className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-yellow-50 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-300 rounded-full opacity-10 blur-3xl"></div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-yellow-400 text-white rounded-full text-sm font-semibold">
              India's Educational Revolution
            </div>
            <h1
              ref={heroTitleRef}
              className="text-6xl md:text-7xl font-serif font-bold text-gray-900 mb-6"
            ></h1>
            <div className="text-6xl md:text-7xl font-serif font-bold text-yellow-500 mb-6">
              2020
            </div>
            <p
              ref={heroSubtitleRef}
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
            ></p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="#benefits"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('benefits')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Explore Benefits
              </a>
              <a
                href="https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-yellow-500 text-yellow-600 font-semibold rounded-lg hover:bg-yellow-50 transition-all duration-300 inline-block"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* What is NEP Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2
              ref={whatIsNEPTitleRef}
              className="text-5xl font-serif font-bold text-gray-900 mb-6"
            ></h2>
            <p
              ref={whatIsNEPDescRef}
              className="text-lg text-gray-600 leading-relaxed"
            >
              The National Education Policy 2020 is a comprehensive framework
              that reimagines India's education system. It introduces a
              flexible, multidisciplinary approach to higher education,
              empowering students to customize their learning journey and
              develop skills for the 21st century.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div
              ref={(el) => (statsRefs.current[0] = el)}
              className="text-center p-8 bg-yellow-50 rounded-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer hover:shadow-xl"
              style={{ perspective: '1000px' }}
            >
              <div
                className="transition-transform duration-500 hover:rotate-y-6 hover:rotate-x-3"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="text-5xl font-bold text-yellow-500 mb-2">4</div>
                <p className="text-gray-700 font-semibold">
                  Year Degree Programs
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  With multiple exit options
                </p>
              </div>
            </div>
            <div
              ref={(el) => (statsRefs.current[1] = el)}
              className="text-center p-8 bg-yellow-50 rounded-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer hover:shadow-xl"
              style={{ perspective: '1000px' }}
            >
              <div
                className="transition-transform duration-500 hover:rotate-y-6 hover:rotate-x-3"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="text-5xl font-bold text-yellow-500 mb-2">
                  50%
                </div>
                <p className="text-gray-700 font-semibold">Gross Enrollment</p>
                <p className="text-sm text-gray-600 mt-2">Target by 2035</p>
              </div>
            </div>
            <div
              ref={(el) => (statsRefs.current[2] = el)}
              className="text-center p-8 bg-yellow-50 rounded-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer hover:shadow-xl"
              style={{ perspective: '1000px' }}
            >
              <div
                className="transition-transform duration-500 hover:rotate-y-6 hover:rotate-x-3"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="text-5xl font-bold text-yellow-500 mb-2">
                  100+
                </div>
                <p className="text-gray-700 font-semibold">
                  Course Combinations
                </p>
                <p className="text-sm text-gray-600 mt-2">Across disciplines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              ref={keyFeaturesTitleRef}
              className="text-5xl font-serif font-bold text-gray-900 mb-4"
            ></h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how NEP 2020 transforms your educational experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => (featureRefs.current[index] = el)}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                <div
                  className="transition-transform duration-500 hover:rotate-y-6 hover:rotate-x-3"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2
                  ref={benefitsTitleRef}
                  className="text-5xl font-serif font-bold text-gray-900 mb-6"
                ></h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  NEP 2020 puts you in control of your education. With
                  unprecedented flexibility and opportunities, you can shape
                  your academic journey to match your career aspirations and
                  personal interests.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li
                      key={index}
                      ref={(el) => (benefitRefs.current[index] = el)}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="text-yellow-500 text-2xl shrink-0">
                        ✓
                      </span>
                      <span className="text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="bg-linear-to-br from-yellow-400 to-yellow-500 p-8 rounded-3xl shadow-2xl text-white">
                  <h3 className="text-3xl font-bold mb-6">
                    The 4-Year Degree Structure
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                      <div className="text-2xl font-bold mb-2">Year 1</div>
                      <p className="text-sm">Certificate - Exit Option</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                      <div className="text-2xl font-bold mb-2">Year 2</div>
                      <p className="text-sm">Diploma - Exit Option</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                      <div className="text-2xl font-bold mb-2">Year 3</div>
                      <p className="text-sm">Bachelor's Degree - Exit Option</p>
                    </div>
                    <div className="bg-white/30 backdrop-blur-sm p-6 rounded-xl border-2 border-white">
                      <div className="text-2xl font-bold mb-2">Year 4</div>
                      <p className="text-sm">
                        Bachelor's with Honours/Research
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2
              ref={ctaTitleRef}
              className="text-5xl font-serif font-bold mb-6"
            ></h2>
            <p className="text-xl mb-8 opacity-90">
              Join CurriculaFlex and experience the freedom of NEP 2020's
              flexible education system
            </p>
            <button className="px-10 py-4 bg-white text-yellow-500 font-bold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg mb-2">CurriculaFlex</p>
          <p className="text-gray-400">Learn Your Pace</p>
        </div>
      </footer>
    </div>
  );
}
