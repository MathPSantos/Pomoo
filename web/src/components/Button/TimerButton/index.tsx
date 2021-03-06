import React from 'react'
import { Props } from './interface'

import { Container } from './styles'

const TimerButton: React.FC<Props> = ({ label, onClick, ...rest }: Props) => {
  return (
    <Container onClick={onClick} {...rest}>
      {label}
    </Container>
  )
}

export default TimerButton
