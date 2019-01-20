import React from 'react'
import { Helmet } from "react-helmet";
import Layout from "../Layouts/Layout"
import PostList from "../Post/List"

export default ({ children }) => (
  <Layout>
    <Helmet>
      <title>André Ferreira : Full Stack Developer</title>
      <meta name="description" content="Full Stack Developer"></meta>
    </Helmet>
    <div class="columns">
      <div className="column"></div>
      <div class="column is-two-thirds">
        <PostList />
      </div>
      <div className="column"></div>
    </div>
    {children}
  </Layout>
)