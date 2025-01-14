import { RefObject, useEffect, useState } from 'react';

interface UseIntersectionObserverProps {
  elementRef: RefObject<HTMLElement>;
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = ({
  elementRef,
  threshold = 0,
  root = null,
  rootMargin = '0px',
  freezeOnceVisible = false
}: UseIntersectionObserverProps) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const [hasIntersected, setHasIntersected] = useState<boolean>(false);

  useEffect(() => {
    const element = elementRef.current;
    
    if (!element || (freezeOnceVisible && hasIntersected)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);
        
        if (isElementIntersecting && freezeOnceVisible) {
          setHasIntersected(true);
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible, hasIntersected]);

  return isIntersecting;
};
