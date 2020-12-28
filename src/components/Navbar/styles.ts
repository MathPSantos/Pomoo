import styled, { css } from 'styled-components'

import { FiSettings, FiGithub } from '../../styles/icons'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1160px;
  padding: 15px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font: 800 28px Mukta, sans-serif;
  }

  .links-container {
    display: flex;
    align-items: center;

    .icons {
      display: flex;
      justify-content: center;
      align-items: center;

      svg + svg {
        margin-left: 12px;
      }
    }

    button {
      padding: 6px 12px;
      margin-left: 24px;

      background: ${({ theme }) => theme.colors.background.secondary};
      color: ${({ theme }) => theme.colors.typography.primary};
      font: 700 18px Mukta, sans-serif;

      border: none;
      border-radius: 4px;

      cursor: pointer;
      opacity: 0.95;
      transition: 0.4s all;

      &:hover {
        opacity: 1;
      }
    }
  }
`

const iconCSS = css`
  flex-shrink: 0;

  width: 24px;
  height: 24px;

  color: ${({ theme }) => theme.colors.background.secondary};

  cursor: pointer;
  opacity: 0.95;
  transition: 0.4s all;

  &:hover {
    opacity: 1;
  }
`

export const GithubIcon = styled(FiGithub)`
  ${iconCSS}
`

export const SettingsIcon = styled(FiSettings)`
  ${iconCSS}
`
