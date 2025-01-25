"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {

  return (
    <div className="text-black bg-white -space-y-80">
      <div className="bg-[url('/bgimage.png')] bg-cover bg-center flex flex-col h-[80vh] space-y-5 items-center justify-start pt-10 rounded-b-[250px]">
        <Navbar homepage={true} />
        <span className="font-bold text-3xl tracking-wider pt-5 text-center">Which career <span className="text-[#861721]">best suits you!</span></span>
      </div>
      <div className="flex items-center justify-center pb-[350px]">
        <div className="flex flex-col items-center justify-center w-72">
          <div className="bg-[#861721] rounded-t-2xl pt-10 py-1 px-5 pr-7 text-3xl tracking-wide font-semibold text-white">
            Tell us about you!
          </div>
          <div className="shadow-sm shadow-[#00000040] bg-white w-full px-5 py-5 flex flex-col items-start justify-center rounded-b-2xl">
            <span className="text-[#003F7D] text-sm">
              Your name*
            </span>
            <input type="text" className="w-full p-2 mb-3 text-sm ring-0 outline-0 border border-[#C3CAD9] rounded-md" required />
            <span className="text-[#003F7D] text-sm">
              Email*
            </span>
            <input type="email" className="w-full p-2 mb-3 text-sm ring-0 outline-0 border border-[#C3CAD9] rounded-md" required />
            <span className="text-[#003F7D] text-sm">
              Mobile Number*
            </span>
            <input type="tel" className="w-full p-2 mb-3 text-sm ring-0 outline-0 border border-[#C3CAD9] rounded-md" required />
            <span className="text-[#003F7D] text-sm">
              In which class are you now?*
            </span>
            <select className="w-full p-2 mb-3 text-sm ring-0 outline-0 border border-[#C3CAD9] rounded-md" required>
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
              <option value="4">Class 4</option>
              <option value="5">Class 5</option>
              <option value="6">Class 6</option>
              <option value="7">Class 7</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>
            <div className="flex items-start justify-center space-x-2">
              <input type="checkbox" className="mt-1" required />
              <span className="text-[#B1B1B1] text-xs">By providing your contact details, you agree to our <span className="text-[#F98149]">Privacy Policy</span></span>
            </div>
            <div className="flex items-center justify-center w-full mt-5">
              <button type="submit" className="bg-[#861721] px-7 py-2 rounded-lg text-white font-semibold">Start Assessment</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}