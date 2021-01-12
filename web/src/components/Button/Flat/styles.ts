import styled from 'styled-components'

import { DefaultButton } from '../Default/styles'

import { StyledProps } from './interface'

export const Container = styled(DefaultButton)<StyledProps>`
  ${({ block }) =>
    block && {
      width: '100%',
      'font-size': '27px',
      'padding-top': '16px',
      'padding-bottom': '16px'
    }}

  @media screen and (min-width: 720px) {
    font: 700 18px Mukta, sans-serif;

    ${({ block }) => block && { 'font-size': '32px' }}
  }
`
