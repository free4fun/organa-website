import React, { useState } from 'react';
import { useNewsletter } from '../../hooks/useNewsletter';

const FooterNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const { subscribe, loading, error } = useNewsletter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await subscribe(email);
  };

  return (
    <div className="newsletter">
      <h4 className="font-weight-bold">Newsletter</h4>
      <p>Keep up on our always evolving products features and technology. Enter your e-mail and subscribe to our newsletter.</p>
      
      <div className="alert alert-success d-none" id="newsletterSuccess">
        <strong>Success!</strong> You've been added to our email list.
      </div>

      <div className="alert alert-danger d-none" id="newsletterError"></div>

      <form 
        id="newsletterForm" 
        onSubmit={handleSubmit}
        className="form-style-5 opacity-10"
      >
        <div className="row">
          <div className="form-group col">
            <input 
              type="text" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control" 
              placeholder="Email Address" 
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col">
            <button 
              type="submit" 
              className="btn btn-primary btn-rounded btn-px-4 btn-py-2 font-weight-bold"
              disabled={loading}
            >
              {loading ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
            </button>
          </div>
        </div>
        {error && <div className="text-danger mt-2">{error}</div>}
      </form>
    </div>
  );
};

export default FooterNewsletter;