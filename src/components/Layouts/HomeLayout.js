import React from "react";
import { graphql, StaticQuery } from "gatsby";
import GitHubButton from "react-github-btn";
import { Helmet } from "react-helmet";
import { Row, Col, Divider } from "antd";
import { Typography } from "antd";
import Layout from "../Layouts/Layout";
import PostList from "../Articles/List";

const { Title, Text } = Typography;

export default ({ children }) => (
  <Layout>
    <Helmet>
      <title>André Ferreira : Full Stack Developer</title>
      <meta name="description" content="Full Stack Developer"></meta>
    </Helmet>
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
        <Row justify="center">
          <Col span={12}>
            <Row>
              <Col span={12}>
                <Title>
                  Hey, I'm André{" "}
                  <span role="img" aria-label="Waving Hand">
                    👋
                  </span>
                </Title>
                <Text
                  css={{
                    fontSize: "1.3rem",
                  }}
                >
                  {data.site.siteMetadata.description}
                </Text>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <GitHubButton
                  href="https://github.com/aferreira44"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Follow @aferreira44 on GitHub"
                >
                  @aferreira44
                </GitHubButton>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    />
    <Divider />
    <PostList />
    {children}
  </Layout>
);
