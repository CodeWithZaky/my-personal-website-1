import { DINNextW1G } from "@/src/assets/fonts/font";
import clsx from "clsx";

const SelfIntroductios = () => {
  return (
    <>
      <h3
        className={clsx(
          DINNextW1G.className,
          "text-xl text-center md:text-2xl text-valorantWhite tracking-widest"
        )}
      >
        welcome to my personal website
      </h3>
      <h1 className="text-center text-6xl md:text-8xl text-valorantWhite tracking-[.4rem]">
        {"I'M ZAKY"}
      </h1>
      <h1 className="text-4xl text-center md:text-5xl text-valorantWhite tracking-[.4rem]">
        FRONTEND WEB DEVELOPER
      </h1>
    </>
  );
};

export default SelfIntroductios;
