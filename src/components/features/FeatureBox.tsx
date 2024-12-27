import React from 'react';
import { Feature } from '../../types/feature.types';

interface FeatureBoxProps extends Feature {
  className?: string;
  animated?: boolean;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({
  icon,
  title,
  description,
  link,
  className = '',
  animated = true
}) => {
  return (
    <div 
      className={`feature-box ${className}`}
      data-appear-animation={animated ? "fadeInUp" : undefined}
      data-appear-animation-delay={animated ? "300" : undefined}
    >
      <div className="feature-box-icon">
        <i className={`${icon} text-primary`}></i>
      </div>
      
      <div className="feature-box-info">
        <h4 className="font-weight-bold mb-2">
          {link ? (
            <a href={link} className="text-decoration-none">
              {title}
            </a>
          ) : (
            title
          )}
        </h4>
        
        <p className="mb-4">
          {description}
        </p>
        
        {link && (
          <a 
            href={link} 
            className="learn-more text-primary font-weight-bold"
          >
            Learn More 
            <i className="fas fa-chevron-right text-2 ms-2"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default FeatureBox;