import React from 'react'
import { graphql } from "gatsby"
import Layout from "../Layouts/Layout"

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <div>{post.frontmatter.slug}</div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`