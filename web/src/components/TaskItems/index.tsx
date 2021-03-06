import React, { useState } from 'react'

import {
  Container,
  NewTaskContainer,
  Content,
  NewTaskContent,
  Info,
  InfoEdit,
  PomooBox,
  PomooEdit,
  Pomoo,
  EditIcon,
  RemoveIcon,
  PlusIcon,
  MinusIcon
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
  const [pomoosQty, setPomoosQty] = useState(1)

  const pomooRows = []

  for (let i = 0; i < pomoos; i++) {
    const donePomoos = finishedPomoos - 1

    if (i <= donePomoos) {
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
              rows={3}
              cols={20}
              maxLength={40}
            />

            <InfoEdit>
              <PomooEdit>
                <button
                  disabled={pomoosQty <= 0}
                  onClick={() => setPomoosQty(pomoosQty - 1)}
                >
                  <MinusIcon />
                </button>

                <p>{pomoosQty}</p>

                <button
                  disabled={pomoosQty >= 12}
                  onClick={() => setPomoosQty(pomoosQty + 1)}
                >
                  <PlusIcon />
                </button>
              </PomooEdit>

              <div className="bottom-tab">
                <RemoveIcon />

                <div className="right-tab">
                  <p className="cancel" onClick={() => setEdit(false)}>
                    Cancel
                  </p>

                  <p className="save">Save</p>
                </div>
              </div>
            </InfoEdit>
          </>
        )}
      </Content>
    </Container>
  )
}
