import React from "react";

const Hamburger = ({ toggleButton }: { toggleButton: () => void }) => {
  return (
    <div
      onClick={toggleButton}
      className="flex flex-col items-center justify-center gap-1 mr-10 cursor-pointer md:hidden md:mr-0"
    >
      <div className="w-[30px] h-[5px] bg-valorantWhite" />
      <div className="w-[30px] h-[5px] bg-valorantWhite" />
      <div className="w-[30px] h-[5px] bg-valorantWhite" />
    </div>
  );
};

export default Hamburger;
