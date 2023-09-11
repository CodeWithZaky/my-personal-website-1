import { TungstenBold } from "@/src/assets/fonts/font";
import { skill_items } from "../../atoms/data/Skilll-Items";
import clsx from "clsx";

const SkillSection = () => {
  return (
    <div className="inline-flex flex-wrap gap-2 font-semibold lg:pr-20 text-md md:text-xl">
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
