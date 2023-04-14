import React from 'react';
import './Newsletter.css';

function Newsletter() {
  return (
    <div>
      <form className="newsletter-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" className="username" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <div className="checkbox-wrapper">
          <input type="checkbox" id="subscribe" className="subscribe" defaultChecked={true} />
          <label htmlFor="subscribe">Subscribe to our newsletter</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Newsletter;
