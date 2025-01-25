import React, { useState } from "react";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "@/util/firebase";

const sections = [
  {
    title: "Home",
    imgUrl: "/homeIcon.png"
  },
  {
    title: "Classes",
    imgUrl: "/classesIcon.png"
  },
  {
    title: "Documents",
    imgUrl: "/documentIcon.png"
  },
  {
    title: "Bookmarks",
    imgUrl: "/bookmarkIcon.png"
  },
  {
    title: "Messages",
    imgUrl: "/messagesIcon.png"
  },
  {
    title: "Settings",
    imgUrl: "/settingsIcon.png"
  },
]

function LeftDashboard() {
  const [section, setSection] = useState("home")

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // alert("Signed out successfully!");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen shadow-sm bg-white rounded-r-3xl">
      <div className="flex flex-col items-center justify-center space-y-10">
      <Image
          src={"/udsLogo.png"}
          alt="logo"
          width={250}
          height={200}
          unoptimized
          className="rounded-full p-7"
      />
      <div className="flex flex-col w-full items-center justify-center space-y-3">
        {sections.map((i, index) => (
          <button key={index} className={`flex items-center justify-start py-3 w-full space-x-2 pl-10 ${section === i.title ? "border-l-4 border-[#D40000] bg-[#F0F7FF]" : "bg-white border-l-4 border-white"}`} onClick={() => setSection(i.title)}>
          <Image src={i.imgUrl} alt="home" width={20} height={20} />
          <span className={section === i.title ? "text-[#D40000] tracking-wide font-semibold" : "text-[#8A8A8A] font-semibold tracking-wide"}>{i.title}</span>
          {i.title === "Messages" && <span className="p-1 px-2.5 text-white bg-[#D40000] rounded-full text-sm">4</span>}
        </button>
        ))}
      </div>
      </div>
      <button className="flex items-center justify-center space-x-2 py-7 hover:scale-110 transform transition duration-300" onClick={handleSignOut}>
        <Image src={"/logoutIcon.png"} alt="log out" width={20} height={20} unoptimized />
        <span className="text-[#E55858] font-semibold text-lg">Sign Out</span>
      </button>
    </div>
  );
}

export default LeftDashboard;
