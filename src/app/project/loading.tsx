import clsx from "clsx";

const SkeletonThumbnail = () => {
  const skeletonThumbnails = new Array(6).fill(null);

  return (
    <div className="w-full min-h-screen">
      <div className="flex w-full h-[4rem]">
        <div className="border-r border-black/50 w-full md:w-[80%] animate-pulse" />
        <div className="w-0 md:w-[20%]" />
      </div>
      <div className="flex w-full">
        <div className="flex flex-col justify-end items-end border-t border-t-black/50 border-r border-r-black/50 w-full md:w-[80%]">
          <div className="bg-valorant w-[10px] h-[10px] animate-pulse" />
          <h1 className="z-10 md:-mb-0 lg:-mb-9 font-bold text-5xl text-valorant md:text-7xl lg:text-9xl animate-pulse">
            PROJECTS
          </h1>
          <div className="gap-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 border-black/50 border-l w-[90%] md:w-[80%]">
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
        <div className="border-t border-t-black/50 w-0 md:w-[20%]" />
      </div>
    </div>
  );
};

export default SkeletonThumbnail;
