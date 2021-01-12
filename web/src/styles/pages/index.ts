import styled from 'styled-components'

import { DefSection, DefContent } from '../../components/Layout/styles'

export const Section = styled(DefSection)`
  @media screen and (min-width: 720px) {
    min-height: 100vh;
  }
`

export const LandContent = styled(DefContent)`
  padding-top: 20px;
  align-items: center;

  @media screen and (max-width: 1049px) {
    flex-direction: column;
    justify-content: center;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media screen and (min-width: 1050px) {
    flex-direction: row;
    justify-content: space-between;
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

export const Tasks = styled.div`
  width: 100%;
  max-width: 430px;

  margin-top: 44px;
  margin-left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media screen and (min-width: 1050px) {
    max-width: 544px;

    margin-top: 0;
    margin-left: 32px;
  }
`
export const TaskItemsGrid = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  > div + div {
    margin-top: 20px;
  }

  @media screen and (min-width: 1050px) {
    max-height: 580px;
    width: 564px;
    overflow-y: auto;

    display: grid;
    grid-template-columns: 256px 256px;
    grid-auto-rows: 256px;
    grid-column-gap: 32px;
    grid-row-gap: 32px;

    > div + div {
      margin-top: 0;
    }

    &::-webkit-scrollbar {
      width: 6px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.2);
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #ffffff;
      border-radius: 3px;
    }
  }
`
