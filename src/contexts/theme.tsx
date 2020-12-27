import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import usePersistedState from '../hooks/usePersistedState'

import { lightTheme, darkTheme } from '../styles/theme/'

type Theme = any
type ThemeContext = { theme: Theme; toggleTheme: () => void }

export const NewThemeContext = React.createContext<ThemeContext>(
  {} as ThemeContext
)

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', lightTheme)

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }

  return (
    <NewThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </NewThemeContext.Provider>
  )
}

export default ThemeContextProvider
