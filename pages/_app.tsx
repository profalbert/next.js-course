import '../styles/main.scss'
import NextNprogress from 'nextjs-progressbar'
import { AppProps } from 'next/app'
import { NextPage } from 'next'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <NextNprogress
        color={'yellow'}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
      {/* <style jsx global>
        {`
          body {
            font-family: 'Roboto', sans-serif;
          }
        `}
      </style> */}
    </>
  )
}

export default MyApp
