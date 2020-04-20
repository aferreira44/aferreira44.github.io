import React from "react";
import { Link } from "gatsby";
import { Space, Button } from "antd";

export default () => (
  <nav
    css={{
      float: "right",
    }}
  >
    <Space size="middle">
      <Link to="/about">
        <Button>About me</Button>
      </Link>
      <Link to="/blog">
        <Button>Articles</Button>
      </Link>
      <Link to="/portfolio">
        <Button>Portfolio</Button>
      </Link>
      <Link to="/contact">
        <Button>Contact</Button>
      </Link>
    </Space>
  </nav>
);
