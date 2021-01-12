import React, { useEffect, useState, useContext, useRef } from 'react'
import Head from 'next/head'

import { NewThemeContext } from '../contexts/theme'

import { Main } from '../components/Layout/styles'
import { Flat, TimerButton } from '../components/Button'
import { TaskItem, NewTaskItem } from '../components/TaskItems'
import { Props as TaskProps } from '../components/TaskItems/interface'

import {
  Section,
  LandContent,
  Timer,
  Tasks,
  TaskItemsGrid
} from '../styles/pages/'

type Session = 0 | 1 | 2

const Home: React.FC = () => {
  const { toggleTheme } = useContext(NewThemeContext)

  const audioElement = useRef(null)
  const [intervalId, setIntervalId] = useState(null)
  const [session, setSession] = useState<Session>(0)
  const [timeLeft, setTimeLeft] = useState(60 * 25)

  const [tasks, setTasks] = useState<TaskProps[]>([])

  const isStarted = intervalId !== null

  useEffect(() => {
    const initialTasks = [
      {
        title: 'Do math homework',
        pomoos: 4,
        finishedPomoos: 1
      },
      {
        title: 'Clean bedroom',
        pomoos: 2,
        finishedPomoos: 1
      },
      {
        title: 'Have a lunch',
        pomoos: 6,
        finishedPomoos: 2
      }
    ]

    setTasks(initialTasks)
  }, [])

  const handleSession = (value: Session) => {
    setSession(value)

    if (isStarted) {
      clearInterval(intervalId)
      setIntervalId(null)
    }

    switch (value) {
      // Pomodoro
      case 0:
        setTimeLeft(60 * 25)
        return toggleTheme('red')
        break

      // Small break
      case 1:
        setTimeLeft(60 * 5)
        return toggleTheme('lightBlue')
        break

      // Long break
      case 2:
        setTimeLeft(60 * 15)
        return toggleTheme('darkBlue')
        break
    }
  }

  useEffect(() => {
    if (timeLeft === 0) {
      audioElement.current.play()

      if (session === 0) handleSession(1)
      else handleSession(0)
    }
  }, [timeLeft])

  const handleStartStopClick = () => {
    if (isStarted) {
      clearInterval(intervalId)
      setIntervalId(null)
    } else {
      const newIntervalId = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1)
      }, 100)
      setIntervalId(newIntervalId)
    }
  }

  return (
    <>
      <Head>
        <title>Pomooo</title>
      </Head>

      <Main>
        <Section>
          <LandContent>
            <Timer>
              <div className="intervals-container">
                <TimerButton
                  active={session === 0}
                  onClick={() => handleSession(0)}
                  label="Pomodoro"
                />

                <TimerButton
                  active={session === 1}
                  onClick={() => handleSession(1)}
                  label="Small break"
                />

                <TimerButton
                  active={session === 2}
                  onClick={() => handleSession(2)}
                  label="Long break"
                />
              </div>

              <span>
                {new Date(timeLeft * 1000).toISOString().substr(14, 5)}
              </span>

              <Flat
                block
                label={isStarted ? 'Stop' : 'Start'}
                onClick={handleStartStopClick}
              />
            </Timer>

            <Tasks>
              <h2>Tasks</h2>

              <TaskItemsGrid>
                {tasks.map((item, index) => (
                  <TaskItem
                    key={index}
                    title={item.title}
                    pomoos={item.pomoos}
                    finishedPomoos={item.finishedPomoos}
                  />
                ))}
                <NewTaskItem />
              </TaskItemsGrid>
            </Tasks>
          </LandContent>

          <audio ref={audioElement}>
            <source
              src="https://onlineclock.net/audio/options/default.mp3"
              type="audio/mpeg"
            />
          </audio>
        </Section>
      </Main>
    </>
  )
}

export default Home
