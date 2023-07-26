import React from "react";

const LatestProject = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-1  w-[90%] lg:w-[100%]">
      <div className="w-[300px] h-[150px] bg-valorant" />
      <h3 className="font-semibold">
        {"12/12/12 . "}
        <span className="text-valorant">
          {"   next js, tailwind, typescript"}
        </span>
      </h3>
      <p className="font-semibold text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit Quam laborum
      </p>
    </div>
  );
};

export default LatestProject;
