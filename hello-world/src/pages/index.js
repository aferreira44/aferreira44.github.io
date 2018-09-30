import React from "react"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `purple` }}>
    <h1>Oi!</h1>
    <p>What a World!</p>
    <Link to="/contact/">Contato</Link>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)