import React from "react";

const Hamburger = ({ toggleButton }: { toggleButton: () => void }) => {
  return (
    <div
      onClick={toggleButton}
      className="flex md:hidden flex-col justify-center items-center gap-1 mr-10 md:mr-0"
    >
      <div className="w-[30px] h-[5px] rounded-md bg-valorantWhite" />
      <div className="w-[30px] h-[5px] rounded-md bg-valorantWhite" />
      <div className="w-[30px] h-[5px] rounded-md bg-valorantWhite" />
    </div>
  );
};

export default Hamburger;
