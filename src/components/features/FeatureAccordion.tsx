import React, { useState } from 'react';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface FeatureAccordionProps {
  items: AccordionItem[];
}

const FeatureAccordion: React.FC<FeatureAccordionProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>(items[0]?.id);

  return (
    <div className="accordion accordion-modern" id="accordion">
      {items.map((item) => (
        <div className="card card-default" key={item.id}>
          <div className="card-header">
            <h4 className="card-title m-0">
              <a 
                className={`accordion-toggle text-color-dark font-weight-bold ${activeId === item.id ? '' : 'collapsed'}`}
                onClick={() => setActiveId(activeId === item.id ? '' : item.id)}
              >
                {item.title}
              </a>
            </h4>
          </div>
          <div 
            id={`collapse${item.id}`}
            className={`collapse ${activeId === item.id ? 'show' : ''}`}
          >
            <div className="card-body text-2">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureAccordion;