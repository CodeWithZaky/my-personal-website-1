import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Portfolio",
};

const About = () => {
  return (
    <div className="w-full h-[100vh] bg-valorantWhite flex justify-end items-center">
      <div className="w-[85%] h-full border-l-2 border-black flex justify-start items-start">
        <div className="w-full  flex flex-col justify-center items-start space-y-5 mt-10">
          <div className="flex justify-between w-full ">
            <p className="text-6xl md:text-8xl font-bold ">ABOUT ME</p>
            <div className="flex w-[40%] flex-col justify-end items-center gap-4 ">
              <div className="w-full h-[100px] bg-valorant" />
              <div className="w-full h-[3px] bg-valorant" />
            </div>
          </div>
          <div className="bg-valorant w-[20px] h-[20px]" />
          <div className="space-y-2 text-md md:text-xl font-semibold pr-5 md:pr-0 w-full md:w-[80%]">
            <p>
              My name is Ahmad Zaky Ubaidillah, but you can call me Zaky or
              Ubed.
            </p>
            <p>
              For over 2 years developing and programming interfaces with Next
              js, Tailwind css and Typescript.
            </p>
            <p>
              study of Systems Analysis and Development from Informatics
              Engineering.
            </p>
            <p>
              Interest in Front-end development with Next js, Tailwind css, and
              Typescript.
            </p>
            <p>Trying to be a little better than yesterday every day.</p>
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
