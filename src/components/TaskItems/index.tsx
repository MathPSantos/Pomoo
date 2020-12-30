import React, { useState } from 'react'

import {
  Container,
  NewTaskContainer,
  Content,
  NewTaskContent,
  Info,
  PomooBox,
  Pomoo,
  EditIcon,
  RemoveIcon,
  PlusIcon
} from './styles'

import { Props } from './interface'

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

export const TaskItem: React.FC<Props> = ({
  title,
  pomoos,
  finishedPomoos
}: Props) => {
  const [edit, setEdit] = useState(false)

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
        {!edit ? (
          <>
            <span>{title}</span>

            <Info>
              <PomooBox>{pomooRows}</PomooBox>

              <EditIcon onClick={() => setEdit(true)} />
            </Info>
          </>
        ) : (
          <>
            <textarea
              placeholder="Your text tittle here"
              autoFocus
              rows="3"
              cols="20"
              maxLength="40"
            />

            <Info>
              <PomooBox>{pomooRows}</PomooBox>

              <RemoveIcon onClick={() => setEdit(false)} />
            </Info>
          </>
        )}
      </Content>
    </Container>
  )
}
