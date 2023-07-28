import { Metadata } from "next";
import LearnMoreButton from "../components/home/LearnMoreButton";
import Triangle from "../components/Triangle";
import LatestProject from "../components/home/LatestProject";

export const metadata: Metadata = {
  title: "Home - Portfolio",
};

const Home = () => {
  return (
    <>
      {" "}
      <section className="bg-black w-full relative">
        <Triangle />
        <div className="relative mx-auto w-[70%] flex flex-col border-x border-valorantWhite">
          <div className="w-full flex flex-col justify-center items-center m-auto gap-4 py-16">
            <div className="w-[15px] h-[15px] bg-valorant self-start" />
            <h3 className="text-xl md:text-2xl font-bold text-valorantWhite text-center">
              welcome to my portfolio
            </h3>
            <h1 className="text-7xl md:text-8xl font-bold text-valorantWhite text-center">
              {"I'M ZAKY"}
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-valorantWhite text-center">
              {"FRONTEND WEB DEVELOPER"}
            </h1>
            <LearnMoreButton />
          </div>
          <div className="w-[1px] h-[100%] bg-valorantWhite absolute left-[300px] top-0" />
        </div>
      </section>
      <section className="LATEST-PROJECT w-full bg-valorantWhite">
        <div className="mx-auto w-[70%] flex flex-col border-l border-black py-10 gap-3">
          <div className="text-5xl md:text-7xl text-valorant font-extrabold">
            LATEST PROJECT
          </div>
          <div className=" grid grid-flow-col-1 md:grid-flow-col-1 lg:grid-cols-3 gap-5">
            <LatestProject />
            <LatestProject />
            <LatestProject />
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
