"use client";
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import withAuth from '@/util/authHoc'
import { testsData } from '@/util/placeholderData';
import Link from 'next/link';
import React from 'react'

function Tests() {

  return (
    <div className='bg-[#F0F7FF]'>
        <Navbar />
        <div className='flex items-center justify-center w-full flex-col space-y-10 p-10'>
            <span className='text-[#D40000] text-2xl font-bold'>Tests</span>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {testsData?.map((test, index) => (

                    <Link href={`/tests/${test.id}`} key={test.id} className='bg-white text-[#333333] rounded-xl shadow-md p-5 flex flex-col items-center space-y-2 justify-center'>
                        <span className='text-lg font-bold'>{test.name}</span>
                        <span className='text-sm'>Subject: {test.subject}</span>
                        <span className='text-sm'>Duration: {test.duration}</span>
                        <span className='text-xs font-bold text-[#D40000]'>Syllabus: {test.syllabus}</span>
                    </Link>
                ))}
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default withAuth(Tests)