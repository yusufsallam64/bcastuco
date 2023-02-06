import Head from 'next/head'

import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing'
import About from './components/About/About'
import MeetUs from './components/MeetUs/MeetUs'
import Resources from './components/Resources/Resources'
import ContactUs from './components/ContactUs/ContactUs'
import Divider from './components/Utility/Divider/Divider'
import Footer from './components/Footer/Footer'

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

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Divider />

        <section>
          <Resources />
        </section>


        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Divider />

        <section>
          <ContactUs />
        </section>


        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Footer />

      </main>
    </>
  )
}
