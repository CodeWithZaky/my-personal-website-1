import { TriangleSkill } from "@/src/components/ornaments/Triangle";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Skill - Portfolio",
};

const skills = ["next js", "tailwind", "typescript", "redux toolkit"];

const Skill = () => {
  return (
    <div className="h-screen w-full">
      <section className="h-[12%] w-full flex">
        <div className="w-[20%] h-full bg-valorant border-b-2 border-white" />
        <div className="w-[80%] h-full bg-valorant border-b-2 border-l-2 border-white" />
      </section>

      <section className="h-[63%] w-full flex relative">
        <div className="w-[20%] h-full bg-valorant relative">
          <div className="w-[100px] h-[3px] bg-valorant absolute bottom-[3rem] right-0" />
        </div>
        <div className="w-[80%] h-full text-valorantWhite bg-valorant border-l-2 border-white space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold">MY SKILLS</h1>
          <div className="space-y-3">
            {skills.map((skill, index) => {
              return (
                <div key={index} className="flex items-center justify-start">
                  <div className="w-[15px] h-[15px] bg-valorantWhite mr-4" />
                  <p className="text-xl font-semibold">{skill}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* <TriangleSkill /> */}
        <div className="h-[100px] w-[100px] bg-valorantWhite absolute right-0 bottom-0" />
      </section>

      <section className="h-[15%] w-full flex relative">
        <div className="w-[20%] h-full" />
        <div className="w-[80%] h-full border-l-2 border-white">
          <div className="flex flex-row justify-end items-end gap-5 absolute right-0 bottom-5">
            <div className="w-[30px] h-[10px] border border-valorant" />
            <div className="w-[60px] h-[10px] border border-valorant" />
            <div className="w-[100px] h-[10px] bg-valorant" />
          </div>
        </div>
      </section>

      <section className="h-[10%] w-full flex">
        <div className="w-[20%] h-full" />
        <div className="w-[80%] h-full border-l-2 border-white" />
      </section>
    </div>
  );
};
export default Skill;
