import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeftHeroSection from '@/components/herosection/LeftHeroSection';
import MiddleHeroSection from '@/components/herosection/MiddleHeroSection';
import RightHeroSection from '@/components/herosection/RightHeroSection';
import Testform from '@/util/TestForm';

function Dashboard() {
  return (
    <div>
    <Navbar />
      <div>
        <div className="flex bg-[#F3F3F3] space-x-7 items-stretch justify-end h-full">
          <LeftHeroSection />
          <MiddleHeroSection />
          <RightHeroSection />
        </div>
        <Testform />
    </div>
    <Footer />
    </div>
  )
}

export default Dashboard