"use client";
import clsx from "clsx";

const SkeletonThumbnail = () => {
  const skeletonThumbnails = new Array(6).fill(null); // Adjust the number of skeleton thumbnails

  return (
    <div className="w-full min-h-screen">
      <div className="h-[4rem] w-full flex">
        <div className="w-full md:w-[80%] border-r border-black/50 animate-pulse" />
        <div className="w-0 md:w-[20%]" />
      </div>
      <div className="flex w-full">
        <div className="w-full md:w-[80%] border-r border-t border-r-black/50 border-t-black/50 flex flex-col justify-end items-end">
          <div className="w-[10px] h-[10px] bg-valorant animate-pulse" />
          <h1 className="z-10 text-5xl font-bold text-valorant md:-mb-0 lg:-mb-9 md:text-7xl lg:text-9xl animate-pulse">
            PROJECTS
          </h1>
          <div className="w-[90%] md:w-[80%] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 border-l border-black/50 gap-3">
            {skeletonThumbnails.map((_, index) => (
              <div
                key={index}
                className={clsx(
                  index % 2 === 1
                    ? "lg:border-l border-t border-b"
                    : index % 2 === 0
                    ? "lg:border-r border-t border-b"
                    : "",
                  "p-5 border-gray-500 bg-gray-300 animate-pulse aspect-video"
                )}
              ></div>
            ))}
          </div>
        </div>
        <div className="w-0 md:w-[20%] border-t border-t-black/50" />
      </div>
    </div>
  );
};

export default SkeletonThumbnail;
