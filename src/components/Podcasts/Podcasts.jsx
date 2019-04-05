import React, { Component } from "react";
import "./Podcasts.css";

class Podcasts extends Component {
  render() {
    return (
      <div className="podcasts" id="podcasts">
        <h2>
          Podcasts
        </h2>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=DPuZk8DUnTs" target="_blank" rel="noopener noreferrer">
            Non Breaking Space Show &mdash; Practical CSS Grids, November 2017
            </a>
          </li>
          <li>
            <a href="http://tentative.fm/38" target="_blank" rel="noopener noreferrer">
              Tentative.fm &mdash; Grid Locked, May 2017
            </a>
          </li>
          <li>
            <a href="http://lailaandbrenda.fm/" target="_blank" rel="noopener noreferrer">
              The Laila & Brenda Show (Co-Host)
            </a>
          </li>
          <li>
            <a href="http://ctrlclickcast.com/episodes/intro-to-svgs" target="_blank" rel="noopener noreferrer">
              Ctrl + Click Cast &mdash; Intro to SVGs, May 2016
            </a>
          </li>
          <li>
            <a href="https://youtu.be/2uR0M2jK-2o" target="_blank" rel="noopener noreferrer">
              Non Breaking Space Show &mdash; SVGs, January 2016
            </a>
          </li>
          <li>
            <a href="http://giantrobots.fm/169" target="_blank" rel="noopener noreferrer">
              Giant Robots Smashing Into Other Giant Robots (Guest Host) &mdash; Purpose Driven Development, November 2015
            </a>
          </li>
          <li>
            <a href="http://giantrobots.fm/167" target="_blank" rel="noopener noreferrer">
              Giant Robots Smashing Into Other Giant Robots &mdash; A Place For Both, October 2015
            </a>
          </li>
          <li>
            <a href="http://rebootshow.fm/2" target="_blank" rel="noopener noreferrer">
              Reboot &mdash; Waiter > Bartender > Lost Soul, January 2015
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Podcasts;
