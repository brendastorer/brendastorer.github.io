import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <section className="contact" id="contact">
        <div className="contact__container">
          <h2>
            Say hi!
          </h2>
          <p>
            I'm currently open to contract and part-time opportunites. Get in touch!
          </p>
          <form className="contact__form" acceptCharset="UTF-8" action="https://formkeep.com/f/da6b15a8dbf2" method="POST">
            <input type="hidden" name="utf8" value="✓" />
            <div className="contact__form-grouped">
              <div>
                <label for="name">Name</label>
                <input type="name" id="name" name="name" />
              </div>
              <div>
                <label for="email-address">Email Address</label>
                <input type="email" id="email-address" name="email" />
              </div>
            </div>
            <label for="message">Message</label>
            <textarea id="message" name="message" />
            <div className="contact__button-container">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default Contact;
