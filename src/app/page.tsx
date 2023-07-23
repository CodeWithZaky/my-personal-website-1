import Image from "next/image";
import profilIMG from "@/assets/profil2.jpg";
import { Metadata } from "next";
import LearnMoreButton from "../components/LearnMoreButton";
import Triangle from "../components/Triangle";
import LatestProject from "../components/LatestProject";

export const metadata: Metadata = {
  title: "Home - Portfolio",
};

const Home = () => {
  return (
    <>
      {" "}
      <section className="bg-black w-full relative">
        <Triangle />
        <div className="relative mx-auto w-[70%] flex flex-col border-x border-slate-300">
          <div className="flex flex-col justify-center items-center m-auto gap-5 py-20">
            <h3 className="text-2xl font-bold text-slate-100 text-center">
              welcome to my portfolio
            </h3>
            <h1 className="text-8xl font-bold text-slate-100 text-center">
              {"I'M ZAKY"}
            </h1>
            <h1 className="text-5xl font-bold text-slate-100 text-center">
              {"FRONTEND WEB DEVELOPER"}
            </h1>
            <LearnMoreButton />
          </div>
          <div className="w-[15px] h-[15px] bg-red-400 absolute left-0 top-20" />
          <div className="w-[1px] h-[100%] bg-slate-300 absolute left-[300px] top-0" />
        </div>
      </section>
      <section className="LATEST-PROJECT w-full">
        <div className="mx-auto w-[70%] flex flex-col border-l border-black py-10 gap-3">
          <div className="text-7xl text-red-500 font-extrabold">
            LATEST PROJECT
          </div>
          <div className="grid grid-cols-3 gap-4">
            <LatestProject />
            <LatestProject />
            <LatestProject />
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
