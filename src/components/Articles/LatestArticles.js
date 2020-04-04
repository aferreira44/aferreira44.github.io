import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Row, Col, List, Typography, Button } from "antd";
import ImgWrapper from "../utils/ImgWrapper";

const { Title } = Typography;

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 5
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              category
            }
          }
        }
      }
    }
  `);
  return (
    <section>
      <Row justify="center">
        <Col span={3}>
          <Title level={2}>Latest Articles</Title>
        </Col>
        <Col span={9}>
          <Button>View All</Button>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={12}>
          <List
            itemLayout="horizontal"
            dataSource={data.allMarkdownRemark.edges}
            renderItem={({ node }) => (
              <List.Item key={node.id}>
                <List.Item.Meta
                  avatar={
                    <ImgWrapper
                      src={`categories/${node.frontmatter.category}.png`}
                    />
                  }
                  title={
                    <Link variant="headline" to={node.frontmatter.slug}>
                      {node.frontmatter.title}
                    </Link>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </section>
  );
};
