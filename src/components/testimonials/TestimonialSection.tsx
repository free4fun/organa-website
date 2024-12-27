import React from 'react';
import { Testimonial } from '../../types/testimonial.types';
import TestimonialCard from './TestimonialCard';
import Section from '../common/Section';

interface TestimonialSectionProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  className?: string;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  title = "Lo que dicen nuestros clientes",
  subtitle = "Testimonios de clientes satisfechos que han confiado en nosotros",
  testimonials,
  className = ''
}) => {
  return (
    <Section
      title={title}
      subtitle={subtitle}
      className={`section-testimonials ${className}`}
    >
      <div className="row">
        <div className="col">
          <div className="owl-carousel owl-theme nav-bottom rounded-nav" data-plugin-options="{'items': 1, 'loop': true, 'autoplay': true}">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialSection;