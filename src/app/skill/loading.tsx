"use client";
const SkeletonSkill = () => {
  const skeletonSkills = new Array(4).fill(null); // Adjust the number of skeleton skills

  return (
    <div className="w-[70%] min-h-screen border-l border-gray-500 flex flex-col justify-center items-start m-auto">
      <div className="animate-pulse bg-gray-300 h-8 w-3/4 md:w-[80%] mb-4"></div>
      <div className="inline-flex flex-wrap gap-1 font-semibold text-md md:text-xl">
        {skeletonSkills.map((_, index) => (
          <div
            key={index}
            className="w-20 h-6 mb-2 bg-gray-300 rounded-md animate-pulse md:w-24"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonSkill;
