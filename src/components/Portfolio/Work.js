import React from "react";
import { Row, Col, Typography, Card } from "antd";

const { Meta } = Card;
const { Title } = Typography;

export default () => {
  const works = [
    {
      title: "Title",
      description: "Description",
      url: "https://google.com",
      altImage: "AltDescription",
      coverImage: "http://lorempixel.com.br/300/200",
    },
    {
      title: "Title",
      description: "Description",
      url: "https://google.com",
      altImage: "AltDescription",
      coverImage: "http://lorempixel.com.br/300/200",
    },
    {
      title: "Title",
      description: "Description",
      url: "https://google.com",
      altImage: "AltDescription",
      coverImage: "http://lorempixel.com.br/300/200",
    },
  ];
  return (
    <section>
      <Row>
        <Col span={6} />
        <Col>
          <Title level={2}>Portfolio</Title>
        </Col>
        <Col span={6} />
      </Row>
      <Row>
        <Col span={6} />
        {works.map((work, index) => {
          return (
            <Col span={4} key={index}>
              <a href={work.url}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt={work.altImage} src={work.coverImage} />}
                >
                  <Meta title={work.title} description={work.description} />
                </Card>
              </a>
            </Col>
          );
        })}
        <Col span={6} />
      </Row>
    </section>
  );
};
