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

      <main>
        <h1 onClick={() => toggleTheme('lightBlue')}>Pomoo</h1>
      </main>
    </div>
  )
}

export default Home
