import { TriangleHome } from "../../atoms/ornaments/Triangle";
import SelfIntroductios from "../../molecules/SelfIntroductios";
import LearnMoreButton from "../../atoms/buttons/LearnMoreButton";

const HeaderSection = () => {
  return (
    <div className="relative w-full overflow-hidden bg-valorantBlack">
      <TriangleHome />
      <div className="relative mx-auto w-[70%] flex flex-col border-x border-valorantWhite/50">
        <div className="flex flex-col items-center justify-center w-full gap-4 py-8 m-auto tracking-widest">
          <div className="w-[15px] h-[15px] bg-valorant self-start" />
          <SelfIntroductios />
          <LearnMoreButton />
          <div className="w-[15px] h-[15px] border border-valorant self-end mr-3" />
        </div>
        <div className="w-[1px] h-[100%] bg-valorantWhite/50 absolute left-[300px] top-0" />
      </div>
    </div>
  );
};

export default HeaderSection;
