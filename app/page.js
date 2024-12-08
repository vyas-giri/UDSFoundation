"use client";
import Footer from "@/components/Footer";
import LeftHeroSection from "@/components/herosection/LeftHeroSection";
import MiddleHeroSection from "@/components/herosection/MiddleHeroSection";
import Navbar from "@/components/Navbar";
import { ProgressCircle } from "@/components/ProgressCircle";
import RightHeroSection from "@/components/herosection/RightHeroSection";
import Image from "next/image";
import { useState } from "react";
import Testform from "@/util/TestForm";

export default function Home() {

  return (
    <div className="text-black">
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
  );
}
