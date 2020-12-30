import styled, { css } from 'styled-components'

import { FiEdit, FiPlus } from '../../styles/icons'

import { PomooStyledProps } from './interface'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 172px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 4px solid ${({ theme }) => theme.colors.background.secondary};
  border-radius: 8px;

  @media screen and (min-width: 720px) {
    min-height: intial;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;
  min-height: 172px;

  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  span {
    font-size: 24px;
  }
`

export const Info = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Pomoo = styled.div<PomooStyledProps>`
  position: relative;

  width: 18px;
  height: 18px;

  border: 2px solid ${({ theme }) => theme.colors.background.secondary};
  border-radius: 50%;
  opacity: ${({ done }) => (done ? 1 : 0.4)};

  &:before {
    content: '';

    display: ${({ done }) => (done ? 'block' : 'none')};

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.colors.background.secondary};

    border-radius: 50%;
  }
`

export const PomooBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${Pomoo} + ${Pomoo} {
    margin-left: 6px;
  }
`

const iconCSS = css`
  flex-shrink: 0;

  width: 18px;
  height: 18px;

  color: ${({ theme }) => theme.colors.background.secondary};

  cursor: pointer;
  opacity: 0.95;
  transition: 0.4s all;

  &:hover {
    opacity: 1;
  }
`

export const EditIcon = styled(FiEdit)`
  ${iconCSS}
`

// NewTask

export const NewTaskContainer = styled(Container)`
  min-height: 105px;

  border: 2px dashed #ffffff;

  cursor: pointer;
  opacity: 0.5;
  transition: 0.3s all;

  &:hover {
    opacity: 1;
  }
`

export const NewTaskContent = styled(Content)`
  min-height: 105px;

  padding: 0;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  span {
    font: 600 20px Mukta, sans-serif;
  }
`

export const PlusIcon = styled(FiPlus)`
  width: 18px;
  height: 18px;

  color: ${({ theme }) => theme.colors.background.secondary};
`
