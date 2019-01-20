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
      <div>
        <h1 className="is-size-1 is-size-2-mobile has-text-centered has-text-weight-semibold">{data.site.siteMetadata.title}</h1>
        <p className="is-size-5 is-size-6-mobile has-text-centered">{data.site.siteMetadata.description}</p>
        <hr />
      </div>
    )}
  />
)