import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout.js";

// markup
const IndexPage = () => {
  return (
    <Layout title="Home">
      <title>Home Page</title>
      <p>
        <Link to="/about">Go to the About page</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
