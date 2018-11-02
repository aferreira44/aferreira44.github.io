import React from 'react'
import HomeLayout from "../layouts/HomeLayout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default () => (
  <HomeLayout>
    <h1>André Ferreira</h1>
    <h2>Full Stack Developer</h2>
    <h4>Programming, Blockchain and more</h4>
    <FontAwesomeIcon icon={faGithub} />
    <FontAwesomeIcon icon={faTwitter} />
    <FontAwesomeIcon icon={faFacebook} />
    <FontAwesomeIcon icon={faInstagram} />
    <FontAwesomeIcon icon={faLinkedin} />
  </HomeLayout>
)