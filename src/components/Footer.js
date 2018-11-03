import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default () => (
  <div css={`
    & footer {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 30px;
      text-align: center;
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
      <nav>
        <ul>
          <li><a href="https://github.com/aferreira44" target="blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
          <li><a href="https://twitter.com/aferreira44" target="blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></li>
          <li><a href="https://facebook.com/aferreira44" target="blank"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></li>
          <li><a href="https://instagram.com/aferreira44" target="blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></li>
          <li><a href="https://linkedin.com/in/aferreira44" target="blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
        </ul>
      </nav>
    </footer>
  </div>
)