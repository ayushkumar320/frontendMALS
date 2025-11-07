import './App.css';
import { TopAnimatedLogo } from './components/TopAnimatedLogo';
import { LandingPage } from './components/LandingPage';
import { NoNetwork, useNetworkStatus } from './components/NoNetwork';
import { NEP2020 } from './components/Nep';
import Navbar from './components/navbar';
import { Footer } from './components/Footer';

function App() {
  const isOnline = useNetworkStatus();

  if (!isOnline) {
    return <NoNetwork />;
  }

  return (
    <div className="relative">
      {/* Fixed Top Logo Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <TopAnimatedLogo />
      </header>

      {/* Fixed Right Side Navbar */}
      <Navbar />

      {/* Main Content - Add right padding to account for navbar */}
      <main className="pt-40 pr-20">
        {/* Page 1: Landing Page */}
        <LandingPage />

        {/* Page 2: NEP 2020 */}
        <NEP2020 />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
