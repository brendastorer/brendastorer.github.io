import React, { Component } from "react";
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
            <a href="#writing">
              Writing
            </a>
          </li>
          <li>
            <a href="#speaking">
              Speaking
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
        </ul>
      </nav>
    );
  }
}

export default Navigation;