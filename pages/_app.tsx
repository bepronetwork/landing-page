import '../styles/styles.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Bepro.network - Web 3.0 codebase protocol</title>
      <meta content="Bepro.network - Web 3.0 codebase protocol" property="og:title" />
      <meta content="A Protocol for Decentralized Development" name="description" />
      <meta content="A Protocol for Decentralized Development" property="og:description" />
      <meta content="Bepro.network - Web 3.0 codebase protocol" property="twitter:title" />
      <link href="../public/favicon.png" rel="shortcut icon" type="image/x-icon" />
      <link href="../public/favicon.png" rel="apple-touch-icon" />
      <script src='https://embed.runkit.com'></script>

    </Head>
    <Component {...pageProps} />
  </>
}
