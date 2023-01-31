import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Header from '@/components/Header'
import Solutions from '@/components/Solutions'
import GetInTouch from '@/components/GetInTouch'
import News from '@/components/News'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <Solutions /> 
      <GetInTouch />
      <News />
      <Footer />  
    </>
  )
}
