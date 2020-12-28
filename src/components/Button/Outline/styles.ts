import styled from 'styled-components'

import { DefaultButton } from '../Default/styles'

import { StyledProps } from './interface'

export const Container = styled(DefaultButton)<StyledProps>`
  background: ${({ theme }) => theme.colors.button.outline.background};
  color: ${({ theme }) => theme.colors.button.outline.typography};

  border: 2px solid ${({ theme }) => theme.colors.button.outline.border};

  opacity: 0.65;
`
