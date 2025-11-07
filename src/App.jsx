import './App.css';
import { TopAnimatedLogo } from './components/TopAnimatedLogo';
import { LandingPage } from './components/LandingPage';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent block">
        <TopAnimatedLogo />
      </header>
      <main className="pt-40">
        <LandingPage />
      </main>
    </div>
  );
}

export default App;
