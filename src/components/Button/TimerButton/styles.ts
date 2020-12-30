import styled, { css } from 'styled-components'

import { DefaultButton } from '../Default/styles'

import { StyledProps } from './interface'

const notActiveCss = css`
  background: ${({ theme }) => theme.colors.button.outline.background};
  color: ${({ theme }) => theme.colors.button.outline.typography};

  border: 2px solid ${({ theme }) => theme.colors.button.outline.border};

  opacity: 0.65;
`

export const Container = styled(DefaultButton)<StyledProps>`
  ${({ active }) => (!active ? notActiveCss : '')}
  transition: opacity 0.4s;
`
