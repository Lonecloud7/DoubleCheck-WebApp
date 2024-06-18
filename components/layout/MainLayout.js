import React from 'react'
import Head from 'next/head'
// import { Outfit } from 'next/font/google'
import { Inter } from 'next/font/google'
import Header from './header/Header'
import MobileHeader from './header/MobileHeader'
import Footer from './footer/Footer'


const inter = Inter({ subsets: ['latin'] })

const Layout = ({
  children,
  user,
  loading = false,
  title,
  desc,
  showHeader,
  showFooter,
  timer,
}) => {
  return (
    <>
      {' '}
      <Head>
        <title>{title ? `${title} | Double Check` : 'Double Check'}</title>
        <meta
          name="description"
          content={
            desc
              ? `${desc}`
              : 'Double Check! Make sure your surface level security is protected!'
          }
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        //control all base background color here
        //bg-white-700 is a placeholder incase i go back to white
        className={`${inter.className} bg-neutral`}
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          maxWidth: '100vw',
          overflowX: 'hidden',
        }}
      >
        {showHeader && <Header timer={timer} />}
        {showHeader && <MobileHeader timer={timer} />}
        {children}
        {showFooter && <Footer />}
      </main>
    </>
  )
}

export default Layout
