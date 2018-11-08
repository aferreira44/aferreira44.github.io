import React from 'react'
import { graphql } from 'gatsby'
import HomeLayout from "../components/Layouts/HomeLayout"
import PostList from "../components/Post/List"

export default ({ data }) => (
  <div css={`
    & .title, .description, .heading {
      text-align: center;
    }

    & .title {
      margin: 0 0 30px 0;
    }
  }
  `}>
    <HomeLayout>
      <h1 className="title">{data.site.siteMetadata.title}</h1>
      <p className="description">{data.site.siteMetadata.description}</p>
      <hr />
      <section>
        <h3 className="heading">Latest Posts</h3>
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