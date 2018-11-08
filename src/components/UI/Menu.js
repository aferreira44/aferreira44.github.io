import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <div css={`
    & nav {
      width: 100%;
      padding: 30px;
      overflow: hidden;
    }

    & ul {
      margin: 0;
      padding: 20px 10px;
      text-align: center;
      list-style-type: none;
    }

    & li {
      display: inline;
      padding: 8px;
    }

    & li a:hover {
      color: #000;
      background-image: none;
    }
    
    // @media screen and (max-width: 600px) {
      // nav { background-color: #000; }
      // nav li:not(:first-child) {display: none;}
    // }
  }
  `}>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        {/* <li><Link to='/blog'>Blog</Link></li> */}
        {/* <li><Link to='/projects'>Projects</Link></li> */}
        {/* <li><Link to='/talks'>Talks</Link></li> */}
        {/* <li><Link to='/art'>Art</Link></li> */}
        {/* <li><Link to='/contact'>Contact</Link></li> */}
      </ul>
    </nav>
  </div>
)