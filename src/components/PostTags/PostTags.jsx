import React, { Component } from "react";
import _ from "lodash";
import { Link } from "gatsby";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <ul className="post-tags">
        {tags &&
          tags.map(tag => (
            <li>
              <Link
                key={tag}
                to={`/tags/${_.kebabCase(tag)}`}
              >
                {tag}
              </Link>
            </li>
          ))}
      </ul>
    );
  }
}

export default PostTags;
