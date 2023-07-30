import { me } from "@/src/components/pages/about/Me";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "About - Portfolio",
};

const About = () => {
  return (
    <div className="w-full min-h-screen flex justify-end items-center">
      <div className="w-[85%] h-[100vh] border-l-2 border-black flex justify-start items-center">
        <div className="w-full  flex flex-col justify-center items-start space-y-5 mt-10">
          <div className="flex justify-between w-full mt-3">
            <p className="text-6xl md:text-7xl lg:text-8xl font-bold">
              ABOUT ME
            </p>
            <div className="flex w-0 sm:w-[40%] flex-col justify-end items-center gap-4 ">
              <div className="w-full h-[100px] bg-valorant" />
              <div className="w-full h-[3px] bg-valorant" />
            </div>
          </div>
          <div className="bg-valorant w-[20px] h-[20px]" />
          <div className="space-y-2 text-md md:text-xl font-semibold pr-5 md:pr-0 w-full md:w-[80%]">
            {me.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
          <div className="flex flex-col justify-center items-start gap-4">
            <div className="flex gap-5 self-end">
              <div
                className={
                  `w-[10px] h-[10px] ` +
                  `md:w-[20px] md:h-[20px] ` +
                  `bg-valorant`
                }
              />
              <div
                className={
                  `w-[10px] h-[10px] ` +
                  `md:w-[20px] md:h-[20px] ` +
                  `bg-valorant`
                }
              />
            </div>
            <div className="w-[200px] h-[50px] md:w-[400px] md:h-[100px] bg-valorant" />
          </div>
          <div className="w-[20px] h-[20px] bg-valorant self-end" />
        </div>
      </div>
    </div>
  );
};

export default About;
