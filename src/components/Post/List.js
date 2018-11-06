import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
                path
              }
              timeToRead
              excerpt
            }
          }
        }
      }
    `}
    render={data => (
      <div css={`
        & .timeToRead{
          display: block;
          font-style: italic;
          font-weight: bold;
        }
      `}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h4><Link to={node.frontmatter.path}>{node.frontmatter.title}</Link></h4>
            <span className="timeToRead">Time to read: {node.timeToRead} min.</span>
            <span>{node.excerpt}</span>
          </div>
        ))}
      </div>
    )}
  />
)