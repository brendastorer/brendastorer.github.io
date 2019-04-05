import React, { Component } from "react";
import Logo from "../../svgs/Logo";
import Navigation from "../Navigation/Navigation";
import "./Hero.css";

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div>
          <Logo className="hero__logo" />
          <h2 className="hero__subheading">front-end developer & designer</h2>
        </div>
        <Navigation />
      </section>
    );
  }
}

export default Hero;
