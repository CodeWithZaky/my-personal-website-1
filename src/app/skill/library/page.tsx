import { icons_library } from "@/src/components/skill-icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Libray",
};

const About = () => {
  return (
    <div className="grid grid-cols-4 text-8xl gap-7 border">
      {icons_library.map((items) => {
        return items;
      })}
    </div>
  );
};
export default About;
