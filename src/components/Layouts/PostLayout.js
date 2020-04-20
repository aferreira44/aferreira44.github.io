import React from "react";
import { graphql } from "gatsby";
import { Row, Col } from "antd";
import { Typography } from "antd";

import Layout from "../Layouts/Layout";

const { Title, Text } = Typography;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Layout>
        <Row justify="center">
          <Col span={12}>
            <Title>{post.frontmatter.title}</Title>
            <Text>
              <span>Published on {post.frontmatter.date}</span> -{" "}
              <span
                css={{
                  fontWeight: "bold",
                }}
              >
                Time to read: {post.timeToRead} min.
              </span>
            </Text>
            <br />
            <br />
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Col>
        </Row>
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
