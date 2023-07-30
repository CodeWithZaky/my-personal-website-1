import clsx from "clsx";
import React from "react";

const GreySquare = ({ possition }: { possition?: string }) => {
  return (
    <div className={clsx("absolute  grid grid-cols-2 gap-2", possition)}>
      <div className="bg-white/50 w-[7px] h-[7px]" />
      <div className="bg-white/50 w-[7px] h-[7px]" />
      <div className="bg-white/50 w-[7px] h-[7px]" />
      <div className="bg-white/50 w-[7px] h-[7px]" />
    </div>
  );
};

export default GreySquare;
