import React from 'react';
import ClientLogo from './ClientsLogo';
import Section from '../common/Section';

interface Client {
  name: string;
  logo: string;
  link: string;
}

interface ClientsSectionProps {
  title: string;
  subtitle?: string;
  clients: Client[];
}

const ClientsSection: React.FC<ClientsSectionProps> = ({
  title,
  subtitle,
  clients
}) => {
  return (
    <Section
      title={title}
      subtitle={subtitle}
      className="section-default border-0 my-5"
    >
      <div className="row align-items-center text-center py-5">
        {clients.map((client, index) => (
          <ClientLogo key={index} {...client} />
        ))}
      </div>
    </Section>
  );
};

export default ClientsSection;