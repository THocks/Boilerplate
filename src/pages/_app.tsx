import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançando - Boilerplate</title>
        <link rel="shortcut icon" href="/" />
        <link rel="apple-touch-icon" href="/" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Eccomerce project single work TypeScript,React,NextJs"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
