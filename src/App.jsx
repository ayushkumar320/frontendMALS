import './App.css';
import { TopAnimatedLogo } from './components/TopAnimatedLogo';
import { LandingPage } from './components/LandingPage';
import Navbar from './components/navbar';
import { SkeletonLoader } from './components/SkeletonLoader';

function App() {
  return (
    <div>
      {/* Show skeleton while loading */}
      <SkeletonLoader layout="landing" />

      {/* Uncomment below when ready to show actual page */}
      {/* <header className="fixed top-0 left-0 right-0 z-50 bg-transparent block">
        <TopAnimatedLogo />
      </header>
      <main className="pt-40">
        <LandingPage />
      </main> */}
    </div>
  );
}

export default App;
