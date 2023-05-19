"use client";
import NavSkill from "@/src/components/NavSkill";
import { useEffect } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
import { useRouter } from "next/navigation";
const About = () => {
  const { push } = useRouter();
  useEffect(() => {
    setTimeout(() => {
      push("/skill/all");
    }, 1000);
  }, [push]);
  return (
    <div className="flex flex-col justify-center items-start gap-7 border border-red-500 w-[80%] mx-auto px-5 pb-5">
      <div className="font-bold text-4xl font mono mb-5">My Skills</div>
      <NavSkill />
      <div className="grid grid-cols-4 text-8xl gap-7 border">
        <SiHtml5 className="text-red-800 bg-slate-100 p-3 rounded-sm shadow-lg" />
        <SiCss3 className="text-blue-800 bg-slate-100 p-3 rounded-sm shadow-lg" />
        <SiJavascript className="text-yellow-500 bg-slate-100 p-3 rounded-sm shadow-lg" />
        <SiTypescript className="text-blue-600 bg-slate-100 p-3 rounded-sm shadow-lg" />
        <SiTailwindcss className="text-sky-500 bg-slate-100 p-3 rounded-sm shadow-lg" />
        <SiReact className="text-sky-700 bg-slate-100 p-3 rounded-sm shadow-lg" />
        <SiNextdotjs className="text-black bg-slate-100 p-3 rounded-sm shadow-lg" />
      </div>
    </div>
  );
};
export default About;
