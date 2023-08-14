import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiGmail,
  SiFacebook,
  SiYoutube,
} from "react-icons/si";

import { Metadata } from "next/types";
import GreySquare from "@/src/components/ornaments/GreySquare";
import Copyright from "@/src/components/pages/contact/Copyright";
import RedSquare from "@/src/components/ornaments/RedSquare";

export const metadata: Metadata = {
  title: "Contact - Portfolio",
};

const socialIcons: { icon: React.ReactNode; url: string }[] = [
  {
    icon: <SiGithub />,
    url: "./",
  },
  {
    icon: <SiLinkedin />,
    url: "./",
  },
  {
    icon: <SiInstagram />,
    url: "./",
  },
  {
    icon: <SiYoutube />,
    url: "./",
  },
  {
    icon: <SiGmail />,
    url: "./",
  },
  {
    icon: <SiFacebook />,
    url: "./",
  },
];

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black">
      <section className="w-full min-h-[80vh]  flex flex-row ">
        <section className="relative w-[15%]">
          <RedSquare possition={"top-5 right-0"} />
          <GreySquare possition={"top-[50%] right-0"} />
        </section>
        <section className="w-[70%] flex flex-col justify-center items-center text-valorantWhite gap-10">
          <div className="text-2xl font-semibold text-center sm:text-3xl md:text-5xl">
            CONTACT US
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center text-2xl sm:text-4xl md:text-5xl gap-7">
            {socialIcons.map((contact, index) => {
              return (
                <div key={index} className="p-5 bg-white/10 rounded-3xl">
                  {contact.icon}
                </div>
              );
            })}
          </div>
          <Copyright />
        </section>
        <section className="w-[15%] relative">
          <GreySquare possition={"top-[30%] left-0"} />
        </section>
      </section>
      <section className="relative w-full h-[20vh]">
        <div className="absolute top-0 right-0 flex gap-4">
          <div className="border border-valorant w-[25px] md:w-[50px] h-[15px]" />
          <div className="bg-valorant w-[100px] md:w-[200px] h-[15px]" />
        </div>
        <RedSquare possition={"top-0 left-[1rem] md:left-[10rem]"} />
      </section>
    </div>
  );
};

export default ContactPage;
