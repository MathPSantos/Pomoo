import React from 'react'

import { Container, Content, GithubIcon, SettingsIcon } from './styles'

import { Flat } from '../Button/'

const Navbar: React.FC = () => {
  return (
    <Container>
      <Content>
        <span>Pomoo</span>

        <div className="links-container">
          <div className="icons">
            {/* <SettingsIcon /> */}

            <GithubIcon
              onClick={() =>
                window.open('https://github.com/MathPSantos/Pomoo', '_blank')
              }
            />
          </div>

          <Flat label="Donate" />
        </div>
      </Content>
    </Container>
  )
}

export default Navbar
