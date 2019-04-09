import React, { Component } from "react";
import PostListing from "../PostListing/PostListing";
import "./Writing.css";

class Writing extends Component {
  render() {
    return (
      <section className="writing" id="writing">
        <div className="writing__content">
          <h2 className="gradient-heading">
            Recent articles
          </h2>
          <PostListing postEdges={this.props.postEdges} />
        </div>
      </section>
    )
  }
}

export default Writing;
