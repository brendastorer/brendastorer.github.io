import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import Hero from "../components/Hero/Hero";
import SEO from "../components/SEO/SEO";
import About from "../components/About/About";
import Speaking from "../components/Speaking/Speaking";
import ProjectThumbnails from "../components/ProjectThumbnails/ProjectThumbnails";
import Writing from "../components/Writing/Writing";
import Podcasts from "../components/Podcasts/Podcasts";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import "./index.css";

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
          <Writing postEdges={postEdges} />
          <div className="index__grouped">
            <Speaking />
            <Podcasts />
          </div>
          <Contact />
        </main>
        <Footer />
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
