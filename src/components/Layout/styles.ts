import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -moz-box-pack: center;
  justify-content: center;
  -moz-box-align: center;
  align-items: center;
`

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const DefSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DefContent = styled.div`
  width: 100%;
  max-width: 1160px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
