import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import CustomChart from '../CustomChart';
import { ProgressCircle } from '../ProgressCircle';
import { messagesData } from '@/util/placeholderData';


function MiddleDashboard() {
    const { setTheme, resolvedTheme} = useTheme();
    const user = JSON.parse(localStorage.getItem("user"))

  return (
    <div className='flex flex-col items-center justify-start space-y-3 py-5 w-3/5 pr-5 h-screen overflow-y-scroll'>
        <div className='w-full px-5 flex items-center justify-between'>
            <div className='flex items-center justify-center -space-x-7 w-1/2'>
                <Image src={'/searchIcon2.png'} alt='search' width={20} height={20} unoptimized className='z-10' />
                <input type='search' className='bg-white rounded-2xl border-0 ring-0 outline-0 py-2 px-10 w-full text-[#8A8A8A] text-sm' placeholder='Search Courses, Documents, Activities...' />
            </div>
            <div className='w-1/2 flex items-center justify-center space-x-3'>
            <Image src={"/lightThemeIcon.png"} alt='light theme' width={20} height={20} unoptimized />
            <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="relative w-11 h-6 bg-[#D40000] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-700" onClick={() => {
                    if (resolvedTheme === "dark") {
                        setTheme("light")
                    }
                    else {
                        setTheme("dark")
                    }
                }}></div>
            </label>
            <Image src={"/darkThemeIcon.png"} alt='light theme' width={18} height={20} unoptimized />
            </div>
        </div>
        <div className='bg-[#D40000] rounded-3xl w-full px-7 py-10 flex flex-col items-start justify-center space-y-5'>
            <span className='font-bold text-2xl'>Welcome back, {user?.displayName}</span>
            <span>You&apos;ve learned 70%  of your goal this week!<br/>
            Keep it up and improve your progress.</span>
        </div>
        <div className='flex items-start justify-start space-x-5 w-full'>
            <div className='w-2/3 h-80'>
                <CustomChart />
            </div>
            <div className='flex flex-col items-start justify-start bg-white rounded-xl p-5 overflow-y-scroll w-1/3 text-[#333333] font-semibold h-80'>
                <span>Completion Progress</span>
                <div className='w-full flex items-center justify-start'>
                    <div className='flex items-start justify-center flex-col'>
                        <span>Algebraic Expressions</span>
                        <span className='text-sm text-[#8A8A8A]'>Chapter 3</span>
                    </div>
                    <ProgressCircle value={75} />
                </div>
                <div className='w-full flex items-center justify-start'>
                    <div className='flex items-start justify-center flex-col'>
                        <span>Algebraic Expressions</span>
                        <span className='text-sm text-[#8A8A8A]'>Chapter 3</span>
                    </div>
                    <ProgressCircle value={91} />
                </div>
                <div className='w-full flex items-center justify-start'>
                    <div className='flex items-start justify-center flex-col'>
                        <span>Algebraic Expressions</span>
                        <span className='text-sm text-[#8A8A8A]'>Chapter 3</span>
                    </div>
                    <ProgressCircle value={25} />
                </div>
                <div className='w-full flex items-center justify-start'>
                    <div className='flex items-start justify-center flex-col'>
                        <span>Algebraic Expressions</span>
                        <span className='text-sm text-[#8A8A8A]'>Chapter 3</span>
                    </div>
                    <ProgressCircle value={25} />
                </div>
                <div className='w-full flex items-center justify-start'>
                    <div className='flex items-start justify-center flex-col'>
                        <span>Algebraic Expressions</span>
                        <span className='text-sm text-[#8A8A8A]'>Chapter 3</span>
                    </div>
                    <ProgressCircle value={25} />
                </div>
            </div>
        </div>
        <div className='flex items-start justify-start space-x-5 w-full'>
            <div className='flex flex-col items-center justify-center p-5 rounded-xl w-2/3 h-80 bg-white'>
                <div className='flex w-full items-center justify-between border-b-2 border-[#ECECEC] pb-3'>
                    <span className='font-semibold text-[#333333]'>Messages</span>
                    <button className='text-[#FF7272] font-semibold'>View All</button>
                </div>
                {messagesData.map((i, index) => (<div key={index} className={`flex items-center justify-between w-full ${index !== 2 && "border-b-2 border-[#ECECEC]"}`}>
                    <div className='flex items-start justify-center space-x-3 p-3'>
                        <Image src={i.image} alt='user' width={24} height={24} unoptimized className='rounded-full' />
                        <div className='flex flex-col items-start justify-start'>
                            <span className='font-semibold text-[#333333]'>{i.name}</span>
                            <span className='text-sm text-[#8A8A8A]'>{i.message}</span>
                            <div className='flex items-center justify-center space-x-2'>
                                {i.document?.map((j, index) => (<div key={index} className='border border-[#FF7272] text-[#FF7272] flex items-center justify-center space-x-1 rounded-xl p-1 px-2'>
                                    <Image src={"/redDocumentIcon.png"} alt='document' width={12} height={10} unoptimized />
                                    <span className='text-xs'>{j}</span>
                                </div>))}
                            </div>
                        </div>
                    </div>
                    <span></span>
                </div>))}
            </div>
            <div className='flex items-start justify-start flex-col w-1/3 bg-white rounded-xl p-5 h-80 overflow-y-scroll space-y-3'>
                <span className='font-semibold text-[#333333] pb-2'>Top Performing Student</span>
                <div className='flex items-center justify-start space-x-3 bg-[#FF7272] p-3 rounded-xl w-full'>
                    <Image src={user?.photoURL} alt='user' width={40} height={40} unoptimized className='rounded-full' />
                    <div className='flex flex-col items-start justify-start text-white'>
                        <span className='font-semibold'>Vyas Giri</span>
                        <span className='text-sm'>9.6/10 POINTS</span>
                    </div>
                </div>
                <div className='flex items-center justify-start space-x-3 bg-[#C54E4E] p-3 rounded-xl w-full'>
                    <Image src={user?.photoURL} alt='user' width={40} height={40} unoptimized className='rounded-full' />
                    <div className='flex flex-col items-start justify-start text-white'>
                        <span className='font-semibold'>Vyas Giri</span>
                        <span className='text-sm'>9.6/10 POINTS</span>
                    </div>
                </div>
                <div className='flex items-center justify-start space-x-3 bg-[#DA3A3A] p-3 rounded-xl w-full'>
                    <Image src={user?.photoURL} alt='user' width={40} height={40} unoptimized className='rounded-full' />
                    <div className='flex flex-col items-start justify-start text-white'>
                        <span className='font-semibold'>Vyas Giri</span>
                        <span className='text-sm'>9.6/10 POINTS</span>
                    </div>
                </div>
                <div className='flex items-center justify-start space-x-3 bg-[#F0F7FF] p-3 rounded-xl w-full'>
                    <Image src={user?.photoURL} alt='user' width={40} height={40} unoptimized className='rounded-full' />
                    <div className='flex flex-col items-start justify-start'>
                        <span className='font-semibold text-black'>Vyas Giri</span>
                        <span className='text-sm text-[#8A8A8A]'>9.6/10 POINTS</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MiddleDashboard