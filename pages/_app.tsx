import type { AppProps } from 'next/app'
import 'papercss/dist/paper.css'
import 'normalize.css/normalize.css'
import '../styles/global.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
