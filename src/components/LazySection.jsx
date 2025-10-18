import { useEffect, useRef, useState } from 'react';

function LazySection({ children, rootMargin = '200px 0px', minHeight }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={containerRef} style={minHeight ? { minHeight } : undefined}>
      {isVisible ? children : null}
    </div>
  );
}

export default LazySection;
