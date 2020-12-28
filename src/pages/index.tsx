import React, { useContext } from 'react'
import Head from 'next/head'

import { NewThemeContext } from '../contexts/theme'

const Home: React.FC = () => {
  const { toggleTheme } = useContext(NewThemeContext)

  return (
    <div>
      <Head>
        <title>Pomooo</title>
      </Head>

      <main></main>
    </div>
  )
}

export default Home
