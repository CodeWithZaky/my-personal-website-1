import React from "react";

const LatestProject = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-1">
      <div className="w-[300px] h-[150px] bg-red-500" />
      <h3 className="font-semibold">
        {"12/12/12 . "}
        <span className="text-red-500">
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
