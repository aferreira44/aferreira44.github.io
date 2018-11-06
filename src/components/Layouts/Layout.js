import React from 'react'
import {Helmet} from "react-helmet";
import Menu from '../UI/Menu'
import Footer from '../UI/Footer'

export default ({ children }) => (
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
    {children}
    <Footer />
  </div>
)