import Link from "next/link";
import ValorantButton from "../buttons/valorant-button";
import Square from "../ornaments/square";
import VerticalLine from "../ornaments/vertical-line";
import IntroMySelf from "./intro-my-self";

const IntroSection = () => {
  return (
    <div className="relative bg-valorantBlack w-full overflow-hidden">
      <div className="relative flex flex-col border-valorantWhite/50 border-x mx-auto w-[70%]">
        <div className="flex flex-col justify-center items-center gap-4 m-auto py-5 w-full tracking-widest">
          <Square className="hover:border-valorant bg-valorant hover:bg-transparent hover:border w-[15px] h-[15px] transition-all self-start" />
          <IntroMySelf />
          <ValorantButton>
            <Link href={"/about"}>MORE ABOUT ME</Link>
          </ValorantButton>
          <Square className="border-valorant hover:bg-valorant mr-3 border hover:border-none w-[15px] h-[15px] transition-all self-end" />
        </div>
        <VerticalLine className="top-0 left-[300px] absolute bg-valorantWhite/50 w-[1px] h-[100%]" />
      </div>
    </div>
  );
};

export default IntroSection;
