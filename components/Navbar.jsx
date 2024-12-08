import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-white flex items-center justify-end space-x-7 w-full py-7 px-5 shadow-sm shadow-slate-300 drop-shadow-sm'>
      <button>
        <Image src={"/searchIcon.png"} alt='search' height={20} width={20} />
      </button>
      <button className='bg-[#FF2727] px-7 py-2 text-white tracking-wider rounded-3xl'>
        Download
      </button>
      <button>
        <Image src={"/notificationsIcon.png"} alt='profile' height={20} width={20} />
      </button>
      <button className=''>
        <Image src={"/image.png"} alt='profile' height={50} width={50} unoptimized className='rounded-full w-12 h-12' />
      </button>
    </div>
  )
}

export default Navbar