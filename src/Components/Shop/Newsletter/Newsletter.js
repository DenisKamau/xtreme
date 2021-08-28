import React from "react";
import "../../../Styles/Shop/Newsletter/Newsletter.css";

const Newsletter = () => {
  return (
    <section className="section newsLetterSection">
      <div className="container newsLetter">
        <div className="newsletterLeft">
          <h3>Join our newsletter</h3>
          <p>Sign up to our newsletter for the latest news and offers. </p>
        </div>
        <div className="newsletterRight">
          <form className="form">
            <input className="input" type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
