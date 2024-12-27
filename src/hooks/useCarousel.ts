import { useState, useEffect } from 'react';

export const useCarousel = (totalSlides: number, autoPlayInterval = 7000) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval]);

  return {
    currentSlide,
    setCurrentSlide,
    nextSlide,
    prevSlide
  };
};