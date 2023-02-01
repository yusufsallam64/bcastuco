import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Navbar from './components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>BCA Student Council</title>
        <meta name="description" content="Official site for the 2022-23 Bergen County Academies Student Council" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />

        <h1>
          BCA Student Council
        </h1>
      </main>
    </>
  )
}
