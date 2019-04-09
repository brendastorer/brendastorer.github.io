import React, { Component } from "react";
import LolaScreenshot from "../../images/lola-screenshot.jpg";
import ThriveGlobalScreenshot from "../../images/thrive-global-screenshot.jpg";
import JoydriveScreenshot from "../../images/joydrive-screenshot.jpg";
import OneAtelierAnimation from "../../images/1atelier-animation.gif";
import LevoScreenshot from "../../images/levo-screenshot.jpg";
import ProDeal360PatternLibrary from "../../images/prodeal360-pattern-library.jpg";
import "./ProjectThumbnails.css";

class ProjectThumbnails extends Component {
  render() {
    return (
      <section className="project-thumbnails" id="projects">
        <div className="project-thumbnails__heading-container">
          <h2 className="gradient-heading">
            As a web design and developer consultant, I've worked for all types of clients in various industries &mdash; from small greenfield startups and non-profits, to Fortune 500 companies.
          </h2>
        </div>
        <div className="project-thumbnails__list-container">
          <ul className="project-thumbnails__list">
            <li>
              <img src={LolaScreenshot} alt="Lola product page website screenshot" className="project-thumbnails__image" />
              <h3 className="project-thumbnails__title">
                <a
                  href="https://mylola.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  LOLA
                </a>
              </h3>
              <p>
                Front-end development with Shopify Liquid, vanilla JavaScript, and Sass for a custom Shopify e-commerce subscription site.
              </p>
            </li>
            <li>
              <img src={ThriveGlobalScreenshot} alt="Thrive Global custom CMS website screenshot" className="project-thumbnails__image" />
              <h3 className="project-thumbnails__title">
                <a
                  href="https://thriveglobal.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  Thrive Global
                </a>
              </h3>
              <p>
                Front-end development and design for a custom publishing platform CMS built from scratch in Ruby on Rails with Sass and vanilla JavaScript.
              </p>
            </li>
            <li>
              <img src={JoydriveScreenshot} alt="Joydrive website screenshot" className="project-thumbnails__image" />
              <h3 className="project-thumbnails__title">
                <a
                  href="https://joydrive.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  Joydrive
                </a>
              </h3>
              <p>
                Design and front-end develoment in an Elixir/Phoenix/Sass application for a custom e-commerce platform for selling new and used cars online.
              </p>
            </li>
            <li>
              <img src={OneAtelierAnimation} alt="Animation of a luxury satchel handbag changing colors and styles" className="project-thumbnails__image" />
              <h3 className="project-thumbnails__title">
                <a
                  href="https://1atelier.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  1Atelier
                </a>
              </h3>
              <p>
                UX research, design, and front-end development with Sass of a new homepage to improve conversion and site bounce rate.
              </p>
            </li>
            <li>
              <img src={LevoScreenshot} alt="Levo League homepage screenshot" className="project-thumbnails__image" />
              <h3 className="project-thumbnails__title">Levo League</h3>
              <p>
              Lead front-end developer and designer at a career advice and social networking start-up for millenial women.
              </p>
            </li>
            <li>
              <img src={ProDeal360PatternLibrary} alt="ProDeal360 pattern library screenshot" className="project-thumbnails__image" />
              <h3 className="project-thumbnails__title">
                <a
                  href="https://prodeal360.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  ProDeal 360
                </a>
              </h3>
              <p>
                Front-end development of an Elixir/Phoenix/Sass application from scrath with leading the creation of a live design pattern library.
              </p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default ProjectThumbnails;
