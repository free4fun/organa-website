import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  background?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  className = '',
  children,
  background,
  id
}) => {
  return (
    <section 
      className={`section ${className}`}
      style={background ? { backgroundImage: `url(${background})` } : undefined}
      id={id}
    >
      <div className="container">
        {(title || subtitle) && (
          <div className="row text-center mb-5">
            <div className="col">
              {title && (
                <h2 className="font-weight-bold mb-3">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="text-muted mb-0">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;