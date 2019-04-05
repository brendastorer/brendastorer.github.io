import React, { Component } from "react";
import "./Speaking.css";

class Speaking extends Component {
  render() {
    return (
      <div className="speaking" id="speaking">
        <h2>
          Speaking
        </h2>
        <p>
          I was honored to recieve the award for &ldquo;Best Conference Presentation&rdquo; at CSSDevConf 2017, voted on by the conference attendees. I'm currently booking speaking engagements for 2019. <a href="#contact">Get in touch!</a>
        </p>
        <h3>Previous Talks</h3>
        <ul>
          <li>
            <a href="./presentations/2018-10-AsburyAgile.pdf" target="_blank" rel="noreferrer noopener">
              You Might Not Need Media Queries: How to Use CSS Grid Today &mdash; Asbury Agile, October 2018
            </a>
          </li>
          <li>
            <a href="./presentations/2018-06-PiterCSS.pdf" target="_blank" rel="noreferrer noopener">
              You Might Not Need Media Queries: How to Use CSS Grid Today &mdash; PiterCSS, June 2018
            </a>
          </li>
          <li>
            <a href="./presentations/2018-03-CSSConfAU/index.html" target="_blank" rel="noreferrer noopener">
              Using CSS Grid in the Real World &mdash; CSSConfAU, March 2018
            </a>
          </li>
          <li>
            <a href="./presentations/2017-10-CSSDevConf/index.html" target="_blank" rel="noreferrer noopener">
              Using CSS Grid in the Real World &mdash; CSSDevConf, October 2017 (Awarded Best Conference Presentation)
            </a>
          </li>
          <li>
            <a href="./presentations/2016-01-SVGSummit/index.html" target="_blank" rel="noreferrer noopener">
              Cracking the SVG Code &mdash; SVG Summit, January 2016
            </a>
          </li>
          <li>
            <a href="./presentations/2015-10-CSSDevConf-SVGs/index.html" target="_blank" rel="noreferrer noopener">
              Cracking the SVG Code &mdash; CSSDevConf, October 2015
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Speaking;
