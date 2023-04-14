import React, { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(isChecked);
  };

  return (
    <div>
      <form className='newsletterForm'>
        <div>
          <h1 className='newsletterTitle'>Get the latest updates!</h1>
        </div>
        <div>
          <label htmlFor="username" style={{textAlign: "right"}}>Username: </label>
          <input type="text" id="username" className="username" style={{textAlign: "left"}} />
        </div>
        <div>
          <label htmlFor="password" style={{textAlign: "right"}}>Password: </label>
          <input type="password" id="password" className="password" style={{textAlign: "left"}} />
        </div>
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            id="subscribe"
            className="subscribe"
            checked={true}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="subscribe">Subscribe to our newsletter</label>
        </div>
        <button type="submit" className='newsletterSubmit'>Submit</button>
      </form>
    </div>
  );
}

export default Newsletter;
