import LearnMoreButton from "@/components/pages/home/LearnMoreButton";
import { TriangleHome } from "@/components/ornaments/Triangle";
import { Metadata } from "next/types";
import { TubmnailArray } from "@/src/components/pages/project/TubmnailProject";

export const metadata: Metadata = {
  title: "Home - Portfolio",
};

const Home = () => {
  return (
    <section>
      <div className="relative w-full overflow-hidden bg-black">
        <TriangleHome />
        <div className="relative mx-auto w-[70%] flex flex-col border-x border-valorantWhite">
          <div className="flex flex-col items-center justify-center w-full gap-4 py-16 m-auto">
            <div className="w-[15px] h-[15px] bg-valorant self-start" />
            <h3 className="text-xl font-bold text-center md:text-2xl text-valorantWhite">
              welcome to my portfolio
            </h3>
            <h1 className="font-bold text-center text-7xl md:text-8xl text-valorantWhite">
              {"I'M ZAKY"}
            </h1>
            <h1 className="text-4xl font-bold text-center md:text-5xl text-valorantWhite">
              {"FRONTEND WEB DEVELOPER"}
            </h1>
            <LearnMoreButton />
          </div>
          <div className="w-[1px] h-[100%] bg-valorantWhite absolute left-[300px] top-0" />
        </div>
      </div>
      <div className="w-full bg-valorantWhite">
        <div className="mx-auto w-[70%] flex flex-col border-l border-black py-10 gap-3">
          <div className="z-10 text-5xl font-extrabold -mb-7 md:text-7xl text-valorant">
            LATEST PROJECT
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-3">
            {TubmnailArray.map((item, index) => {
              return <div key={index.toString()}>{item}</div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
