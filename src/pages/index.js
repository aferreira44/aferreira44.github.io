import React from 'react'
import HomeLayout from "../layouts/HomeLayout"

export default () => (
  <div css={`
    & h1, h2, p {
      text-align: center;
    }

    & h1 {
      margin: 0;
    }
  }
  `}>
    <HomeLayout>
      <h1>André Ferreira</h1>
      <h2>Full Stack Developer</h2>
      <p>Programming, Blockchain, AI and Machine Learning, Open Source, GNU/Linux, Privacy and Freedom</p>
    </HomeLayout>
  </div>
)