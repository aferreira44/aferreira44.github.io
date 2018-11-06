import React from 'react'
import { graphql } from 'gatsby'
import HomeLayout from "../components/Layouts/HomeLayout"
import PostList from "../components/Post/List"

export default ({ data }) => (
  <div css={`
    & h1, h3, p {
      text-align: center;
    }

    & h1 {
      margin: 0 0 30px 0;
    }
  }
  `}>
    <HomeLayout>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>{data.site.siteMetadata.description}</p>
      <hr />
      <section>
        <h3>Latest Posts</h3>
        <PostList />
      </section>
    </HomeLayout>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        subtitle
        description
      }
    }
  }
`