import React from 'react'
import {Helmet} from "react-helmet";
import Menu from '../UI/Menu'
import Footer from '../UI/Footer'
import Header from '../UI/Header'

class Layout extends React.Component {

  componentDidMount() {
    /* Google Tag Manager */
    if (!['localhost', 's3', 'cloudfront'].includes(window.location.hostname)) { // TODO: Use env variables for this
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!=='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-N3Q4DJ');

      const noscript = document.createElement('noscript');
      const iframe = document.createElement('iframe');

      noscript.appendChild(iframe);

      iframe.setAttribute("title", "GoogleTagManager");
      iframe.setAttribute("src", "https://www.googletagmanager.com/ns.html?id=GTM-N3Q4DJ");
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
      <div css={`
      max-width: 600px;
      margin: 0 auto;
    `}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Menu />
      <Header />
      { children }
      <Footer />
    </div>
    )
  }
}

export default Layout