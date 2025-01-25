"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { usePathname } from "next/navigation";
import { coursesData } from "@/util/placeholderData";
import Image from "next/image";
import Accord from "@/components/Accord";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function Page() {
  const pathname = usePathname();
  const courseId = pathname.slice(9);
  const course = coursesData.find((course) => course.id == courseId);
  const accordion1Content = {
    title: "01 lorem ipsum anbijndiundadnadjna",
    content:
      "Introduction > Layers in Web > Application > Tags and Attributes > Programming",
  };

  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <div className="bg-[#861721] text-white text-center py-5 rounded-b-xl">
        <span className="font-bold text-3xl">{course.name}</span>
      </div>
      <div className="py-5 flex items-start justify-between w-full">
        <div className="flex flex-col items-start justify-center w-1/2 space-y-5 px-20">
          <div className="flex flex-col items-start justify-center space-y-3">
            <span className="text-xl text-[#861721] font-semibold">
              About the course
            </span>
            <span className="text-[#191919]">{course.desc}</span>
          </div>
          <div className="flex flex-col items-start justify-start space-y-1">
            <span className="text-xl text-[#861721] font-semibold pb-3">
              Objectives
            </span>
            <div className="flex items-center justify-start space-x-2">
              <Image
                src={"/checkIcon.png"}
                alt="check"
                width={15}
                height={15}
                unoptimized
              />
              <span className="text-[#191919]">
                Learn the basics of {course.name}
              </span>
            </div>
            <div className="flex items-center justify-start space-x-2">
              <Image
                src={"/checkIcon.png"}
                alt="check"
                width={15}
                height={15}
                unoptimized
              />
              <span className="text-[#191919]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
                iste.
              </span>
            </div>
            <div className="flex items-center justify-start space-x-2">
              <Image
                src={"/checkIcon.png"}
                alt="check"
                width={15}
                height={15}
                unoptimized
              />
              <span className="text-[#191919]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
                iste.
              </span>
            </div>
            <div className="flex items-center justify-start space-x-2">
              <Image
                src={"/checkIcon.png"}
                alt="check"
                width={15}
                height={15}
                unoptimized
              />
              <span className="text-[#191919]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
                iste.
              </span>
            </div>
            <div className="flex items-center justify-start space-x-2">
              <Image
                src={"/checkIcon.png"}
                alt="check"
                width={15}
                height={15}
                unoptimized
              />
              <span className="text-[#191919]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
                iste.
              </span>
            </div>
          </div>
        </div>
        <Image
          src={"/redDotsBlock.png"}
          alt={course.name}
          width={40}
          height={50}
          unoptimized
          className="absolute right-5 top-[38%]"
        />
        <Image
          src={"/redDotsBlock.png"}
          alt={course.name}
          width={40}
          height={50}
          unoptimized
          className="absolute right-5 top-1/2"
        />
        <Image
          src={"/ellipse.png"}
          alt={course.name}
          width={40}
          height={50}
          unoptimized
          className="absolute right-[33%] top-[73%]"
        />
        <div className="flex flex-col items-start justify-center space-y-5 mx-20 p-5 w-fit rounded-xl shadow shadow-[#00000030]">
          <span className="text-xl text-[#861721] font-semibold">
            Course Content
          </span>
          <div className="flex flex-col items-center justify-center space-y-2 rounded-xl text-black">
            <Accord
              title={
                <div className="flex items-center justify-center space-x-1">
                  <span>01 Lorem ipsum dolor sit, amet.</span>
                  <ChevronDownIcon className="w-5" />
                </div>
              }
            >
              <span className="text-[#191919]">
                Introduction -- Layers in Web -- Application -- Tags and
                Attributes -- Programming
              </span>
            </Accord>
            <Accord
              title={
                <div className="flex items-center justify-center space-x-1">
                  <span>01 Lorem ipsum dolor sit, amet.</span>
                  <ChevronDownIcon className="w-5" />
                </div>
              }
            >
              <span className="text-[#191919]">
                Introduction -- Layers in Web -- Application -- Tags and
                Attributes -- Programming
              </span>
            </Accord>
            <Accord
              title={
                <div className="flex items-center justify-center space-x-1">
                  <span>01 Lorem ipsum dolor sit, amet.</span>
                  <ChevronDownIcon className="w-5" />
                </div>
              }
            >
              <span className="text-[#191919]">
                Introduction -- Layers in Web -- Application -- Tags and
                Attributes -- Programming
              </span>
            </Accord>
            <Accord
              title={
                <div className="flex items-center justify-center space-x-1">
                  <span>01 Lorem ipsum dolor sit, amet.</span>
                  <ChevronDownIcon className="w-5" />
                </div>
              }
            >
              <span className="text-[#191919]">
                Introduction -- Layers in Web -- Application -- Tags and
                Attributes -- Programming
              </span>
            </Accord>
            <Accord
              title={
                <div className="flex items-center justify-center space-x-1">
                  <span>01 Lorem ipsum dolor sit, amet.</span>
                  <ChevronDownIcon className="w-5" />
                </div>
              }
            >
              <span className="text-[#191919]">
                Introduction -- Layers in Web -- Application -- Tags and
                Attributes -- Programming
              </span>
            </Accord>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-1 pt-10 px-20">
        <span className="text-[#861721] text-xl font-semibold text-center w-[10%]">
          {course?.name} Projects
        </span>
        <div className="bg-[#861721] w-[90%] h-0.5 rounded-3xl"></div>
      </div>
      <div className="grid grid-cols-4 items-start justify-center gap-5 w-full p-10 px-20">
        <div className="bg-white shadow shadow-[#00000030] rounded-xl flex items-center justify-center">
          <Accord
            title={
              <div className="flex items-center justify-center space-x-1">
                <Image
                  src={course.image}
                  alt={course.name}
                  width={50}
                  height={50}
                  unoptimized
                  className="bg-[#861721] rounded-full w-10 h-10 p-1"
                />
                <span>Plotting No.s</span>
              </div>
            }
          >
            <span className="text-[#5F5D5D] text-sm">
              Hello, World offers a tremendous opportunity to hone your skills
              if you are just starting with Numbers and Systems.
            </span>
          </Accord>
        </div>
        <div className="bg-white shadow shadow-[#00000030] rounded-xl flex items-center justify-center">
          <Accord
            title={
              <div className="flex items-center justify-center space-x-1">
                <Image
                  src={course.image}
                  alt={course.name}
                  width={50}
                  height={50}
                  unoptimized
                  className="bg-[#861721] rounded-full w-10 h-10 p-1"
                />
                <span>Plotting No.s</span>
              </div>
            }
          >
            <span className="text-[#5F5D5D] text-sm">
              Hello, World offers a tremendous opportunity to hone your skills
              if you are just starting with Numbers and Systems.
            </span>
          </Accord>
        </div>
        <div className="bg-white shadow shadow-[#00000030] rounded-xl flex items-center justify-center">
          <Accord
            title={
              <div className="flex items-center justify-center space-x-1">
                <Image
                  src={course.image}
                  alt={course.name}
                  width={50}
                  height={50}
                  unoptimized
                  className="bg-[#861721] rounded-full w-10 h-10 p-1"
                />
                <span>Plotting No.s</span>
              </div>
            }
          >
            <span className="text-[#5F5D5D] text-sm">
              Hello, World offers a tremendous opportunity to hone your skills
              if you are just starting with Numbers and Systems.
            </span>
          </Accord>
        </div>
        <div className="bg-white shadow shadow-[#00000030] rounded-xl flex items-center justify-center">
          <Accord
            title={
              <div className="flex items-center justify-center space-x-1">
                <Image
                  src={course.image}
                  alt={course.name}
                  width={50}
                  height={50}
                  unoptimized
                  className="bg-[#861721] rounded-full w-10 h-10 p-1"
                />
                <span>Plotting No.s</span>
              </div>
            }
          >
            <span className="text-[#5F5D5D] text-sm">
              Hello, World offers a tremendous opportunity to hone your skills
              if you are just starting with Numbers and Systems.
            </span>
          </Accord>
        </div>
        <div className="bg-white shadow shadow-[#00000030] rounded-xl flex items-center justify-center">
          <Accord
            title={
              <div className="flex items-center justify-center space-x-1">
                <Image
                  src={course.image}
                  alt={course.name}
                  width={50}
                  height={50}
                  unoptimized
                  className="bg-[#861721] rounded-full w-10 h-10 p-1"
                />
                <span>Plotting No.s</span>
              </div>
            }
          >
            <span className="text-[#5F5D5D] text-sm">
              Hello, World offers a tremendous opportunity to hone your skills
              if you are just starting with Numbers and Systems.
            </span>
          </Accord>
        </div>
        <div className="bg-white shadow shadow-[#00000030] rounded-xl flex items-center justify-center">
          <Accord
            title={
              <div className="flex items-center justify-center space-x-1">
                <Image
                  src={course.image}
                  alt={course.name}
                  width={50}
                  height={50}
                  unoptimized
                  className="bg-[#861721] rounded-full w-10 h-10 p-1"
                />
                <span>Plotting No.s</span>
              </div>
            }
          >
            <span className="text-[#5F5D5D] text-sm">
              Hello, World offers a tremendous opportunity to hone your skills
              if you are just starting with Numbers and Systems.
            </span>
          </Accord>
        </div>
        <div className="bg-white shadow shadow-[#00000030] rounded-xl flex items-center justify-center">
          <Accord
            title={
              <div className="flex items-center justify-center space-x-1">
                <Image
                  src={course.image}
                  alt={course.name}
                  width={50}
                  height={50}
                  unoptimized
                  className="bg-[#861721] rounded-full w-10 h-10 p-1"
                />
                <span>Plotting No.s</span>
              </div>
            }
          >
            <span className="text-[#5F5D5D] text-sm">
              Hello, World offers a tremendous opportunity to hone your skills
              if you are just starting with Numbers and Systems.
            </span>
          </Accord>
        </div>
        <div className="bg-white shadow shadow-[#00000030] rounded-xl flex items-center justify-center">
          <Accord
            title={
              <div className="flex items-center justify-center space-x-1">
                <Image
                  src={course.image}
                  alt={course.name}
                  width={50}
                  height={50}
                  unoptimized
                  className="bg-[#861721] rounded-full w-10 h-10 p-1"
                />
                <span>Plotting No.s</span>
              </div>
            }
          >
            <span className="text-[#5F5D5D] text-sm">
              Hello, World offers a tremendous opportunity to hone your skills
              if you are just starting with Numbers and Systems.
            </span>
          </Accord>
        </div>
      </div>
      <div className="bg-[#861721] rounded-[30px] mx-20 flex items-center justify-between my-10 p-14 px-20">
        <span className="text-3xl font-bold text-white">
          Wanna check more about the course?
        </span>
        <button className="bg-black rounded-2xl flex items-center justify-center space-x-5 p-5 px-10">
          <Image
            src={"/downloadIcon.png"}
            alt="download"
            width={20}
            height={20}
          />
          <span className="text-lg font-semibold">Download Curriculum</span>
        </button>
      </div>
      <div className="flex items-center justify-center space-x-1 py-10 px-20">
        <span className="text-[#861721] text-xl font-semibold text-center w-[10%]">
          Supported by
        </span>
        <div className="bg-[#861721] h-0.5 rounded-3xl w-[90%]"></div>
      </div>
      <div className="flex items-center justify-between w-full px-20 pb-20">
        <div className="bg-[#861721] rounded-full w-28 h-28"></div>
        <div className="bg-[#861721] rounded-full w-28 h-28"></div>
        <div className="bg-[#861721] rounded-full w-28 h-28"></div>
        <div className="bg-[#861721] rounded-full w-28 h-28"></div>
        <div className="bg-[#861721] rounded-full w-28 h-28"></div>
        <div className="bg-[#861721] rounded-full w-28 h-28"></div>
        <div className="bg-[#861721] rounded-full w-28 h-28"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
