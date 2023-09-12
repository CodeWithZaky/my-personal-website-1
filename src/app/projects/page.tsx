"use client";
import { Metadata } from "next/types";
import { useState } from "react";
import Square from "@/src/components/atoms/ornaments/Square";
import { thumbnail_projects } from "@/src/components/atoms/data/Tubmnail-Projects";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Project - Portfolio",
  description: "This is the projects page and I wish you all the best",
};

const ProjectsPage = () => {
  const [widthRightSection] = useState("w-5/6 md:w-4/5");
  const [widthLeftSection] = useState("w-1/6 md:w-1/5");

  return (
    <section className="w-full min-h-screen">
      <div className="h-[4rem] w-full flex">
        <div
          className={clsx(
            widthRightSection,
            "border-r border-valorantBlack/50"
          )}
        />
        <div className={widthLeftSection} />
      </div>
      <div className="flex w-full">
        <ProjectContent widthRightSection={widthRightSection} />
        <div
          className={clsx(
            widthLeftSection,
            "border-t border-t-valorantBlack/50"
          )}
        />
      </div>
    </section>
  );
};

export default ProjectsPage;

const ProjectContent = ({
  widthRightSection,
}: {
  widthRightSection: string;
}) => {
  return (
    <div
      className={clsx(
        widthRightSection,
        "flex flex-col items-end justify-end border-t border-r border-r-valorantBlack/50 border-t-valorantBlack/50"
      )}
    >
      <Square className="w-[10px] h-[10px] bg-valorant" />
      <h1 className="z-10 text-7xl text-valorant sm:-mb-0 md:-mb-9 md:text-8xl lg:text-9xl">
        PROJECTS
      </h1>
      <div className="w-[90%] md:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 border-l border-valorantBlack/50 gap-3">
        {thumbnail_projects.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(
                // index == 0
                //   ? "border-r border-b"
                //   : index == 1
                //   ? "border-l border-b"
                //   :
                index % 2 == 1
                  ? "md:border-l border-t border-b"
                  : index % 2 == 0
                  ? "md:border-r border-t border-b"
                  : "",
                "p-5 border-valorantBlack/50"
              )}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};
