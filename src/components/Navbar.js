import Image from 'next/image'
import React from 'react'

const Navbar = ({title, active}) => {
    console.log(title)
  return (
    <header className='flex w-[80%] sticky top-0 ml-[20%] bg-white h-[100px] items-center px-10'>
        <nav className='flex w-full justify-between'>
            <div className='text-black'>{title}</div>
            <ul className='flex w-full items-end justify-end'>
                <li>Notification</li>
                <li>
                    <div className='relative overflow-hidden items-center w-10 h-10'>
                        {/* <Image src={"/images/Profile.png"} fill /> */}
                    </div>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar