import React from 'react'

import { Container } from './styles'

import Navbar from '../Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  )
}

export default Layout
