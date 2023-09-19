import clsx from "clsx";

const SkeletonAboutMe = () => {
  const skeletonItems = new Array(3).fill(null);

  return (
    <div
      className={clsx(
        "flex flex-col items-start justify-center w-[90%] md:w-[70%] m-auto h-full border-l border-l-gray-400 gap-7 py-10"
      )}
    >
      <div className="w-1/4 h-8 bg-gray-400 animate-pulse md:w-1/2"></div>
      <div className="animate-pulse bg-gray-400 h-8 w-3/4 md:w-[80%]"></div>
      <div className="w-1/2 h-8 bg-gray-400 animate-pulse"></div>
      <div className="w-1/4 h-8 bg-gray-400 animate-pulse md:w-1/2"></div>
      <div className="animate-pulse bg-gray-400 h-8 w-3/4 md:w-[80%]"></div>
      <div className="w-1/2 h-8 bg-gray-400 animate-pulse"></div>
      <div className="inline-flex flex-wrap gap-1 font-semibold text-md md:text-xl">
        {skeletonItems.map((_, index) => (
          <div
            key={index}
            className="w-20 h-6 bg-gray-400 rounded-sm animate-pulse md:w-24"
          ></div>
        ))}
      </div>
      <div className="flex flex-wrap gap-5">
        {skeletonItems.map((_, index) => (
          <div
            key={index}
            className="w-12 h-12 bg-gray-400 rounded-xl animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonAboutMe;
