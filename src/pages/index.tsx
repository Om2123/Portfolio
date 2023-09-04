import { Inter } from 'next/font/google'
import Navbar from './homepage/Navbar'
import Profile from './homepage/Profile'
import Footer from './homepage/Footer'
import Contact from './homepage/Contact'
import Projects from './homepage/Projects'
import About from './homepage/About'
import Experience from './homepage/Experience'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-stone-100'>
    <Navbar/>
    <Profile/>
    <About/>
    <Experience/>
    <Projects/>
    {/* <Contact/> */}
    <Footer/>
    </div>
  )
}
