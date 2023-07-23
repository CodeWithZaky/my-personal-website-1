import { icons_language } from "@/src/utils/skill-icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Language",
};

const Language = () => {
  return (
    <div className="grid grid-cols-4 text-8xl gap-7 border">
      {icons_language.map((items) => {
        return items;
      })}
    </div>
  );
};
export default Language;
