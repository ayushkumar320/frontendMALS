export function LandingPage() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Decorative Cards in Background - Right Side */}

      {/* Empty Card (top left background) */}
      <div className="absolute top-8 right-[600px] w-56 h-72 transform -rotate-6 z-0">
        <div className="w-full h-full bg-white rounded-lg shadow-2xl border-8 border-white"></div>
      </div>

      {/* Support Us Card - Small label card at top */}
      <div className="absolute top-16 right-96 w-48 h-32 transform rotate-12 z-0">
        <div className="relative w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden border-8 border-white flex items-center justify-center">
          <span className="text-gray-600 text-lg font-semibold tracking-wider">
            SUPPORT US
          </span>
        </div>
      </div>

      {/* News Card - Woman at desk */}
      <div className="absolute top-32 right-72 w-64 h-64 transform rotate-6 z-10">
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

      {/* Library/Student Card - Bottom */}
      <div className="absolute top-80 right-80 w-72 h-80 transform -rotate-3 z-5">
        <div className="relative w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden border-8 border-white">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=500&fit=crop"
            alt="Library"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Empty Card (bottom left) */}
      <div className="absolute bottom-32 right-[550px] w-60 h-80 transform rotate-3 z-0">
        <div className="w-full h-full bg-white rounded-lg shadow-2xl border-8 border-white"></div>
      </div>

      {/* Empty Card (far right) */}
      <div className="absolute top-64 right-20 w-52 h-64 transform -rotate-12 z-0">
        <div className="w-full h-full bg-white rounded-lg shadow-2xl border-8 border-white"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-serif mb-4">CurriculaFlex</h1>

          <h2 className="text-5xl md:text-6xl font-serif mb-12 leading-tight">
            Not For Oneself But For All
          </h2>

          <p className="text-xl text-gray-700 mb-8 max-w-2xl">
            <span className="font-semibold">CurriculaFlex</span> is a
            comprehensive platform designed to help students learn at their own
            pace with flexible, personalized curriculum.
          </p>

          <p className="text-2xl font-semibold text-gray-800 mb-8 italic">
            Learn Your Pace
          </p>

          <div className="flex gap-4 flex-wrap">
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
