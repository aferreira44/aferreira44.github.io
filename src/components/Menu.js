import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <div>
    <Link to='/'>Home</Link>
    <Link to='/about'>Sobre mim</Link>
    <Link to='/blog'>Blog</Link>
    <Link to='/projects'>Projetos</Link>
    <Link to='/talks'>Palestras</Link>
    <Link to='/contact'>Contato</Link>
  </div>
)