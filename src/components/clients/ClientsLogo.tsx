import React from 'react';

interface ClientLogoProps {
  name: string;
  logo: string;
  link: string;
}

const ClientLogo: React.FC<ClientLogoProps> = ({
  name,
  logo,
  link
}) => {
  return (
    <div className="col-sm-4 col-md-2 mb-5 mb-md-0">
      <div className="client-logo">
        <a href={link} title={name} className="text-decoration-none">
          <img 
            src={logo} 
            className="img-fluid" 
            alt={name}
            style={{ maxWidth: '140px', height: 'auto' }}
          />
        </a>
      </div>
    </div>
  );
};

export default ClientLogo;