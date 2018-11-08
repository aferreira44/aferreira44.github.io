import React from 'react'
import { graphql } from "gatsby"
import Layout from "../Layouts/Layout"

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>{post.frontmatter.slug}</div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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