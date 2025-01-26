import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
// import { HashLink } from 'react-router-hash-link'

function Footer() {
  return (
    <div className='flex items-center justify-center font-light bg-[#861721] w-full'>
    <div className="pt-10 ab:py-10 w-[90%] drop-shadow-md shadow-black text-white text-xs sm:text-base">
      <div className="flex items-start justify-start ab:pb-20 border-opacity-55 pb-5">
        <div className="flex space-y-3 items-start justify-start text-sm flex-col">
          <span className="text-[#FFC107] tracking-wider text-3xl font-extralight">
            <Image src={"/udsLogo.png"} alt='logo' width={300} height={300} unoptimized />
          </span>
          <span className='w-1/2 text-sm'>UDYA DBANU SAHASRABHA FOUNDATION, we are dedicated to transforming communities through knowledge, skills, and compassion.</span>
          <div className="flex flex-col space-y-5 tracking-wider font-extralight">
            <span className='font-semibold text-xl'>Subscribe to our newsletter</span>
            <div className='border border-black w-fit'>
              <input name='email' type='email' placeholder='Your Email Address' className='outline-0 ring-0 text-black p-3 bg-transparent' />
              <button className='bg-[#042D41] p-3 px-5'>&#11166;</button>
            </div>
          </div>
        </div>
        <div className="flex sm:items-start space-x-10 justify-start text-sm font-light">
          <div className="flex flex-col items-start justify-start space-y-7">
            <span className='text-2xl font-semibold'>Quick <span className='text-[#042D41]'>Links</span></span>
            <Link href="/" className="hover:text-[#FFC107]">
              <span>Mission</span>
            </Link>
            <Link href={"/"}>
              <span className="hover:text-[#FFC107]">
                <span>Contact Us</span>
              </span>
            </Link>
            <Link href="/" className="hover:text-[#FFC107]">
              <span>Privacy Policy</span>
            </Link>
            <Link href={"/"}>
              <span className="hover:text-[#FFC107]">
                <span>Terms & Conditions</span>
              </span>
            </Link>
            <Link href={"/"}>
              <span className="hover:text-[#FFC107]">
                <span>Refund Policy</span>
              </span>
            </Link>
          </div>
          <div className="flex flex-col items-start justify-start space-y-7">
            <span className='text-2xl font-semibold'>Contact <span className='text-[#042D41]'>Us</span></span>
            <a href="/" className="hover:text-[#FFC107] flex items-start justify-center space-x-2">
              <Image src={"/locationIcon.png"} alt='address' width={10} height={20} unoptimized className='pt-1' />
              <span className='w-56'>Floor Grd, Kumbharwada 4th Wad KK Krishnan Menan Marg Dharavi S.O Mumbai</span>
            </a>
            <div className="flex items-center justify-center space-x-3">
              <Image src={"/mailIcon.png"} alt='mail' width={13} height={10} />
              <span>
                <a href="mailto:">info@udsngo.org</a>
              </span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Image src={"/phoneIcon.png"} alt='phone' width={13} height={10} />
              <span>+91 9398493657</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full text-sm pt-10 px-2 pb-10">
        <div className='flex items-center justify-center font-extralight space-x-7'>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
        </div>
        <div className="flex items-center justify-center space-x-5 font-extralight text-xs ab:text-base">
          <Image src={"/facebookIcon.png"} alt='fb' width={8} height={10} unoptimized />
          <Image src={"/twitterIcon.png"} alt='fb' width={15} height={10} unoptimized />
          <Image src={"/LinkedinIcon.png"} alt='fb' width={15} height={10} unoptimized />
          <Image src={"/youtubeIcon.png"} alt='fb' width={17} height={10} unoptimized />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer