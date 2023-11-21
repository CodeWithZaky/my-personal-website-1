import Triangle from "../../atoms/ornaments/Triangle";
import Square from "../../atoms/ornaments/Square";
import VerticalLine from "../../atoms/ornaments/VerticalLine";
import MoreAboutMe from "../../atoms/buttons/MoreAboutMe";
import SelfIntroductios from "../../molecules/SelfIntroductios";

const HeaderSection = () => {
  return (
    <div className="relative w-full overflow-hidden bg-valorantBlack">
      <Triangle />
      <div className="relative mx-auto w-[70%] flex flex-col border-x border-valorantWhite/50">
        <div className="flex flex-col items-center justify-center w-full gap-4 py-5 m-auto tracking-widest">
          <Square className="w-[15px] h-[15px] bg-valorant hover:bg-transparent hover:border hover:border-valorant self-start transition-all" />
          <SelfIntroductios />
          <MoreAboutMe />
          <Square className="w-[15px] h-[15px] border border-valorant hover:border-none hover:bg-valorant self-end mr-3 transition-all" />
        </div>
        <VerticalLine className="w-[1px] h-[100%] bg-valorantWhite/50 absolute left-[300px] top-0" />
      </div>
    </div>
  );
};

export default HeaderSection;
