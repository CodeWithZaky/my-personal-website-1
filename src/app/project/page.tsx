import { Metadata } from "next/types";
import { TubmnailArray } from "@/src/components/pages/project/TubmnailProject";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Project - Portfolio",
};

const Project = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="h-[4rem] w-full flex">
        <div className="w-full md:w-[80%] border-r border-black/50" />
        <div className="w-0 md:w-[20%] " />
      </div>
      <div className="flex w-full">
        <div className="w-full md:w-[80%] border-r border-t border-r-black/50 border-t-black/50 flex flex-col justify-end items-end">
          <div className="w-[10px] h-[10px] bg-valorant" />
          <h1 className="mb-5 text-5xl font-bold md:text-8xl">PROJECTS</h1>
          <div className="w-[90%] md:w-[80%] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 border-l border-black/50 gap-3">
            {TubmnailArray.map((item, index) => {
              return (
                <div
                  key={index.toString()}
                  className={clsx(
                    // index == 0
                    //   ? "border-r border-b"
                    //   : index == 1
                    //   ? "border-l border-b"
                    //   :
                    index % 2 == 1
                      ? "border-t border-l border-b"
                      : index % 2 == 0
                      ? "border-r border-t border-b"
                      : "",
                    "p-5 border-gray-500"
                  )}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-0 md:w-[20%] border-t border-t-black/50" />
      </div>
    </div>
  );
};

export default Project;
