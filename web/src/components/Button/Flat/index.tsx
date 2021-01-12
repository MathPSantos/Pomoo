import React from 'react'
import { Props } from './interface'

import { Container } from './styles'

const Flat: React.FC<Props> = ({
  label,
  block = false,
  onClick,
  ...rest
}: Props) => {
  return (
    <Container onClick={onClick} block={block} {...rest}>
      {label}
    </Container>
  )
}

export default Flat
