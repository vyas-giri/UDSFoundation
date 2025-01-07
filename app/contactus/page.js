import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

function Contact() {
  return (
    <div className='bg-white'>
        <Navbar />
        <div className='bg-[#861721] text-white text-center pb-5'>
            <span className='font-bold text-2xl'>Contact Our Team</span>
        </div>
        <div className="flex items-center justify-center">
    <form className='w-[70%] py-5 rounded-2xl'>
      <div className="space-y-12">

        <div className="">

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-[#003F7D]">
                Your name*
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm/6 font-medium text-[#003F7D]">
                Contact email*
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="phone" className="block text-sm/6 font-medium text-[#003F7D]">
                Phone number*
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="number"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="issue" className="block text-sm/6 font-medium text-[#003F7D]">
                Issue related to*
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="issue"
                  name="issue"
                  required
                  autoComplete="issue-name"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>Course Structure</option>
                  <option>Lecture Videos</option>
                  <option>Test Series</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm/6 font-medium text-[#003F7D]">
                Your message*
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  required
                  placeholder='Write your message here...'
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue={''}
                />
              </div>
            </div>
            <span className='text-[#5A7184] col-span-full text-sm font-extralight'>By submitting this form you agree to our terms and conditions and our Privacy Policy which explains how we may collect, use and disclose your personal information including to third parties.</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-start">
        <button
          type="submit"
          className="rounded-md bg-[#003F7D] px-10 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send
        </button>
      </div>
    </form>
        </div>
        <div className='flex items-center justify-center space-x-10 py-24'>
          <div className='flex flex-col items-center justify-center space-y-2'>
            <Image src='/email.png' width={70} height={70} alt="mail" unoptimized />
            <span className='text-[#F98149] font-semibold text-lg'>Email us</span>
            <span className='text-black w-64 text-sm text-center font-extralight'>Email us for general queries, including marketing and partnership opportunities.</span>
            <span className='text-[#003F7D] font-semibold text-sm'>hello@ezyskills.com</span>
          </div>
          <div className='flex flex-col items-center justify-center space-y-2'>
            <Image src='/callAgent.png' width={70} height={70} alt="mail" unoptimized />
            <span className='text-[#F98149] font-semibold text-lg'>Call us</span>
            <span className='text-black w-64 text-sm text-center font-extralight'>Call us to speak to a member of our team. We are always happy to help.</span>
            <span className='text-[#003F7D] font-semibold text-sm'>+91 88888 99999</span>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact