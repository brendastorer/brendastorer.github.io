import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "./root.css";
import "./layout.css";
import "./typography.css";
import "./media.css";
import "./forms.css";
import "./buttons.css";
import "./index.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <p className="browser-disclaimer">
          This website has been optimized for viewing in a modern web browser. For the best experience, switch to the latest version of Firefox, Safari, or Chrome.
        </p>
        {children}
      </div>
    );
  }
}
