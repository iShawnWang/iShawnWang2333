import type { AppProps } from 'next/app'
import '../styles/global.scss'
import 'papercss/dist/paper.css'
import 'normalize.css/normalize.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp