"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Accordion from './Accordion'
import { useAuth } from '@/hooks/useAuth'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, provider } from '@/util/firebase'
import { useRouter } from 'next/navigation'

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

function Navbar({homepage}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // alert("Signed out successfully!");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      localStorage.setItem("user", JSON.stringify(user))
      // alert(`Welcome, ${user.displayName}!`);
      router.push("/dashboard")
    } catch (error) {
      console.error("Error during Google Sign-In:", error.message);
      alert("Sign-In failed. Please try again.");
    }
  };

  
  return (
    <div className={`${homepage ? "bg-transparent" : "bg-[#861721]"} text-white flex items-center justify-between space-x-7 w-full px-5`}>
      <Link href={"/"}>
        <Image src={"/udsLogo.png"} alt='UDS' width={200} height={200} unoptimized />
      </Link>
      {user ? (
        <div className='flex items-center justify-center space-x-7'>
        <Link href="/" className={`hover:scale-110 transform transition ${homepage ? "text-[#861721]" : "text-white hover:text-cyan-400"} duration-300`}>
          Home
        </Link>
        <button className={`hover:scale-110 transform transition ${homepage ? "text-[#861721]" : "text-white hover:text-cyan-400"} duration-300`} onClick={handleSignOut}>Sign Out</button>
        <Accordion type={homepage && "homepage"} content={aboutContent} />
        <Accordion type={homepage && "homepage"} content={studentPortalContent} />
        <Accordion type={homepage && "homepage"} content={ourWorkContent} />
      <Link href="/" className={`hover:scale-110 transform transition ${homepage ? "text-[#861721]" : "text-white hover:text-cyan-400"} duration-300`}>
        Documents
      </Link>
      <Link href="/" className={`hover:scale-110 transform transition ${homepage ? "text-[#861721]" : "text-white hover:text-cyan-400"} duration-300`}>
        Get Involved
      </Link>
      <Link href={"/donate"} className={`hover:scale-110 transform transition ${homepage ? "text-[#861721]" : "text-white hover:text-cyan-400"} duration-300`}>
        Donate Now
      </Link>
      </div>
      ) :
      (<div className='flex items-center text-sm justify-center space-x-7 tracking-wider'>
        <button className='hover:scale-110 transform transition text-[#861721] px-10 py-2 border-2 border-[#861721] rounded-md duration-300' onClick={handleGoogleSignIn}>
          Log in using google
        </button>
        {/* <Link className='hover:scale-110 transform transition bg-[#861721] rounded-md px-5 py-2 duration-300' href={"/login"}>
          Create Account
        </Link> */}
        </div>)}
    </div>
  )
}

export default Navbar