import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  const [title, setTitle] = useState({
    admin: "dashboard",
    acc: "Accident and emergency unit",
    med: "Medical Ward",
    surg: "Surgical Ward",
    ped: "Pediatric Ward",
    mat: "Maternity Ward",
    pharm: "Pharmacy",
    opd: "opd",
    logout: "Logout"
  })

  const [activeTitle, setActiveTitle] = useState('admin');

  return (
    <div className='flex flex-col'>
      {/* Pass the title as a string */}
      <Navbar title={title[activeTitle]} />
      <div className='flex'>
        <Sidebar setTitle={setTitle} title={title} setActiveTitle = {setActiveTitle}  />
        <div className='ml-[20%] w-full'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
