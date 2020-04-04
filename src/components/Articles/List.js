import React from "react";
import PropTypes from "prop-types";
import { Typography, Button } from "antd";
import { graphql, StaticQuery, Link } from "gatsby";
import { Row, Col } from "antd";
import { List, Avatar } from "antd";

const { Title } = Typography;

function ArticlesList() {
  return (
    <StaticQuery
      query={graphql`
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
      render={(data) => (
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
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
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
          {/* <Typography gutterBottom align="left" variant="h4" component="h2">
            Latest Posts
          </Typography> */}
        </section>
      )}
    />
  );
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ArticlesList;
