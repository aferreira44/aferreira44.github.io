import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div css={`
        & .title, .description {
          text-align: center;
        }
    
        & .title {
          margin: 0 0 30px 0;
        }
      `}>
        <h1 className="title">{data.site.siteMetadata.title}</h1>
        <p className="description">{data.site.siteMetadata.description}</p>
        <hr />
      </div>
    )}
  />
)