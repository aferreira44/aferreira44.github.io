import React from "react";
import Layout from "../Layouts/Layout";
import { Row, Col } from "antd";

export default ({ children }) => (
  <Layout>
    <Row justify="center">
      <Col span={12}>{children}</Col>
    </Row>
  </Layout>
);
