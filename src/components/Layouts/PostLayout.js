import React from "react";
import { graphql } from "gatsby";
import Layout from "../Layouts/Layout";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div
      css={`
        & .timeToRead {
          font-weight: bold;
        }
      `}
    >
      <Layout>
        <h1>{post.frontmatter.title}</h1>
        <p>
          <span>Published on {post.frontmatter.date}</span> -{" "}
          <span className="timeToRead">
            Time to read: {post.timeToRead} min.
          </span>
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
      }
      timeToRead
    }
  }
`;
