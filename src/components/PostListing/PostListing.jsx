import React from "react";
import { Link } from "gatsby";
import "./PostListing.css";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <ul className="post-listing">
        {postList.map(post => (
          <li>
            <Link to={post.path} key={post.title} className="post-listing__link">
              <h3 className="post-listing__title-solid">
                {post.title}
              </h3>
              <span className="post-listing__title-outline" aria-hidden="true">
                {post.title}
              </span>
            </Link>
          </li>
        ))}
        <li>
          <a href="https://www.heartinternet.uk/blog/fearless-guide-using-css-grid-today/" target="_blank" rel="noreferrer noopener" className="post-listing__link">
            <h3 className="post-listing__title-solid">
              A Fearless Guide to Using CSS Grid Today
              </h3>
              <span className="post-listing__title-outline" aria-hidden="true">
                A Fearless Guide to Using CSS Grid Today
              </span>
          </a>
        </li>
      </ul>
    );
  }
}

export default PostListing;
