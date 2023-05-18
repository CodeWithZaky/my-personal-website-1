import NavSkill from "@/src/components/NavSkill";
import React from "react";
import { SiTailwindcss, SiReact } from "react-icons/si";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-7 w-[80%] m-auto px-5 pb-5">
      <div className="font-bold text-4xl font mono mb-5">My Skills</div>
      <NavSkill />
      <div className="grid grid-cols-4 text-8xl gap-7">
        <SiTailwindcss className="text-sky-500 bg-slate-100 p-3 rounded-sm shadow-lg" />
        <SiReact className="text-sky-700 bg-slate-100 p-3 rounded-sm shadow-lg" />
      </div>
    </div>
  );
};
export default About;
