import { ToggleContext } from "@/src/context/ToggleButton";
import { useContext } from "react";

const Hamburger = () => {
  const { toggleFn } = useContext(ToggleContext);

  return (
    <div
      onClick={toggleFn}
      className="flex flex-col items-center justify-center gap-1 mr-10 cursor-pointer md:hidden md:mr-0"
    >
      <div className="w-[30px] h-[5px] bg-valorantWhite" />
      <div className="w-[30px] h-[5px] bg-valorantWhite" />
      <div className="w-[30px] h-[5px] bg-valorantWhite" />
    </div>
  );
};

export default Hamburger;
