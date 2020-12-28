import React, { useState, useContext } from 'react'
import Head from 'next/head'

import { NewThemeContext } from '../contexts/theme'

import { Flat, Outline } from '../components/Button'

import { Main } from '../components/Layout/styles'

import { Section, LandContent, Timer } from '../styles/pages/'

type Interval = 0 | 1 | 2

const Home: React.FC = () => {
  const { toggleTheme } = useContext(NewThemeContext)

  const [interval, setInterval] = useState<Interval>(0)
  const [time, setTime] = useState(1500)

  const handleInterval = (value: 0 | 1 | 2) => {
    setInterval(value)

    switch (value) {
      // Pomodoro
      case 0:
        setTime(1500)
        return toggleTheme('red')
        break

      // Small break
      case 1:
        setTime(300)
        return toggleTheme('lightBlue')
        break

      // Long break
      case 2:
        setTime(900)
        return toggleTheme('darkBlue')
        break
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
                {interval === 0 ? (
                  <Flat onClick={() => handleInterval(0)} label="Pomodoro" />
                ) : (
                  <Outline onClick={() => handleInterval(0)} label="Pomodoro" />
                )}

                {interval === 1 ? (
                  <Flat onClick={() => handleInterval(1)} label="Small break" />
                ) : (
                  <Outline
                    onClick={() => handleInterval(1)}
                    label="Small break"
                  />
                )}

                {interval === 2 ? (
                  <Flat onClick={() => handleInterval(2)} label="Long break" />
                ) : (
                  <Outline
                    onClick={() => handleInterval(2)}
                    label="Long break"
                  />
                )}
              </div>

              <span>{time / 60}:00</span>

              <Flat block label="Start" />
            </Timer>
          </LandContent>
        </Section>
      </Main>
    </>
  )
}

export default Home
