import React from "react";
import { Link } from "gatsby";

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
      <div className="post-listing" id="writing">
        <h2>Writing</h2>
        <ul>
          {postList.map(post => (
            <li>
              <Link to={post.path} key={post.title}>
                {post.title}
              </Link>
            </li>
          ))}
          <li>
            <a href="https://www.heartinternet.uk/blog/fearless-guide-using-css-grid-today/" target="_blank" rel="noreferrer noopener">
              A Fearless Guide to Using CSS Grid Today &mdash; published by Heart Internet
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default PostListing;
