import '../styles/styles.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'
import BeproMeta from '../assets/meta-bepro.png'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Bepro.network | Web 3.0 codebase protocol</title>
      <meta content="Bepro.network | Web 3.0 codebase protocol" property="og:title" />
      <meta content={BeproMeta.src} property='og:image'/>
      <meta content="A Protocol for Decentralized Development" name="description" />
      <meta content="A Protocol for Decentralized Development" property="og:description" />
      <meta content="Bepro.network | Web 3.0 codebase protocol" property="twitter:title" />
      <meta content={BeproMeta.src} property="twitter:image" />
      <link href="/favicon.ico" rel="shortcut icon"  />
    </Head>
    
    {/* eslint-disable-next-line @next/next/no-sync-scripts */}
    <script src='https://embed.runkit.com'></script>

    <Component {...pageProps} />
  </>
}
