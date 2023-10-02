import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from "../components/Sidebar"
import Login from './Login'
import Signup from './Signup'
import Attendance from './api/models/attendance'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Attendance />
    </div>
  )
}
