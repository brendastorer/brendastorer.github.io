import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class ProjectsPage extends Component {
  render() {
    return (
      <Layout>
        <main className="projects-page">
          <Helmet title={`Projects | ${config.siteTitle}`} />
          Projects
        </main>
      </Layout>
    );
  }
}

export default ProjectsPage;