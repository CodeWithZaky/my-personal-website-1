import { thumbnail_projects } from "../../atoms/data/Tubmnail-Projects";
import clsx from "clsx";
import Square from "../../atoms/ornaments/Square";

const ProjectContent = () => {
  return (
    <div className="w-full md:w-[80%] border-r border-t border-r-valorantBlack/50 border-t-valorantBlack/50 flex flex-col justify-end items-end">
      <Square className="w-[10px] h-[10px] bg-valorant" />
      <Title />
      <Body />
    </div>
  );
};
export default ProjectContent;

const Title = () => (
  <h1 className="z-10 text-7xl text-valorant sm:-mb-0 md:-mb-9 md:text-8xl lg:text-9xl">
    PROJECTS
  </h1>
);

const Body = () => (
  <div className="w-[90%] md:w-[80%] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 border-l border-valorantBlack/50 gap-3">
    {thumbnail_projects.map((item, index) => {
      return (
        <div
          key={index}
          className={clsx(
            // index == 0
            //   ? "border-r border-b"
            //   : index == 1
            //   ? "border-l border-b"
            //   :
            index % 2 == 1
              ? "lg:border-l border-t border-b"
              : index % 2 == 0
              ? "lg:border-r border-t border-b"
              : "",
            "p-5 border-valorantBlack/50"
          )}
        >
          {item}
        </div>
      );
    })}
  </div>
);
