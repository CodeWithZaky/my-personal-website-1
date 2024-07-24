import Copyright from "@/src/components/Copyright";
import clsx from "clsx";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export const social_icons: { icon: React.ReactNode; url: string }[] = [
  {
    icon: <SiLinkedin />,
    url: "https://www.linkedin.com/in/ahmad-zaky-ubaidillah",
  },
  {
    icon: <SiInstagram />,
    url: "https://www.instagram.com/zaky0bed",
  },
  {
    icon: <SiGithub />,
    url: "https://github.com/ZakyInCode",
  },
];

const ContactSection = () => {
  return (
    <div className="flex flex-col justify-center items-end gap-5 border-valorantBlack/50 m-auto py-20 pr-1 border-t border-r w-[70%]">
      <div className="font-bold text-2xl text-center text-valorantBlack sm:text-3xl md:text-6xl">
        REACH ME OUT
      </div>
      <div className="flex flex-row flex-wrap justify-end items-center gap-3 text-2xl text-valorantBlack sm:text-3xl md:text-4xl">
        {social_icons.map((item, index) => {
          return (
            <a
              href={item.url}
              target="_blank"
              key={index}
              className={clsx(
                "p-3 border border-valorantBlack rounded-sm hover:rounded-xl transition-all cursor-pointer"
              )}
            >
              {item.icon}
            </a>
          );
        })}
      </div>
      <Copyright />
    </div>
  );
};

export default ContactSection;
