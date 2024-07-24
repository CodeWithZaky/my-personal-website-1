import { TungstenBold } from "@/src/assets/fonts/font";
import clsx from "clsx";

const skill_items: string[] = [
  "react js",
  "next js",
  "tailwind",
  "typescript",
  "react query",
  "react hook form",
  "shadcn ui",
  "swipper js",
  "sweetalert2",
  "framer motion",
];

const SkillSection = () => {
  return (
    <div className="inline-flex flex-wrap gap-2 md:pr-16 lg:pr-20 w-4/5 font-semibold text-md md:text-xl">
      {skill_items.map((item, index) => (
        <p
          key={index}
          className={clsx(
            TungstenBold.className,
            "px-3 text-center bg-valorantBlack text-valorantWhite tracking-wider"
          )}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default SkillSection;
