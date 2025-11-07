export function LandingPage() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Decorative Cards in Background */}
      {/* Support Us Card */}
      <div className="absolute top-20 right-10 w-72 h-96 transform rotate-12 z-0">
        <div className="relative w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-white">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=600&fit=crop" 
            alt="Support Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-3">
            <span className="text-gray-700 text-xl font-semibold tracking-wider">SUPPORT US</span>
          </div>
        </div>
      </div>

      {/* News Card */}
      <div className="absolute top-32 right-40 w-64 h-80 transform rotate-6 z-0">
        <div className="relative w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-white">
          <img 
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=600&fit=crop" 
            alt="News" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-3">
            <span className="text-gray-700 text-xl font-semibold tracking-wider">NEWS</span>
          </div>
        </div>
      </div>

      {/* Empty Card (top right) */}
      <div className="absolute top-10 right-96 w-56 h-72 transform rotate-3 z-0">
        <div className="w-full h-full bg-white rounded-lg shadow-2xl border-4 border-white"></div>
      </div>

      {/* Curriculum Card */}
      <div className="absolute bottom-32 right-20 w-80 h-96 transform -rotate-6 z-0">
        <div className="relative w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-white">
          <img 
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=600&fit=crop" 
            alt="Curriculum" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-3">
            <span className="text-gray-700 text-xl font-semibold tracking-wider">CURRICULUM</span>
          </div>
        </div>
      </div>

      {/* Empty Card (bottom right) */}
      <div className="absolute bottom-20 right-96 w-64 h-80 transform -rotate-3 z-0">
        <div className="w-full h-full bg-white rounded-lg shadow-2xl border-4 border-white"></div>
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
            comprehensive platform designed to help students learn at
            their own pace with flexible, personalized curriculum.
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-r from-yellow-400 to-yellow-600 transform -skew-y-2 origin-bottom-left"></div>
    </section>
  );
}
