import React from "react";
import "../../../Styles/Home/Contact/Contact.css";
import image from "../../../assets/contact.jpg";

const Contact = () => {
  return (
    <section className="section">
      <div className="container contact">
        <div
          className="contactImage"
          style={{ backgroundImage: `url(${image})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        ></div>
        <div className="contactRight">
          <h3>Contact Us</h3>
          <div className="line"></div>
          <p>Share your query with us.</p>
          <form className="form">
            <div>
              <input value="" onChange="" required placeholder="Enter your name" type="text" name="from_name" />
            </div>
            <div className="emailInput">
              <input value="" onChange="" required placeholder="Enter your email" type="email" name="reply_to" />
            </div>
            <textarea value="" onChange="" required placeholder="Enter your message" type="text" name="message" />
            <button onClick="" type="submit" className="formButton">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
