import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Accordion from './Accordion'

const aboutContent = {
  title: 'About',
  content: [
    { name: 'Vision', href: '#', icon: 'ArrowRightIcon' },
    { name: 'Our Mission', href: '#', icon: 'ArrowRightIcon' },
    { name: 'Values', href: '#', icon: 'ArrowRightIcon' },
    { name: 'Our Team', href: '#', icon: 'ArrowRightIcon' },
    { name: 'Contact Us', href: '/contactus', icon: 'ArrowRightIcon' },
  ]
}

const studentPortalContent = {
  title: 'Student Portal',
  content: [
    { name: 'Admission Inquire', href: '#', icon: 'ArrowRightIcon' },
    { name: 'Courses', href: '/courses', icon: 'ArrowRightIcon' },
    { name: 'Student Register', href: '#', icon: 'ArrowRightIcon' },
    { name: 'Student Login', href: '#', icon: 'ArrowRightIcon' },
    { name: 'Exam Time Table', href: '#', icon: 'ArrowRightIcon' },
    { name: 'Exam Admit Card', href: '#', icon: 'ArrowRightIcon' },
    { name: 'Exam Results', href: '#', icon: 'ArrowRightIcon' },
    { name: 'Certificates', href: '#', icon: 'ArrowRightIcon' },
  ]
}

const ourWorkContent = {
  title: 'Our Work',
  content: [
    { name: 'Our Programs', href: '#', icon: 'ArrowRightIcon' },
    { name: 'Our Partners', href: '#', icon: 'ArrowRightIcon' },
    { name: 'Testimonials and Stories', href: '#', icon: 'ArrowRightIcon' },
    { name: 'Photo Gallery', href: '#', icon: 'ArrowRightIcon' },
    { name: 'Videos', href: '#', icon: 'ArrowRightIcon' },
  ]
}

function Navbar() {
  return (
    <div className='bg-[#861721] text-white flex items-center justify-between space-x-7 w-full py-3 px-5'>
      <Link href={"/"}>
        <Image src={"/udsLogo.png"} alt='UDS' width={250} height={200} unoptimized />
      </Link>
      <div className='flex items-center justify-center space-x-7'>
        <Link href="/" className='hover:scale-110 transform transition duration-300 hover:text-cyan-400'>
          Home
        </Link>
        <Accordion type={"links"} content={aboutContent} />
        <Accordion type={"links"} content={studentPortalContent} />
        <Accordion type={"links"} content={ourWorkContent} />
      <Link href="/" className='hover:scale-110 transform transition duration-300 hover:text-cyan-400'>
        Documents
      </Link>
      <Link href="/" className='hover:scale-110 transform transition duration-300 hover:text-cyan-400'>
        Get Involved
      </Link>
      <Link href={"/donate"} className='bg-white text-black p-2 px-7 rounded-xl hover:text-cyan-400'>
        Donate Now
      </Link>
      </div>
    </div>
  )
}

export default Navbar