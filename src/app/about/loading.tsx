import clsx from "clsx";

const SkeletonAboutMe = () => {
  const skeletonItems = new Array(3).fill(null);

  return (
    <div
      className={clsx(
        "flex flex-col items-start justify-center w-[90%] md:w-[70%] m-auto h-full border-l border-l-gray-400 gap-7 py-10"
      )}
    >
      <div className="bg-gray-400 w-1/4 md:w-1/2 h-8 animate-pulse"></div>
      <div className="bg-gray-400 w-3/4 md:w-[80%] h-8 animate-pulse"></div>
      <div className="bg-gray-400 w-1/2 h-8 animate-pulse"></div>
      <div className="bg-gray-400 w-1/4 md:w-1/2 h-8 animate-pulse"></div>
      <div className="bg-gray-400 w-3/4 md:w-[80%] h-8 animate-pulse"></div>
      <div className="bg-gray-400 w-1/2 h-8 animate-pulse"></div>
      <div className="inline-flex flex-wrap gap-1 font-semibold text-md md:text-xl">
        {skeletonItems.map((_, index) => (
          <div
            key={index}
            className="bg-gray-400 rounded-sm w-20 md:w-24 h-6 animate-pulse"
          ></div>
        ))}
      </div>
      <div className="flex flex-wrap gap-5">
        {skeletonItems.map((_, index) => (
          <div
            key={index}
            className="bg-gray-400 rounded-xl w-12 h-12 animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonAboutMe;
