"use client";
import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";
import { coursesData } from "@/util/placeholderData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const courseCategories = ["All", "Opened", "Coming Soon", "Archived"];

function Courses() {
  const [courseCategory, setCourseCategory] = useState("All");

  return (
    <div className="bg-white">
      <div className="bg-[#861721] text-white text-center pt-40 pb-10">
        <span className="font-bold text-2xl">
          Courses <span className="text-black">List</span>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center space-y-5 p-10 px-5">
        <div className="flex items-center justify-between w-full">
          <div className="flex bg-[#F1F1F5] items-center justify-start px-3 p-1 rounded-xl">
            <Image
              src={"/searchIcon2.png"}
              alt="search"
              width={20}
              height={20}
            />
            <input
              type="search"
              placeholder="Search courses"
              className="border-0 ring-0 outline-0 text-[#44444F] bg-[#f1f1f5] rounded-md p-1.5 pl-3"
            />
          </div>
          <div className="flex items-center justify-center text-center space-x-7">
            {courseCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setCourseCategory(category)}
                className={`border-b-2 pb-2 ${
                  courseCategory === category
                    ? "text-[#FF8B36] border-[#FF914C]"
                    : "text-[#44444F] border-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <span className="text-[#696974] text-sm">Sort by:</span>
            <select className="border-0 ring-0 outline-0 text-[#44444F] bg-[#f1f1f5] rounded-md p-1 px-3">
              <option>Popular class</option>
              <option>Most watched</option>
              <option>Recently Added</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
          {coursesData.map((course, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center -space-y-10 p-3"
            >
              <Link
                href={`/courses/${course.id}`}
                className="bg-[#003F7D] w-64 h-52 flex items-center justify-center rounded-xl "
              >
                <Image
                  src={course.image}
                  alt={course.name}
                  width={150}
                  height={200}
                  unoptimized
                  className="w-20"
                />
              </Link>
              <div className="bg-[#FDFDFD] rounded-xl shadow-sm shadow-[#00000030] flex flex-col w-60 items-center justify-center text-center space-y-2 py-5 px-5 z-10">
                <span className="text-[#171725] text-xl font-semibold">
                  {course.name}
                </span>
                <span className="text-black text-xs font-extralight">
                  {course.desc}
                </span>
                <div className="flex items-center justify-center space-x-3">
                  <button className="flex items-center justify-center border border-[#F98149] p-1 rounded-xl px-2">
                    <Image
                      src={"/computerIcon.png"}
                      alt="demo"
                      width={10}
                      height={10}
                    />
                    <span className="text-xs text-[#575757]">Live Demo</span>
                  </button>
                  <button className="flex items-center justify-center border border-[#F98149] p-1 rounded-xl px-2">
                    <Image
                      src={"/pinIcon.png"}
                      alt="demo"
                      width={10}
                      height={10}
                    />
                    <span className="text-xs text-[#575757]">Enroll Now</span>
                  </button>
                </div>
                <button className="p-1 px-2 bg-[#F98149] rounded-xl flex items-center justify-center space-x-1">
                  <Image
                    src={"/downloadIcon.png"}
                    alt="download"
                    width={20}
                    height={20}
                  />
                  <span className="text-xs text-white">
                    Download Curriculum
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
