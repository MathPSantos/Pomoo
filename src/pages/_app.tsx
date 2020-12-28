import React from 'react'
import { AppProps } from 'next/app'

import { ThemeContextProvider } from '../contexts/theme'
import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeContextProvider>
  )
}

export default MyApp
