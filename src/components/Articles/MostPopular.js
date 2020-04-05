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
      <Row>
        <Col span={6} />
        <Col>
          <Title level={2}>Most Popular</Title>
        </Col>
        <Col>
          <Link to="/blog">
            <Button css={{ marginLeft: "30px" }}>View All</Button>
          </Link>
        </Col>
        <Col span={6} />
      </Row>
      <Row>
        <Col span={6} />
        <Col>
          <List
            itemLayout="horizontal"
            dataSource={data.allMarkdownRemark.edges}
            renderItem={({ node }) => (
              <div>
                <List.Item key={node.id}>
                  <List.Item.Meta
                    avatar={
                      <ImgWrapper
                        src={`categories/${node.frontmatter.category}.png`}
                      />
                    }
                    title={
                      <Link variant="headline" to={node.frontmatter.slug}>
                        <Title level={4}>{node.frontmatter.title}</Title>
                      </Link>
                    }
                  />
                </List.Item>
                <hr
                  css={{
                    backgroundColor: "#c5c5c5",
                    height: "1px",
                    border: 0,
                  }}
                />
              </div>
            )}
          />
        </Col>
        <Col span={6} />
      </Row>
    </section>
  );
};
