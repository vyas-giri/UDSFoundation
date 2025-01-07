import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Donate() {
  return (
    <div className='bg-white'>
        <Navbar />
        <div className='bg-[#861721] text-center font-bold tracking-wider text-lg'>
            <span className='text-[#042D41]'>Donate <span className='text-white'>For A Cause</span></span>
        </div>
        <div className='flex items-center justify-center flex-col -space-y-32 pb-14'>
            <Image src={'/donationBanner.png'} alt='banner' width={800} height={800} unoptimized className='w-screen h-[70vh] bg-gray-400 opacity-90' />
            <div className='flex items-center justify-between w-[80%] opacity-100 z-10'>
                <Image src={"/redDotsBlock.png"} alt='image' width={40} height={40} unoptimized />
                <span className='text-3xl text-black font-bold text-center'>“Empower a Child&apos;s Future Through <br/> Education”</span>
                <Image src={"/redDotsBlock.png"} alt='image' width={40} height={40} unoptimized />
            </div>
        </div>
        <div className='flex flex-col items-center justify-center space-y-10 pt-5 text-black'>
            <Link href={"#donate"} className='bg-[#861721] text-white p-3 px-10 font-semibold hover:text-cyan-400'>
                Donate Now
            </Link>
            <div className='flex items-center justify-between w-[80%]'>
                <div className='flex flex-col items-center justify-center text-[#042D41]'>
                    <span className='text-[#861721] font-semibold'>500 INR</span>
                    <span className='w-48 text-center'>can provide school supplies for one child for an entire semester.</span>
                </div>
                <div className='flex flex-col items-center justify-center text-[#042D41]'>
                    <span className='text-[#861721] font-semibold'>1000 INR</span>
                    <span className='w-48 text-center'>can provide a family with a health kit that includes basic medical supplies and hygiene products.</span>
                </div>
                <div className='flex flex-col items-center justify-center text-[#042D41]'>
                    <span className='text-[#861721] font-semibold'>3000 INR</span>
                    <span className='w-48 text-center'>can fund a vocational training course for one person.</span>
                </div>
            </div>
            <span className='text-center w-[75%] text-[#042D41] font-semibold pt-5'>“Your donation goes directly towards supporting our education, health, and skills development initiatives. With your help, we can provide scholarships, school supplies, and vocational training to those who need it most. Your donation can make the difference between a child being able to attend school or not, or a family being able to access basic medical care.”</span>
            <div className='flex items-center justify-between w-[80%]'>
                <div className='bg-[#E6E6E6] rounded-xl flex flex-col items-center justify-center p-3 shadow-md shadow-black'>
                    <Image src={"/support.png"} alt='support' width={50} height={50} unoptimized />
                    <span className='w-52 text-center text-[#171725]'>All our efforts are made possible only because of your support</span>
                </div>
                <div className='bg-[#E6E6E6] rounded-xl flex flex-col items-center justify-center p-3 shadow-md shadow-black'>
                    <Image src={"/support2.png"} alt='support' width={50} height={50} unoptimized />
                    <span className='w-52 text-center text-[#171725]'>All donations above ₹500 are tax deductible under section 80G of income tax act</span>
                </div>
                <div className='bg-[#E6E6E6] rounded-xl flex flex-col items-center justify-center p-3 shadow-md shadow-black'>
                    <Image src={"/support3.png"} alt='support' width={50} height={50} unoptimized />
                    <span className='w-52 text-center text-[#171725]'>Your transactions are completely safe and secure</span>
                </div>
            </div>
            <div id='donate' className='flex items-center justify-center flex-col bg-[url("/donationBanner2.png")] bg-fixed bg-cover bg-no-repeat w-full'>
                <div className='flex items-center justify-between w-[80%] py-10'>
                    <div className='flex flex-col items-center justify-center w-60 rounded-xl -space-y-7'>
                        <div className='bg-white text-[#861721] p-2 px-5 rounded-xl font-semibold text-center w-40 z-10 text-sm'>Scan the QR below</div>
                        <div className='bg-[#861721] h-32 rounded-t-xl w-full'></div>
                        <Image src={"/sampleQr.png"} alt='qr' width={120} height={120} unoptimized className='absolute' />
                        <div className='bg-white h-52 rounded-b-xl w-full'></div>
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-10'>
                        <div className='text-lg font-semibold text-white bg-[#861721] p-2 px-7 rounded-xl'>Be a Changemaker!</div>
                        <Image src={"/accountDetails.png"} alt='accDetails' width={350} height={350} unoptimized className='rounded-xl' />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Donate