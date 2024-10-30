import Link from 'next/link';
import React from 'react'
// import { HashLink } from 'react-router-hash-link'

function Footer() {
  return (
    <div className='flex items-center justify-center bg-gradient-to-br from-[#2C1051] via-[#2C1051] to-[#4F53BC73]'>
    <div className="pt-10 ab:py-10 w-[80%] drop-shadow-md shadow-black text-white text-xs sm:text-base">
      <div className="flex items-start justify-start md:space-x-20 border-b-2 border-white ab:pb-20 border-opacity-55 space-x-5 pb-5">
        <div className="flex space-y-3 items-center justify-start flex-col">
          <span className="text-[#FFC107] tracking-wider text-3xl font-extralight">
            LOGO
          </span>
          <div className="flex flex-col space-y-5 tracking-wider font-extralight">
            <div className="flex items-center justify-center space-x-3">
            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/mail.png" alt="mail"/>
              <span>
                <a href="mailto:">MAIL ID</a>
              </span>
            </div>
            <div className="flex justify-center space-x-3 pl-7">
                <img width="25" height="25" src="https://img.icons8.com/ios/50/phone--v1.png" alt="phone--v1"/>
              <span>Contact no.</span>
            </div>
          </div>
        </div>
        <div className="flex sm:items-start space-y-10 flex-col justify-start">
          <div className="flex flex-col items-start justify-start space-y-7">
            <a href="/" className="hover:text-[#FFC107]">
              <span>HOME</span>
            </a>
            <Link href={"/"}>
              <span className="hover:text-[#FFC107]">
                <span>ABOUT US</span>
              </span>
            </Link>
            <a href="/properties" className="hover:text-[#FFC107]">
              <span>PROPERTIES</span>
            </a>
            <Link href={"/"}>
              <span className="hover:text-[#FFC107]">
                <span>CONTACT</span>
              </span>
            </Link>
          </div>
          {/* <div className="flex sm:items-center justify-center flex-col space-y-5">
            <span className="tracking-wider font-extralight pr-0.5 text-[10px]">
              DIRECTLY CONTACT US ON
            </span>
            <div className="bg-[#96969640] bg-opacity-25 flex items-center justify-center space-x-2 ab:space-x-3 px-4 py-2 rounded-3xl shadow-md shadow-slate-900 mr-2">
              <img
                src="image 6.png"
                alt="whatsappIcon"
                className="w-7 ab:w-full"
              />
              <a href="https://wa.me/+919315309388">
                <span className="text-[#89E4D6] tracking-wider ab:text-2xl font-extralight">
                  WHATSAPP
                </span>
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <div className="flex items-start justify-center pt-10 -space-x-4 sm:space-x-2 px-2 pb-10">
        <div className='h-fit'>
            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/copyright.png" className='' alt="copyright"/>
        </div>
        <span className="text-center tracking-wider font-extralight text-xs ab:text-base">
          2024 ALL RIGHTS RESERVED | POWERED BY{" "}
          <span className="text-[#FFC107]">UDS Foundation</span>
          <br></br>
          DISCLAIMER
        </span>
      </div>
    </div>
    </div>
  );
}

export default Footer