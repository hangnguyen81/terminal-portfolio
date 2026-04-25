import { useState, useEffect } from 'react';

export function useViewport() {
  const [vw, setVw] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setVw(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    vw,
    isMobile: vw < 760,
    isNarrow: vw < 520,
  };
}
