import React from 'react';
import { Testimonial } from '../../types/testimonial.types';

const TestimonialCard: React.FC<Testimonial> = ({
  content,
  author,
  position,
  company,
  image
}) => {
  return (
    <div className="testimonial testimonial-style-2 testimonial-with-quotes mb-0">
      <div className="testimonial-author">
        <img 
          src={image} 
          className="img-fluid rounded-circle mb-0" 
          alt={author}
          width={80}
          height={80}
        />
      </div>
      
      <blockquote>
        <p className="text-color-dark text-4 line-height-5 mb-0">
          {content}
        </p>
      </blockquote>
      
      <div className="testimonial-author">
        <p>
          <strong className="font-weight-extra-bold text-2">
            {author}
          </strong>
          <span>
            {position}
            {company && (
              <>, {company}</>
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;