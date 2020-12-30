import React from 'react'

import {
  Container,
  NewTaskContainer,
  Content,
  NewTaskContent,
  Info,
  PomooBox,
  Pomoo,
  EditIcon,
  PlusIcon
} from './styles'

import { Props, PomooProps } from './interface'

export const NewTaskItem: React.FC = () => {
  return (
    <NewTaskContainer>
      <NewTaskContent>
        <PlusIcon />

        <span>Add new task</span>
      </NewTaskContent>
    </NewTaskContainer>
  )
}

export const TaskItem: React.FC<Props> = (
  { title, pomoos, finishedPomoos }: Props,
  { done }: PomooProps
) => {
  const pomooRows = []

  for (let i = 0; i < pomoos; i++) {
    const done = finishedPomoos - 1

    if (i <= done) {
      pomooRows.push(<Pomoo done={true} key={i} />)
    } else {
      pomooRows.push(<Pomoo done={false} key={i} />)
    }
  }

  return (
    <Container>
      <Content>
        <span>{title}</span>

        <Info>
          <PomooBox>{pomooRows}</PomooBox>

          <EditIcon />
        </Info>
      </Content>
    </Container>
  )
}
