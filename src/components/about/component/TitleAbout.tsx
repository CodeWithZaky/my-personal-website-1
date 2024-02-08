import { TungstenBold } from "@/src/assets/fonts/font";
import clsx from "clsx";

const TitleAbout = () => {
  return (
    <h1
      className={clsx(
        TungstenBold.className,
        "text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-valorantBlack"
      )}
    >
      ABOUT ME
    </h1>
  );
};

export default TitleAbout;
