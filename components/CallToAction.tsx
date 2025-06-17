// components/CallToAction.tsx
import React from 'react';

const CallToAction = () => {
  return (
    <div style={{ backgroundColor: '#0070f3', color: '#fff', padding: '2rem', textAlign: 'center' }}>
      <h2>Need Plumbing Help Fast?</h2>
      <p>Call us now or book an appointment today!</p>
      <a href="tel:+13168715499" style={{
        display: 'inline-block',
        marginTop: '1rem',
        padding: '1rem 2rem',
        backgroundColor: '#fff',
        color: '#0070f3',
        textDecoration: 'none',
        fontWeight: 'bold',
        borderRadius: '5px'
      }}>
        Call (316) 871-5499
      </a>
    </div>
  );
};

export default CallToAction;
