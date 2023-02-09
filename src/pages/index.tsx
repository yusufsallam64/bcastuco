import Head from 'next/head'

import Navbar from '../components/Navbar/Navbar'
import Landing from '../components/Landing/Landing'
import About from '../components/About/About'
import MeetUs from '../components/MeetUs/MeetUs'
import Resources from '../components/Resources/Resources'
import ContactUs from '../components/ContactUs/ContactUs'
import Footer from '../components/Footer/Footer'
import Divider from '../components/Divider/Divider'

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

        <section>
          <Landing />
        </section>

        <section>
          <About />
        </section>

        <Divider />
        
        <section>
          <MeetUs />
        </section>

        <Divider />

        <section>
          <Resources />
        </section>

        <Divider />

        <section>
          <ContactUs />
        </section>

        <Footer />

      </main>
    </>
  )
}
