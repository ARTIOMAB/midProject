import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h2>Personal Information</h2>
      <label htmlFor="first_name">First Name:</label>
      <input type="text" id="first_name" name="first_name" />
      <br />
      <br />
      <label htmlFor="last_name">Last Name:</label>
      <input type="text" id="last_name" name="last_name" />
      <br />
      <br />

      <h2>Contact Information</h2>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <br />
      <br />
      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" />
      <br />
      <br />

      <h2>Additional Comments</h2>
      <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
      <br />
      <br />

      <input type="submit" />
    </div>
  );
}

export default Contact;
