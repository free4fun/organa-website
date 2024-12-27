import React from 'react';

interface CarouselControlsProps {
  totalSlides: number;
  currentSlide: number;
  onNext: () => void;
  onPrev: () => void;
  onDotClick: (index: number) => void;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  totalSlides,
  currentSlide,
  onNext,
  onPrev,
  onDotClick
}) => {
  return (
    <>
      <div className="owl-nav">
        <button 
          type="button" 
          role="presentation" 
          className="owl-prev" 
          onClick={onPrev}
          aria-label="Previous slide"
        >
          <span aria-label="Previous"></span>
        </button>
        <button 
          type="button" 
          role="presentation" 
          className="owl-next" 
          onClick={onNext}
          aria-label="Next slide"
        >
          <span aria-label="Next"></span>
        </button>
      </div>
      <div className="owl-dots mb-5">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            role="button"
            className={`owl-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => onDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span></span>
          </button>
        ))}
      </div>
    </>
  );
};

export default CarouselControls;