import React, { useState, useEffect } from 'react';
import CarouselSlide from './CarouselSlide';
import { MainCarouselProps } from '../../types/carousel.types';

const MainCarousel: React.FC<MainCarouselProps> = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  const nextSlide = () => {
    setIsAnimating(true);
    setActiveIndex((current) => (current + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const previousSlide = () => {
    setIsAnimating(true);
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className="owl-carousel owl-carousel-light owl-carousel-light-init-fadeIn owl-theme manual dots-inside dots-horizontal-center show-dots-hover show-dots-xs nav-inside nav-inside-plus nav-dark nav-md nav-font-size-md show-nav-hover mb-0">
      <div className="owl-stage-outer">
        <div className="owl-stage">
          {slides.map((slide, index) => (
            <CarouselSlide
              key={index}
              isActive={index === activeIndex}
              {...slide}
            />
          ))}
        </div>
      </div>
      
      <div className="owl-nav">
        <button 
          className="owl-prev" 
          onClick={previousSlide}
          disabled={isAnimating}
        >
          <span>‹</span>
        </button>
        <button 
          className="owl-next" 
          onClick={nextSlide}
          disabled={isAnimating}
        >
          <span>›</span>
        </button>
      </div>
      
      <div className="owl-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`owl-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setActiveIndex(index);
                setTimeout(() => setIsAnimating(false), 600);
              }
            }}
          >
            <span></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainCarousel;