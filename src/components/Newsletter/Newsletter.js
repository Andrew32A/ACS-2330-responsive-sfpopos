import React, { useState } from "react";
import "./Newsletter.css";

function Newsletter() {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section aria-label="Newsletter Subscription Form">
      <form className="newsletterForm">
        <h1 className="newsletterTitle" aria-level="1">Get the latest updates!</h1>
        <div className="usernameWrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="username"
            placeholder="Enter here"
            aria-label="Enter your username"
            required
          />
        </div>
        <div className="passwordWrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="password"
            placeholder="Enter here"
            aria-label="Enter your password"
            required
          />
        </div>
        <div className="checkboxWrapper">
          <input
            type="checkbox"
            id="subscribe"
            className="subscribe"
            checked={isChecked}
            onChange={handleCheckboxChange}
            aria-checked={isChecked}
          />
          <label htmlFor="subscribe">Subscribe to our newsletter</label>
        </div>
        <button type="submit" className="newsletterSubmit">Submit</button>
      </form>
    </section>
  );
}

export default Newsletter;
