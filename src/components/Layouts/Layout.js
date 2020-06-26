import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { Space, Row, Col, Divider, Layout, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import Menu from "../UI/Menu";

import "antd/dist/antd.css";

//import Footer from '../UI/Footer'
//import Header from '../UI/Header'

const { Footer, Content } = Layout;
const { Title } = Typography;

class MainLayout extends React.Component {
  componentDidMount() {
    /* Google Tag Manager */
    if (
      !["localhost", "s3", "cloudfront"].some((e) => {
        return window.location.hostname.includes(e);
      })
    ) {
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
          "gtm.start": new Date().getTime(),
          event: "gtm.js",
        });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l !== "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-N3Q4DJ");

      const noscript = document.createElement("noscript");
      const iframe = document.createElement("iframe");

      noscript.appendChild(iframe);

      iframe.setAttribute(
        "src",
        "https://www.googletagmanager.com/ns.html?id=GTM-N3Q4DJ"
      );
      iframe.setAttribute("height", "0");
      iframe.setAttribute("width", "0");
      iframe.setAttribute("style", "display:none;visibility:hidden");

      document.body.prepend(noscript);
    }
    /* End Google Tag Manager */
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta
            name="google-site-verification"
            content="Uvks456skSsvBaBg4pM4V_ZvGivMNvpPbtgKcuWWL-E"
          />
        </Helmet>
        <Layout>
          <Row
            css={{
              margin: "50px 0 50px 0",
            }}
          >
            <Col span={6} />
            <Col span={6}>
              <Title
                level={2}
                css={{
                  textAlign: "left",
                }}
              >
                <Link to="/">André Ferreira</Link>
              </Title>
            </Col>
            <Col span={6}>
              <Menu />
            </Col>
            <Col span={6} />
          </Row>
          <Divider />
          <Row justify="center">
            <Content>{children}</Content>
          </Row>
          <Divider />
          <Footer>
            <Row>
              <Col span={6} />
              <Col span={6}>
                <Space size="middle">
                  <a
                    href="https://ko-fi.com/aferreira44"
                    css={{ fontSize: "18px" }}
                  >
                    Ko-fi
                  </a>
                  <a
                    href="https://www.patreon.com/aferreira44"
                    css={{ fontSize: "18px" }}
                  >
                    Patreon
                  </a>
                  <a
                    href="https://aferreira44.substack.com/"
                    css={{ fontSize: "18px" }}
                  >
                    Newsletter
                  </a>
                  <a href="#" css={{ fontSize: "18px" }}>
                    RSS
                  </a>
                </Space>
              </Col>
              <Col span={6}>
                <nav css={{ float: "right" }}>
                  <Space size="middle">
                    <a
                      href="https://github.com/aferreira44"
                      css={{ fontSize: "18px" }}
                    >
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a
                      href="https://twitter.com/aferreira44"
                      css={{ fontSize: "18px" }}
                    >
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a
                      href="https://telegram.me/aferreira44"
                      css={{ fontSize: "18px" }}
                    >
                      <FontAwesomeIcon icon={faTelegram} size="2x" />
                    </a>
                  </Space>
                </nav>
              </Col>
              <Col span={6} />
            </Row>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default MainLayout;
