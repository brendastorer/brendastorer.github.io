import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Hero from "../components/Hero/Hero";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import About from "../components/About/About";
import Speaking from "../components/Speaking/Speaking";
import ProjectThumbnails from "../components/ProjectThumbnails/ProjectThumbnails";
import Podcasts from "../components/Podcasts/Podcasts";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <main className="index">
          <Helmet title={config.siteTitle} />
          <SEO />
          <Hero />
          <About />
          <ProjectThumbnails />
          <PostListing postEdges={postEdges} />
          <Speaking />
          <Podcasts />
        </main>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
