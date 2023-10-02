import Image from 'next/image'
import React from 'react'

const DisCard = ({text, src}) => {
  return (
    <div>
        <div className='flex items-center bg-white shadow-lg w-[250px] h-[100px] px-3 py-3 flex-nowrap'>
            <div className='rounded w-10 h-10 items-center relative overflow-hidden'>
                <Image src={src} alt='icon' fill/>
            </div>
            <div>
                <p className='text-black whitespace-normal justify-center capitalize'>
                    {text}
                </p>
            </div>
        </div>
    </div>
  )
}

export default DisCard