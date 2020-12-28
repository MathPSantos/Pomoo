import React from 'react'
import { AppProps } from 'next/app'

import { ThemeContextProvider } from '../contexts/theme'
import GlobalStyle from '../styles/global'
import Layout from '../components/Layout'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeContextProvider>
  )
}

export default MyApp
