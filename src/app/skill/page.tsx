"use client";

const skills = ["next js", "tailwind", "typescript", "redux toolkit"];

const TriangleSkill = () => {
  return (
    <div className="w-auto overflow-hidden inline-block absolute bottom-0 right-0">
      <div className="h-[500px] w-[270px] bg-valorantWhite rotate-45 transform origin-bottom-left"></div>
    </div>
  );
};

const Skill = () => {
  return (
    <div className="h-screen w-full bg-valorantWhite">
      <div className="h-[12%] w-full flex">
        <div className="w-[20%] h-full bg-valorantYellow border-b-2 border-white" />
        <div className="w-[80%] h-full bg-valorantYellow border-b-2 border-l-2 border-white" />
      </div>
      <div className="h-[63%] w-full flex relative">
        <div className="w-[20%] h-full bg-valorantYellow relative">
          <div className="w-[100px] h-[10px] bg-valorant absolute bottom-[3rem] right-0" />
        </div>
        <div className="w-[80%] h-full bg-valorantYellow border-l-2 border-white space-y-8">
          <h1 className="text-8xl font-bold">MY SKILLS</h1>
          <div className="space-y-3">
            {skills.map((skill, index) => {
              return (
                <div key={index} className="flex items-center justify-start">
                  <div className="w-[15px] h-[15px] bg-valorant mr-4" />
                  <p className="text-xl font-semibold">{skill}</p>
                </div>
              );
            })}
          </div>
        </div>
        <TriangleSkill />
      </div>
      <div className="h-[15%] w-full flex relative">
        <div className="w-[20%] h-full" />
        <div className="w-[80%] h-full border-l-2 border-white">
          <div className="flex flex-row justify-end items-end gap-5 absolute right-0 bottom-5">
            <div className="w-[30px] h-[10px] border border-valorant" />
            <div className="w-[60px] h-[10px] border border-valorant" />
            <div className="w-[100px] h-[10px] bg-valorant" />
          </div>
        </div>
      </div>
      <div className="h-[10%] w-full flex">
        <div className="w-[20%] h-full" />
        <div className="w-[80%] h-full border-l-2 border-white" />
      </div>
    </div>
  );
};
export default Skill;
