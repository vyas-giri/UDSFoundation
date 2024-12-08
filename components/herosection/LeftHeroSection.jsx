import React from "react";
import Image from "next/image";
import { ProgressCircle } from "../ProgressCircle";

function LeftHeroSection() {
  return (
    <div className="flex flex-col rounded-2xl space-y-3 py-10 px-5 shadow-sm shadow-slate-300 drop-shadow-2xl bg-white my-5 h-1/2">
      <div className="flex flex-col items-center justify-center space-y-1">
        <Image
          src={"/image.png"}
          alt="profilePicture"
          width={100}
          height={100}
          unoptimized
          className="rounded-full w-28 h-28"
        />
        <span className="font-semibold text-lg">Shikha Gupta</span>
      </div>
      <div className="flex flex-col items-center justify-center space-y-1">
        <span className="text-black font-semibold">YOUR LEARNING PROCESS</span>
        <span>Keep up! You&apos;re doing great!</span>
      </div>
      <ProgressCircle />
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center space-x-2">
            <Image
              src={"/coursesIcon.png"}
              alt=""
              width={14}
              height={14}
              unoptimized
            />
            <span className="text-[#B1A991]">Courses</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-3xl font-bold">3</span>
            <span>
              Ongoing<br></br>Courses
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center space-x-2">
            <Image
              src={"/calendarIcon.png"}
              alt=""
              width={14}
              height={14}
              unoptimized
            />
            <span className="text-[#B1A991]">Term Dates</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold">JAN/JUN</span>
            <span className="font-bold">2019</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftHeroSection;
