import React, { useEffect, useState, useContext, useRef } from 'react'
import Head from 'next/head'

import { NewThemeContext } from '../contexts/theme'

import { Flat, Outline } from '../components/Button'

import { Main } from '../components/Layout/styles'

import { Section, LandContent, Timer } from '../styles/pages/'

type Session = 0 | 1 | 2

const Home: React.FC = () => {
  const { toggleTheme } = useContext(NewThemeContext)

  const audioElement = useRef(null)
  const [intervalId, setIntervalId] = useState(null)
  const [session, setSession] = useState<Session>(0)
  const [timeLeft, setTimeLeft] = useState(60 * 25)

  const isStarted = intervalId !== null

  const handleSession = (value: 0 | 1 | 2) => {
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
                {session === 0 ? (
                  <Flat onClick={() => handleSession(0)} label="Pomodoro" />
                ) : (
                  <Outline onClick={() => handleSession(0)} label="Pomodoro" />
                )}

                {session === 1 ? (
                  <Flat onClick={() => handleSession(1)} label="Small break" />
                ) : (
                  <Outline
                    onClick={() => handleSession(1)}
                    label="Small break"
                  />
                )}

                {session === 2 ? (
                  <Flat onClick={() => handleSession(2)} label="Long break" />
                ) : (
                  <Outline
                    onClick={() => handleSession(2)}
                    label="Long break"
                  />
                )}
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

            <audio ref={audioElement}>
              <source
                src="https://onlineclock.net/audio/options/default.mp3"
                type="audio/mpeg"
              />
            </audio>
          </LandContent>
        </Section>
      </Main>
    </>
  )
}

export default Home
