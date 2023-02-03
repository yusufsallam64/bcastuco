import Head from 'next/head'

import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing'
// import About from './compoents/About/About'
// import MeetUs from './components/MeetUs/MeetUs'
// import Resources from './components/Resources/Resources'
// import ContactUs from './components/ContactUs/ContactUs'


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
        <Landing />
        <Landing />
        <Landing />
        <Landing />
        <Landing />
        <Landing />
        <Landing />
        <Landing />
        <Landing />
        <Landing />
        <Landing />
        
      </main>
    </>
  )
}
