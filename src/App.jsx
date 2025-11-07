import './App.css';
import { lazy, Suspense, useMemo } from 'react';
import { useNetworkStatus } from './components/NoNetwork';
import { SkeletonLoader } from './components/SkeletonLoader';
import { LazyLoadComponent } from './components/LazyLoadComponent';
import ChatBot from './components/ChatBot';

// Lazy load components
const TopAnimatedLogo = lazy(() =>
  import('./components/TopAnimatedLogo').then((module) => ({
    default: module.TopAnimatedLogo,
  }))
);
const LandingPage = lazy(() =>
  import('./components/LandingPage').then((module) => ({
    default: module.LandingPage,
  }))
);
const NoNetwork = lazy(() =>
  import('./components/NoNetwork').then((module) => ({
    default: module.NoNetwork,
  }))
);
const NEP2020 = lazy(() =>
  import('./components/Nep').then((module) => ({ default: module.NEP2020 }))
);
const Navbar = lazy(() => import('./components/navbar'));
const Footer = lazy(() =>
  import('./components/Footer').then((module) => ({ default: module.Footer }))
);

function App() {
  const isOnline = useNetworkStatus();

  // Memoize offline screen to prevent re-renders
  const offlineScreen = useMemo(
    () => (
      <Suspense fallback={<SkeletonLoader />}>
        <NoNetwork />
      </Suspense>
    ),
    []
  );

  if (!isOnline) {
    return offlineScreen;
  }

  return (
    <div className="relative">
      {/* Fixed Top Logo Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <Suspense fallback={<div className="h-32" />}>
          <TopAnimatedLogo />
        </Suspense>
      </header>

      {/* Fixed Right Side Navbar */}
      <Suspense fallback={<div className="w-20" />}>
        <Navbar />
      </Suspense>

      {/* Main Content - Add right padding to account for navbar */}
      <main className="pt-40 pr-20">
        {/* Page 1: Landing Page */}
        <Suspense fallback={<SkeletonLoader />}>
          <LandingPage />
        </Suspense>

        {/* Page 2: NEP 2020 - Lazy load when in viewport */}
        <LazyLoadComponent fallback={<SkeletonLoader />}>
          <Suspense fallback={<SkeletonLoader />}>
            <NEP2020 />
          </Suspense>
        </LazyLoadComponent>
      </main>

      {/* Footer */}
      <Suspense fallback={<div className="h-64" />}>
        <Footer />
      </Suspense>

      {/* ChatBot - Always available */}
      <ChatBot />
    </div>
  );
}

export default App;
