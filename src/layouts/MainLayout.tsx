import React from 'react';
import Footer from '../components/footer/Footer';
import MainCarousel from '../components/carousel/MainCarousel';
import FeatureSection from '../components/features/FeatureSection';
import BlogSection from '../components/blog/BlogSection';
import TestimonialSection from '../components/testimonials/TestimonialSection';
import ClientsSection from '../components/clients/ClientsSection';

import { slidesData } from '../data/slidesData';
import { featuresData } from '../data/featuresData';
import { blogData } from '../data/blogData';
import { testimonialsData } from '../data/testimonialsData';
import { clientsData } from '../data/clientsData';

const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
            
      <main role="main">
        <MainCarousel slides={slidesData} />
        <FeatureSection
          title="Nuestros Servicios"
          features={featuresData}
        />

       {/*<BlogSection
          title="Últimas Noticias"
          posts={blogData}
        />*/}

        {/*<TestimonialSection
          testimonials={testimonialsData}
        />*/}

        <ClientsSection
          title="Nuestros Clientes"
          clients={clientsData}
        />


      </main>
      <Footer />
      
    </div>
  );
};

export default MainLayout;