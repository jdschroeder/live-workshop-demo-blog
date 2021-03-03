import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout.js";

const AboutPage = () => {
  return (
    <Layout title="About">
      <title>About</title>
      <p>
        <Link to="/">Back to the home page</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
