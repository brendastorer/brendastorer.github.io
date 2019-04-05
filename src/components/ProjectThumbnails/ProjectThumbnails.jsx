import React, { Component } from "react";
import "./ProjectThumbnails.css";

class ProjectThumbnails extends Component {
  render() {
    return (
      <div className="project-thumbnails" id="projects">
        <h2>
          As a web design and developer consultant, I've worked for all types of clients in various industries &mdash; from small greenfield startups and non-profits, to Fortune 500 companies.
        </h2>
        <p>
          My most recent work has been in ReactJS and Shopify and I'm a fan of both. Below is a sampling of some recent work.
        </p>
        <ul>
          <li>
            <a
              href="https://mylola.com"
              target="_blank"
              rel="noopener noreferrer">LOLA</a> &mdash; Front-end development with Shopify Liquid, vanilla JavaScript, and Sass for a custom Shopify e-commerce subscription site
          </li>
          <li>
            <a
              href="https://thriveglobal.com"
              target="_blank"
              rel="noopener noreferrer">Thrive Global</a> &mdash; Design and front-end development for a custom publishing platform CMS built from scratch in Ruby on Rails with Sass and vanilla JavaScript.
          </li>
          <li>
            <a
              href="https://joydrive.com"
              target="_blank"
              rel="noopener noreferrer">Joydrive</a>
             &mdash; Design and front-end develoment in an Elixir/Phoenix/Sass application for a custom e-commerce platform for selling new and used cars online
          </li>
          <li>
            <a
              href="https://1atelier.com"
              target="_blank"
              rel="noopener noreferrer">1Atelier</a>
             &mdash; UX research, design, and front-end development with Sass of a new homepage to improve conversion and site bounce rate
          </li>
          <li>
            <a
              href="https://prodeal360.com/"
              target="_blank"
              rel="noopener noreferrer">ProDeal 360</a>
             &mdash;
            Front-end development of an Elixir/Phoenix/Sass application from scrath with leading the creation of a live design pattern library.
          </li>
        </ul>
      </div>
    );
  }
}

export default ProjectThumbnails;
