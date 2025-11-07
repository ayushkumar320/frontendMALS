import './App.css';
import { TopAnimatedLogo } from './components/TopAnimatedLogo';
import { LandingPage } from './components/LandingPage';
import { NoNetwork, useNetworkStatus } from './components/NoNetwork';

function App() {
  const isOnline = useNetworkStatus();

  if (!isOnline) {
    return <NoNetwork />;
  }

  return (
    <div>
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
