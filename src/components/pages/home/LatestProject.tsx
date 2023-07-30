import React from "react";

const LatestProject = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full">
      <div className="aspect-video bg-valorant w-full" />
      <h3 className="font-semibold text-sm">
        {"12/12/12 . "}
        <span className="text-valorant">
          {"   next js, tailwind, typescript"}
        </span>
      </h3>
      <p className="font-semibold text-md md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit Quam laborum
      </p>
    </div>
  );
};

export default LatestProject;
