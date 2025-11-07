import { useEffect, useRef, useState, memo } from 'react';

export const LazyLoadComponent = memo(function LazyLoadComponent({
  children,
  fallback,
  threshold = 0.1,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold,
        rootMargin: '100px', // Start loading 100px before the component enters viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div ref={ref} className="min-h-[200px]">
      {isVisible ? children : fallback}
    </div>
  );
});
