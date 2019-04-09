import React, { Component } from "react";
import "./Podcasts.css";

class Podcasts extends Component {
  render() {
    return (
      <div className="podcasts" id="podcasts">
        <h2 className="gradient-heading">
          Podcasts
        </h2>
        <ul>
          <li>
            <a href="http://lailaandbrenda.fm/" target="_blank" rel="noopener noreferrer">
              The Laila & Brenda Show (Co-Host)
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=DPuZk8DUnTs" target="_blank" rel="noopener noreferrer">Practical CSS Grids</a> &mdash; Non Breaking Space Show
          </li>
          <li>
            <a href="http://tentative.fm/38" target="_blank" rel="noopener noreferrer">Grid Locked</a> &mdash; Tentative.fm
          </li>
          <li>
            <a href="http://ctrlclickcast.com/episodes/intro-to-svgs" target="_blank" rel="noopener noreferrer">Intro to SVGs</a> &mdash; Ctrl + Click Cast
          </li>
          <li>
            <a href="https://youtu.be/2uR0M2jK-2o" target="_blank" rel="noopener noreferrer">SVGs</a> &mdash; Non Breaking Space Show
          </li>
          <li>
            <a href="http://giantrobots.fm/169" target="_blank" rel="noopener noreferrer">Purpose Driven Development</a> &mdash; Giant Robots Smashing Into Other Giant Robots (Guest Host)
          </li>
          <li>
            <a href="http://giantrobots.fm/167" target="_blank" rel="noopener noreferrer">A Place For Both</a> &mdash; Giant Robots Smashing Into Other Giant Robots
          </li>
          <li>
            <a href="http://rebootshow.fm/2" target="_blank" rel="noopener noreferrer">Waiter > Bartender > Lost Soul</a> &mdash; Reboot
          </li>
        </ul>
      </div>
    );
  }
}

export default Podcasts;
