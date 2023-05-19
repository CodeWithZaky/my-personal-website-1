import { icons_framework } from "@/src/components/icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Framework",
};

const About = () => {
  return (
    <div className="grid grid-cols-4 text-8xl gap-7 border">
      {icons_framework.map((items) => {
        return items;
      })}
    </div>
  );
};
export default About;
