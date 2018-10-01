import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <div css={`
    & nav {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    & li {
      float: left;
    }

    & li a {
      display: block;
      text-align: center;
      padding: 8px 10px;
      text-decoration: none;
    }

    & li a:hover {
      background-color: #111;
    }
  `}>
    <nav>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/projects'>Projects</Link></li>
      <li><Link to='/talks'>Talks</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </nav>
  </div>
)