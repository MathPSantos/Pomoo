import styled from 'styled-components'

export const DefaultButton = styled.button`
  padding: 6px 12px;

  background: ${({ theme }) => theme.colors.button.flat.background};
  color: ${({ theme }) => theme.colors.button.flat.typography};
  font: 700 14px Mukta, sans-serif;

  border: 4px solid ${({ theme }) => theme.colors.button.flat.border};
  border-radius: 4px;

  cursor: pointer;
  opacity: 0.95;
  transition: 0.4s all;

  &:hover {
    opacity: 1;
  }

  @media screen and (min-width: 720px) {
    font: 700 18px Mukta, sans-serif;
  }
`
