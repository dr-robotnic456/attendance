import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const Sidebar = ({title, setTitle, setActiveTitle}) => {
  const router = useRouter()
  const {pathname} = router;

  const isActive = (path) => {
    setActiveTitle(title[path]);
    return pathname === path;
  };

  return (
    <div className='w-[20%] flex fixed left-0 top-0 h-screen'>
        <div className='bg-[#119D56] w-full flex py-10'>
            <ul className='w-full flex flex-col text-white capitalize'>
                <Link href="Dashboard"><li className={`py-3 hover:bg-[#fecb06] px-5 uppercase ${isActive("admin") ? "bg-[#fecb06]": ""}`}>{title.admin}</li></Link>

                <Link href="Accident"><li className={`py-3 hover:bg-[#fecb06] px-5 uppercase ${isActive("/Accident") ? "bg-[#fecb06]": ""}`} >{title.acc}</li></Link>

                <Link href="Medical"><li className={`py-3 hover:bg-[#fecb06] px-5 uppercase ${isActive("/Medical") ? "bg-[#fecb06]": ""}`} >{title.med}</li></Link>

                <Link href="Surgical"><li className={`py-3 hover:bg-[#fecb06] px-5 uppercase ${isActive("/Surgical") ? "bg-[#fecb06]": ""}`} >{title.surg}</li></Link>

                <Link href="Pediatric"><li className={`py-3 hover:bg-[#fecb06] px-5 uppercase ${isActive("/Pediatric") ? "bg-[#fecb06]": ""}`} >{title.ped}</li></Link>

                <Link href="Maternity"><li className={`py-3 hover:bg-[#fecb06] px-5 uppercase ${isActive("/Maternity") ? "bg-[#fecb06]": ""}`} >{title.mat}</li></Link>

                <Link href="Pharmacy"><li className={`py-3 hover:bg-[#fecb06] px-5 uppercase ${isActive("/Pharmacy") ? "bg-[#fecb06]": ""}`} >{title.pharm}</li></Link>

                <Link href="Opd"><li className={`py-3 hover:bg-[#fecb06] px-5 uppercase ${isActive("/Opd") ? "bg-[#fecb06]": ""}`} >{title.opd}</li></Link>

                <Link href="#"><li className={`py-3 hover:bg-[#fecb06] px-5 uppercase `} >{title.logout}</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar