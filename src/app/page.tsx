import React from "react";
import Image from "next/image";
import profilIMG from "@/assets/profil2.jpg";

const Home = () => {
  return (
    <main className="h-full flex justify-center items-center border">
      <div className="flex flex-row justify-between items-start w-[80%] mx-auto font-mono border border-red-500 px-10">
        <div className="w-7/12 space-y-7 border">
          <div className="font-bold text-5xl space-y-2 pt-4">
            <p>Hi, I am John,</p>
            <p>Creative Technologist</p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <div>
            <button className="bg-red-400 text-white text-xl py-3 px-4 rounded-sm">
              Download Resume
            </button>
          </div>
        </div>
        <div className="w-4/12 flex justify-end items-center pr-5 border">
          <Image
            alt="profil image"
            src={profilIMG}
            width={250}
            className="bg-no-repeat object-cover rounded-full"
          />
        </div>
      </div>
    </main>
  );
};
export default Home;
