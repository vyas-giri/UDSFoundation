"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ProgressCircle } from "@/components/ProgressCircle";
import { useState } from "react";



export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to the API route
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Email sent successfully!");
    } else {
      alert("Failed to send email.");
    }
  };


  return (
    <div className="text-black">
      <Navbar />
      <div>
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-2xl px-3 sm:px-6 lg:max-w-7xl lg:px-8">
            <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              Your progress so far
            </p>
            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pt-10 border-b">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      Lectures
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      Here you can check your progress on lectures!
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-center space-y-3 px-8 pb-3 pt-3 sm:px-10">
                    <div className="flex flex-col items-start justify-center">
                      <span className="text-lg pb-1">Physics</span>
                      <span className="text-sm">You&apos;ve attended 16 lectures out of 53.</span>
                      <button className="text-red-500 text-sm">Continue learning</button>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <span className="text-lg pb-1">Chemistry</span>
                      <span className="text-sm">You&apos;ve attended 16 lectures out of 53.</span>
                      <button className="text-red-500 text-sm">Continue learning</button>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <span className="text-lg pb-1">Maths</span>
                      <span className="text-sm">You&apos;ve attended 16 lectures out of 53.</span>
                      <button className="text-red-500 text-sm">Continue learning</button>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <span className="text-lg pb-1">English</span>
                      <span className="text-sm">You&apos;ve attended 16 lectures out of 53.</span>
                      <button className="text-red-500 text-sm">Continue learning</button>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <span className="text-lg pb-1">Computer Science</span>
                      <span className="text-sm">You&apos;ve attended 16 lectures out of 53.</span>
                      <button className="text-red-500 text-sm">Continue learning</button>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
              </div>
              <div className="relative max-lg:row-start-1">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      You&apos;ve been doing great! Keep up the good work.
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                    <ProgressCircle />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
              </div>
              <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                <div className="absolute inset-px rounded-lg bg-white"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                  <div className="px-8 pt-5 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Upcoming Tests</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      You&apos;ve an upcoming test on 25th November, 2024.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-3 items-start justify-center px-8 pt-8  pb-3 sm:px-10 sm:pt-10">
                    <span className="text-lg">Subject: Physics</span>
                    <span className="">Syllabus: Simple Harmonic Motion (SHM)</span>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
              </div>
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pt-10 border-b">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      Practice
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                    </p>
                  </div>
                  <div className="flex flex-col items-start justify-center space-y-5 px-8 pb-3 pt-5 sm:px-10">
                    <div className="flex flex-col space-y-1 items-start justify-center">
                      <span className="text-lg pb-1">Quizzes</span>
                      <span className="text-sm">Practice by giving quizzes and check your paper-solving speed!</span>
                      <button className="text-red-500 text-sm">Continue learning</button>
                    </div>
                    <div className="flex flex-col space-y-1 items-start justify-center">
                      <span className="text-lg pb-1">PYQs</span>
                      <span className="text-sm">Practice by attempting Previous Year Questions!</span>
                      <button className="text-red-500 text-sm">Continue learning</button>
                    </div>
                    <div className="flex flex-col space-y-1 items-start justify-center">
                      <span className="text-lg pb-1">Miscellaneous Questions</span>
                      <span className="text-sm">Practice by solving some of the best questions to strengthen your learning!</span>
                      <button className="text-red-500 text-sm">Continue learning</button>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              </div>
            </div>
          </div>
        </div>
        <span className="flex items-center justify-center bg-white text-xl pb-3">Test Form</span>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center bg-white space-y-3 pb-5">
          <input type="text" name="name" placeholder="Name" className="rounded-xl border p-2 border-cyan-500 outline-0 ring-0" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="rounded-xl border p-2 border-cyan-500 outline-0 ring-0" onChange={handleChange} required />
          <textarea name="message" placeholder="Your message" className="rounded-xl border p-2 border-cyan-500 outline-0 ring-0" onChange={handleChange} required />
          <button type="submit" className="rounded-xl border p-2 px-10 border-pink-500 outline-0 ring-0 hover:bg-pink-500 hover:text-white">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
