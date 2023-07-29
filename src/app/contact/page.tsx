import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiGmail,
  SiFacebook,
} from "react-icons/si";

const github = <SiGithub />;
const instagram = <SiInstagram />;
const linkedin = <SiLinkedin />;
const gamil = <SiGmail />;
const facebook = <SiFacebook />;
const contacts = [github, instagram, linkedin, gamil, facebook];

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-black">
      <section className="w-full h-[80%]  flex flex-row">
        <section className="relative w-[15%]">
          <div className="absolute w-[15px] h-[15px] bg-valorant top-5 right-0" />
          <div className="absolute top-[50%] right-0 grid grid-cols-2 gap-2">
            <div className="bg-white/50 w-[7px] h-[7px]" />
            <div className="bg-white/50 w-[7px] h-[7px]" />
            <div className="bg-white/50 w-[7px] h-[7px]" />
            <div className="bg-white/50 w-[7px] h-[7px]" />
          </div>
        </section>
        <section className="w-[70%] flex flex-col justify-center items-center text-valorantWhite gap-10">
          <div className="text-3xl md:text-5xl text-center font-semibold">
            CONTACT US
          </div>
          <div className="flex flex-row flex-wrap justify-center items-center text-4xl md:text-5xl gap-7">
            {contacts.map((contact, index) => {
              return (
                <div key={index} className="p-5 bg-white/10 rounded-3xl">
                  {contact}
                </div>
              );
            })}
          </div>
          <p className="text-center text-md md:text-lg">
            @2023 Ahmad Zaky Ubaidillah, PORTFOLIO, AND ANY ASSOCIATED LOGOS ARE
            TRADEMARKS, SERVISE
            <br />
            MARKS,AND/OR TRADEMARKS BY DEVELOPER
          </p>
        </section>
        <section className="w-[15%] relative">
          <div className="absolute top-[30%] left-0 grid grid-cols-2 gap-2">
            <div className="bg-white/50 w-[7px] h-[7px]" />
            <div className="bg-white/50 w-[7px] h-[7px]" />
            <div className="bg-white/50 w-[7px] h-[7px]" />
            <div className="bg-white/50 w-[7px] h-[7px]" />
          </div>
        </section>
      </section>
      <section className="relative w-full h-[20%] mt-3">
        <div className="absolute flex gap-4 right-0 top-0">
          <div className="border border-valorant w-[25px] md:w-[50px] h-[15px]" />
          <div className="bg-valorant w-[100px] md:w-[200px] h-[15px]" />
        </div>
        <div className="absolute w-[15px] h-[15px] bg-valorant top-0 left-[1rem] md:left-[10rem]" />
      </section>
    </div>
  );
};

export default ContactPage;
