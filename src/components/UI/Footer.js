import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebook, faInstagram, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

export default () => (
  <div css={`
    & footer {
      padding: 30px;
      text-align: center;
    }

    & p {
      margin: 0;
    }

    & ul {
      margin: 0;
      padding: 20px 10px;
      text-align: center;
      list-style-type: none;
    }

    & li {
      display: inline;
      padding: 12px;
    }

    & li a {
      background-image: none;
    }

    & li a:hover {
      color: #000;
    }
  `}>
    <footer>
      <p>STAY CONNECTED</p>
      <nav>
        <ul>
          <li><a href="https://github.com/aferreira44" target="blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
          <li><a href="https://medium.com/@aferreira44" target="blank"><FontAwesomeIcon icon={faMedium} size="2x" /></a></li>
          <li><a href="https://twitter.com/aferreira44" target="blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></li>
          <li><a href="https://facebook.com/aferreira44" target="blank"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
          <li><a href="https://instagram.com/aferreira44" target="blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></li>
          <li><a href="https://linkedin.com/in/aferreira44" target="blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
        </ul>
      </nav>
    </footer>
  </div>
)