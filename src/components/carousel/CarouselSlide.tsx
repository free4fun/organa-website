import React from 'react';
import { CarouselSlideProps } from '../../types/carousel.types';

const CarouselSlide: React.FC<CarouselSlideProps> = ({
  isActive,
  title,
  subtitle,
  description,
  background,
  backgroundColor,
  buttonText,
  buttonLink
}) => {
  return (
    <div 
      className={`owl-item ${isActive ? 'active' : ''}`}
      style={{ backgroundColor }}
    >
      <div 
        className="owl-item position-relative"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container position-relative z-index-3 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-6">
              <div className="d-flex flex-column align-items-center">
                <h3 
                  className="position-relative text-color-light text-5 line-height-5 font-weight-medium px-4 mb-2 appear-animation"
                  data-appear-animation="fadeInDownShorter"
                  data-appear-animation-delay="500"
                >
                  <span className="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3">
                    <img src="img/slides/slide-title-border.png" className="w-auto appear-animation" alt="" />
                  </span>
                  {title}
                  <span className="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3">
                    <img src="img/slides/slide-title-border.png" className="w-auto appear-animation" alt="" />
                  </span>
                </h3>
                <h2 
                  className="text-color-light font-weight-extra-bold text-12 mb-3 appear-animation"
                  data-appear-animation="blurIn"
                  data-appear-animation-delay="1000"
                >
                  {subtitle}
                </h2>
                <p 
                  className="text-4 text-color-light font-weight-light opacity-7 mb-0"
                  data-appear-animation="fadeInUpShorter"
                  data-appear-animation-delay="1500"
                >
                  {description}
                </p>
                {buttonText && buttonLink && (
                  <div className="appear-animation" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="2000">
                    <a href={buttonLink} className="btn btn-primary btn-modern font-weight-bold text-3 px-5 py-3 mt-4">
                      {buttonText}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;