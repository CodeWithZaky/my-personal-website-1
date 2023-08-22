import LearnMoreButton from "@/components/pages/home/LearnMoreButton";
import { TriangleHome } from "@/components/ornaments/Triangle";
import { Metadata } from "next/types";
import { DINNextW1G } from "@/assets/fonts/font";
import clsx from "clsx";
import Contacts from "@/components/pages/contacts/ContactPage";
import LatestProject from "@/components/pages/home/LatestProject";

export const metadata: Metadata = {
  title: "Home - Portfolio",
  description: "This is the home page and I wish you all the best",
};

const Home = () => {
  return (
    <section>
      <div className="relative w-full overflow-hidden bg-valorantBlack">
        <TriangleHome />
        <div className="relative mx-auto w-[70%] flex flex-col border-x border-valorantWhite/50">
          <div className="flex flex-col items-center justify-center w-full gap-4 py-8 m-auto tracking-widest">
            <div className="w-[15px] h-[15px] bg-valorant self-start" />
            <h3
              className={clsx(
                DINNextW1G.className,
                "text-xl font-bold text-center md:text-2xl text-valorantWhite tracking-widest"
              )}
            >
              welcome to my personal website
            </h3>
            <h1 className="font-bold text-center text-6xl md:text-8xl text-valorantWhite tracking-[.4rem]">
              {"I'M ZAKY"}
            </h1>
            <h1 className="text-4xl font-bold text-center md:text-5xl text-valorantWhite tracking-[.4rem]">
              FRONTEND WEB DEVELOPER
            </h1>
            <LearnMoreButton />
            <div className="w-[15px] h-[15px] border border-valorant self-end mr-3" />
          </div>
          <div className="w-[1px] h-[100%] bg-valorantWhite/50 absolute left-[300px] top-0" />
        </div>
      </div>
      <LatestProject />
      <Contacts />
    </section>
  );
};
export default Home;
