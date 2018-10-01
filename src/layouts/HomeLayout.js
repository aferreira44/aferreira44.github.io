import React from 'react'
import {Helmet} from "react-helmet";
import Layout from "../layouts/Layout"

export default ({ children }) => (
  <Layout>
    <Helmet>
      <title>André Ferreira : Full Stack Developer</title>
      <meta name="description" content="Full Stack Developer"></meta>
    </Helmet>
    {children}
  </Layout>
)