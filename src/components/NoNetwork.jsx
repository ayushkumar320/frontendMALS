import { useEffect, useState, memo } from 'react';

export const NoNetwork = memo(function NoNetwork() {
  return (
    <div className="fixed inset-0 bg-linear-to-br from-gray-50 to-gray-100 z-999 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Network Icon */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto bg-red-100 rounded-full flex items-center justify-center animate-pulse">
            <svg
              className="w-16 h-16 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
              />
            </svg>
          </div>
          {/* Animated circles */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-40 h-40 border-4 border-red-200 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>

        {/* Error Message */}
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          No Internet Connection
        </h2>

        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Oops! It looks like you're offline. Please check your internet
          connection and try again.
        </p>

        {/* Tips Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Try these steps:
          </h3>
          <ul className="text-left space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-yellow-500 mt-1">•</span>
              <span>Check your WiFi or mobile data connection</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500 mt-1">•</span>
              <span>Turn airplane mode off</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500 mt-1">•</span>
              <span>Restart your router</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500 mt-1">•</span>
              <span>Check if other websites are working</span>
            </li>
          </ul>
        </div>

        {/* Retry Button */}
        <button
          onClick={() => window.location.reload()}
          className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
        >
          Retry Connection
        </button>

        {/* Footer */}
        <p className="mt-8 text-sm text-gray-500">
          CurriculaFlex - Learn Your Pace
        </p>
      </div>
    </div>
  );
});

// Hook to detect online/offline status
export function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}
