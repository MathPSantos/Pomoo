import React, { useState } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import { redTheme, lightBlueTheme, darkBlueTheme } from '../styles/theme/'

type Theme = any
type ThemeContext = { theme: Theme; toggleTheme: (color: ThemeColor) => void }

export const NewThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
)

type ThemeColor = 'red' | 'lightBlue' | 'darkBlue'

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(redTheme)

  const toggleTheme = (color: ThemeColor): void => {
    if (color === 'red') setTheme(redTheme)

    if (color === 'lightBlue') setTheme(lightBlueTheme)

    if (color === 'darkBlue') setTheme(darkBlueTheme)
  }

  return (
    <NewThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </NewThemeContext.Provider>
  )
}

export default ThemeContextProvider
