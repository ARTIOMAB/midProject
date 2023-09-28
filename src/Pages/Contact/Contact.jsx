import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-heading">Contact With Us!</h2>
        <div className="contact-card-input">
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            name="first_name"
            placeholder="Enter your first name"
          />
        </div>
        <br />
        <br />
        <div className="contact-card-input">
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            name="last_name"
            placeholder="Enter your last name"
          />
        </div>
        <br />
        <br />

        <h2 className="inner-contact-heading">Contact Information</h2>
        <div className="contact-card-input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
          />
        </div>
        <br />
        <br />
        <div className="contact-card-input">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
          />
        </div>
        <br />
        <br />

        <h2 className="inner-contact-heading">Additional Comments</h2>
        <div className="contact-card-input">
          <label htmlFor="comments">Comments:</label>
          <textarea
            name="comments"
            rows="4"
            cols="50"
            placeholder="Enter your comments"
          ></textarea>
        </div>
        <br />
        <br />

        <input className="contact-btn" type="submit" value="Submit" />
      </div>
    </div>
  );
}

export default Contact;
