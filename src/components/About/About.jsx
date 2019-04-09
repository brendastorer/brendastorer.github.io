import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="about__content">
          <div className="about__copy">
            <h2 className="gradient-heading">
              Hi, I'm Brenda. I love CSS, e-commerce, beautiful and thoughtful design, dancing to good and bad pop music, and making my own natural skincare products.
            </h2>
            <p>
              I've been making websites since the early days of Geocities and professionally for the past decade in a variety of development and design roles, sometimes solely on one side or the other, but preferably as a hybrid of both. For smaller projects, I can provide professional experience from both these areas as a one-stop-shop for websites on content management and e-commerce platforms like Shopify or Wordpress.  For larger projects, I seek out opportunities where I can help as a bridge between the two words, and advocate for collaboration in cross-functional team environments, where design & development work together.
            </p>
            <p>
              As an <a href="#speaking">award winning conference speaker</a>,
              I have been around the world presenting talks on my greatest love, CSS (side note, this site is built without any CSS frameworks or pre/post processors for CSS). I also love being an active member of the NYC tech community. I've taught  with Girl Develop It and helped organize local front-end meetups like CSS Layout Club and ManhattanJS.
            </p>
          </div>
          <div className="about__illustration">
            I go here.
          </div>
        </div>
      </section>
    );
  }
}

export default About;
