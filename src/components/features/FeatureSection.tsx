import React from 'react';
import FeatureBox from './FeatureBox';
import Section from '../common/Section';
import { Feature } from '../../types/feature.types';

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  features,
  columns = 3
}) => {
  const colClass = `col-md-6 col-lg-${12 / columns}`;

  return (
    <Section
      title={title}
      subtitle={subtitle}
      className="section-default border-0 my-5"
    >
      <div className="row">
        {features.map((feature, index) => (
          <div key={index} className={`${colClass} mb-4 mb-lg-0`}>
            <FeatureBox {...feature} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FeatureSection;