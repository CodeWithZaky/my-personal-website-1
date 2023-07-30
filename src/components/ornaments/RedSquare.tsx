import clsx from "clsx";
import React from "react";
interface Props {
  possition: String;
}
const RedSquare = ({ possition }: Props) => {
  return (
    <div
      className={clsx("absolute w-[15px] h-[15px] bg-valorant", possition)}
    />
  );
};

export default RedSquare;
