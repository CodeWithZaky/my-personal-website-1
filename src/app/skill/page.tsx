import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Skill - Portfolio",
};

const skills = ["react js", "next js", "tailwind", "typescript"];

const Skill = () => {
  return (
    <div className="w-[70%] min-h-screen border-l border-gray-500 flex flex-col justify-center items-start m-auto">
      <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
        Current Favorite Tech Stack
      </h1>
      <div className="inline-flex flex-wrap gap-1 font-semibold text-md md:text-xl">
        {skills.map((item, index) => (
          <p
            key={index}
            className="px-3 text-center bg-black/90 text-valorantWhite"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
export default Skill;
