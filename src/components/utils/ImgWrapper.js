import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import safeGet from "lodash.get";

const ImageWrapper = ({ src, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
        nodes {
          relativePath
          childImageSharp {
            fixed(width: 30, height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);

  const match = useMemo(
    () => data.allFile.nodes.find(({ relativePath }) => src === relativePath),
    [data, src]
  );

  const fixed = safeGet(match, "childImageSharp.fixed");

  return fixed ? <Img fixed={fixed} Tag="div" {...props} /> : null;
};

export default ImageWrapper;
