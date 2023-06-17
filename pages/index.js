import Image from 'next/image'
import { Inter } from 'next/font/google'
import Dashbord from '@/pages/Dashbord'
import Login from '../Components/Login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col justify-between ${inter.className}`}
    >
      <Login />
    </main>
  )
}
