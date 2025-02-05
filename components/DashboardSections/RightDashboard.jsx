import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Image from 'next/image'
import React, { useState } from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '@/util/firebase';
import { ActivitiesData } from '@/util/placeholderData';

function RightDashboard() {
    const user = JSON.parse(localStorage.getItem("user"))
    const [isOpen, setIsOpen] = useState(false);
    const handleSignOut = async () => {
        try {
          await signOut(auth);
          // alert("Signed out successfully!");
        } catch (error) {
          console.error("Error signing out:", error.message);
        }
      };

  return (
    <div className='flex flex-col items-center justify-between bg-white rounded-l-3xl p-5 space-y-7 w-1/5 h-full'>
        <div className='flex items-start justify-between w-full'>
            <Image src='/notificationIcon.png' alt='notification' width={20} height={20} className='pt-2' />
            <div className="bg-[#F0F7FF] rounded-xl">
                <button
                    className="flex justify-start text-lg font-semibold items-center space-x-2 p-2 px-3 w-full text-left text-[#003F7D] rounded-lg"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Image src={user?.photoURL} alt='search' width={30} height={20} className='rounded-full' />
                    <span className='text-[#333333] text-sm'>{user?.displayName}</span>
                    <ChevronDownIcon className='w-5' />
                </button>
                {isOpen && (
                    <button onClick={handleSignOut} className="py-2 text-[#5F6265] font-extralight text-sm hover:bg-[#D40000] text-center hover:text-white rounded-lg w-full">
                    Sign Out
                    </button>
                )}
            </div>
        </div>
        <div className='flex flex-col items-center justify-center space-y-5 h-1/2 w-full'>
            <div className='flex items-center justify-between w-full'>
                <span className=' text-[#333333] font-semibold'>Upcoming Activities</span>
                <button className='text-[#D40000] font-semibold text-sm'>See All</button>
            </div>
            <div className='flex flex-col items-center justify-start space-y-5 overflow-y-scroll w-full pr-2'>
                {ActivitiesData.map((i, index) => (
                    <div key={index} className='flex items-start justify-center space-x-2 p-2 w-full rounded-xl text-sm bg-[#FFF0F0] hover:cursor-pointer'>
                        <div className='rounded-full p-1 px-2 bg-[#E55858]'>8</div>
                        <div className='flex items-start justify-center flex-col space-y-2'>
                            <span className='font-semibold text-[#333333]'>{i.name}</span>
                            <div className='flex items-center justify-center space-x-1 text-xs'>
                                <span className='text-[#8A8A8A]'>{i.date}</span>
                                <div className='w-2 h-2 rounded-full bg-[#D40000]'></div>
                            <span className='text-[#8A8A8A]'>{i.time}</span>
                            </div>
                            <span className='text-[#8A8A8A] text-xs'>{i.address}</span>
                        </div>
                    </div>))}
            </div>
        </div>
    </div>
  )
}

export default RightDashboard