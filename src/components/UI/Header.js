import React from "react";
import { graphql, StaticQuery } from "gatsby";

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
    render={(data) => (
      <div
        css={`
          & .title,
          .description {
            text-align: center;
          }

          & .title {
            margin: 0 0 30px 0;
          }
        `}
      >
        <Typography variant="h3" component="h1" align="center">
          {data.site.siteMetadata.title}
        </Typography>
        <Typography variant="subtitle1" align="center">
          {data.site.siteMetadata.description}
        </Typography>
      </div>
    )}
  />
);
