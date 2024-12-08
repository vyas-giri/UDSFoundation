import Image from 'next/image'
import React from 'react'

function RightHeroSection() {
  return (
    <div className='flex flex-col bg-white shadow-sm shadow-slate-300 drop-shadow-2xl py-16 px-5 space-y-7 my-0.5'>
        <div className='flex flex-col items-center justify-center'>
            <span className='font-semibold text-2xl'>YOUR DAILY WORKPLAN</span>
            <span className='text-xl'>Where you need to focus</span>
        </div>
        <div className='flex items-center justify-center space-x-3'>
            <div className='bg-white shadow-sm shadow-slate-300 drop-shadow-2xl p-3 rounded-2xl'>
                <div className='flex items-center justify-center space-x-1'>
                    <span className='font-semibold text-3xl'>2</span>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={"/coursesIcon.png"} alt='assignments' width={10} height={10} />
                        <span className='text-[#B1A991] text-xs'>ASSIGNMENTS</span>
                    </div>
                </div>
                <span>Due Date / <span className='text-[#FF0000]'>Late</span></span>
            </div>
            <div className='bg-white shadow-sm shadow-slate-300 drop-shadow-2xl p-3 rounded-2xl'>
                <div className='flex items-center justify-center space-x-1'>
                    <span className='font-semibold text-3xl'>3</span>
                    <div className='flex flex-col items-center justify-center'>
                        <Image src={"/coursesIcon.png"} alt='assignments' width={10} height={10} />
                        <span className='text-[#B1A991] text-xs'>ASSIGNMENTS</span>
                    </div>
                </div>
                <span>Due Date / <span className=''>Today</span></span>
            </div>
        </div>
    </div>
  )
}

export default RightHeroSection