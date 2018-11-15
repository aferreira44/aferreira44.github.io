import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { rhythm } from '../../utils/typography'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark (
          sort: {fields: [frontmatter___date], order: DESC},
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "MMM DD, YYYY")
                slug
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
        & hr {
          margin: 30px 0;
        }

        & .heading {
          text-align: center;
        }

        & .timeToRead {
          font-size: ${rhythm(0.65)};
          font-weight: bold;
        }
      `}>
      <section>
        <h3 className="heading">Latest Posts</h3>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h4><Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link></h4>
            <p><span>{node.frontmatter.date}</span> - <span className="timeToRead">{node.timeToRead} min read</span></p>
            <span>{node.excerpt}</span>
            <hr />
          </div>
        ))}
      </section>
      </div>
    )}
  />
)