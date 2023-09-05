import { TungstenBold } from "@/src/assets/fonts/font";
import clsx from "clsx";

const TitleAbout = () => {
  return (
    <h1
      className={clsx(
        TungstenBold.className,
        "text-2xl md:text-3xl lg:text-4xl text-valorantBlack"
      )}
    >
      ABOUT ME
    </h1>
  );
};

export default TitleAbout;
