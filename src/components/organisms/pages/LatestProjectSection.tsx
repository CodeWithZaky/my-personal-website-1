import { TungstenBold2 } from "@/src/assets/fonts/font";
import { thumbnail_projects } from "@/src/components/atoms/items/Tubmnail-Projects";
import clsx from "clsx";

const LatestProject = () => {
  return (
    <div className="w-full">
      <div className="group mx-auto w-[70%] flex flex-col border-l border-valorantBlack/50 pt-10 pb-20 gap-3">
        <div
          className={clsx(
            TungstenBold2.className,
            "z-10 -mb-12 -ml-1 font-bold transition-all group-hover:-mb-5 text-7xl md:text-9xl text-valorant"
          )}
        >
          LATEST PROJECT
        </div>
        <div className="grid grid-cols-1 gap-5 transition-all md:grid-cols-1 lg:grid-cols-3">
          {thumbnail_projects.slice(0, 3).map((item, index) => {
            return <div key={index.toString()}>{item}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default LatestProject;
