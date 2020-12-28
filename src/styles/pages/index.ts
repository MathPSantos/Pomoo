import styled from 'styled-components'

import { DefSection, DefContent } from '../../components/Layout/styles'

export const Section = styled(DefSection)`
  @media screen and (min-width: 720px) {
    height: 100vh;
  }
`

export const LandContent = styled(DefContent)`
  padding-top: 121px;

  @media screen and (min-width: 720px) {
    padding-top: 0;
  }
`

export const Timer = styled.div`
  width: 100%;
  max-width: 430px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .intervals-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    font: 800 132px Mukta, sans-serif;

    @media screen and (min-width: 720px) {
      font: 800 176px Mukta, sans-serif;
    }
  }
`
