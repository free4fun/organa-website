import { useState, useEffect } from 'react';

interface StickyOptions {
  stickyEnabled: boolean;
  stickyEnableOnBoxed: boolean;
  stickyEnableOnMobile: boolean;
  stickyStartAt: number;
  stickySetTop: string;
  stickyChangeLogo: boolean;
}

export const useSticky = (options: StickyOptions) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (!options.stickyEnabled) return;

    const handleScroll = () => {
      const isMobile = window.innerWidth < 992;
      if (!options.stickyEnableOnMobile && isMobile) return;

      const scrollY = window.scrollY;
      setIsSticky(scrollY >= options.stickyStartAt);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [options]);

  return { isSticky };
};