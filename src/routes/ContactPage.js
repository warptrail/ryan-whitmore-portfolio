import React, { useEffect } from 'react';
import HelloForm from '../components/HelloForm';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div style={{ marginTop: '80px' }}>
      <HelloForm />
    </div>
  );
};

export default ContactPage;
