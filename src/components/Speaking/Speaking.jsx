import React, { Component } from "react";
import "./Speaking.css";

class Speaking extends Component {
  render() {
    return (
      <section className="speaking" id="speaking">
        <h2 className="gradient-heading">
          Speaking
        </h2>
        <p>
          I was honored to recieve the award for &ldquo;Best Conference Presentation&rdquo; at CSSDevConf 2017, voted on by the conference attendees. I'm currently booking speaking engagements for 2019. <a href="#contact">Get in touch!</a>
        </p>
        <ul>
          <li>
            <a href="./presentations/2018-10-AsburyAgile.pdf" target="_blank" rel="noreferrer noopener">You Might Not Need Media Queries: How to Use CSS Grid Today</a> &mdash; Asbury Agile, October 2018
          </li>
          <li>
            <a href="./presentations/2018-06-PiterCSS.pdf" target="_blank" rel="noreferrer noopener">You Might Not Need Media Queries: How to Use CSS Grid Today</a> &mdash; PiterCSS, June 2018
          </li>
          <li>
            <a href="./presentations/2018-03-CSSConfAU/index.html" target="_blank" rel="noreferrer noopener">Using CSS Grid in the Real World</a> &mdash;
            CSSConfAU, March 2018
          </li>
          <li>
            <a href="./presentations/2017-10-CSSDevConf/index.html" target="_blank" rel="noreferrer noopener">Using CSS Grid in the Real World</a> &mdash;
            CSSDevConf, October 2017
          </li>
          <li>
            <a href="./presentations/2016-01-SVGSummit/index.html" target="_blank" rel="noreferrer noopener">Cracking the SVG Code</a> &mdash; SVG Summit, January 2016
          </li>
          <li>
            <a href="./presentations/2015-10-CSSDevConf-SVGs/index.html" target="_blank" rel="noreferrer noopener">Cracking the SVG Code</a> &mdash; CSSDevConf, October 2015
          </li>
        </ul>
      </section>
    );
  }
}

export default Speaking;
