import { icons_all } from "@/src/components/icons-skill";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All",
};
const About = () => {
  return (
    <div className="grid grid-cols-4 text-8xl gap-7 border">
      {icons_all.map((items) => {
        return items;
      })}
    </div>
  );
};
export default About;
