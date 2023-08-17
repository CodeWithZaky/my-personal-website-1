import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiGmail,
  SiFacebook,
  SiYoutube,
} from "react-icons/si";
import Copyright from "@/src/components/pages/contacts/Copyright";
import clsx from "clsx";

const socialIcons: { icon: React.ReactNode; url: string }[] = [
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
  {
    icon: <SiGithub />,
    url: "./",
  },
];

const ContactPage = () => {
  return (
    <div className="flex flex-col items-end justify-center w-[70%] m-auto border-t border-r border-valorantBlack/50 py-20 gap-5">
      <div className="text-2xl font-semibold text-center sm:text-3xl md:text-5xl text-valorantBlack">
        REACH ME OUT
      </div>
      <div className="flex flex-row flex-wrap items-center justify-end gap-1 text-2xl sm:text-3xl md:text-4xl text-valorantBlack">
        {socialIcons.map((contact, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "p-3 border border-valorantBlack rounded-xl md:rounded-3xl hover:rounded-sm transition-all cursor-pointer"
              )}
            >
              {contact.icon}
            </div>
          );
        })}
      </div>
      <Copyright />
    </div>
  );
};

export default ContactPage;
