import React, { Component } from "react";
import CodepenIcon from "../../svgs/CodepenIcon";
import LinkedInIcon from "../../svgs/LinkedInIcon";
import GitHubIcon from "../../svgs/GitHubIcon";
import TwitterIcon from "../../svgs/TwitterIcon";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <ul>
          <li>
            <a href="#about">
              About
            </a>
          </li>
          <li>
            <a href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a href="#speaking">
              Speaking
            </a>
          </li>
          <li>
            <a href="#writing">
              Writing
            </a>
          </li>
          <li>
            <a href="#podcasts">
              Podcasts
            </a>
          </li>
          <li>
            <a href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a href="https://codepen.io/brendamarienyc/" target="_blank" rel="noopener noreferrer">
              <CodepenIcon />
            </a>
          </li>
          <li>
            <a href="https://github.com/brendastorer" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/brendastorer" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/brendamarienyc" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;