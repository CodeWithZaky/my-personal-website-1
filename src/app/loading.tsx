"use client";
const SkeletonHome = () => {
  const skeletonThumbnails = new Array(6).fill(null);

  return (
    <section>
      <div className="relative w-full overflow-hidden bg-black">
        <div className="relative mx-auto w-[70%] flex flex-col border-x border-valorantWhite">
          <div className="flex flex-col items-center justify-center w-full gap-4 py-16 m-auto tracking-widest">
            <div className="w-[15px] h-[15px] bg-valorant self-start animate-pulse" />
            <h3 className="text-xl font-bold tracking-widest text-center md:text-2xl text-valorantWhite animate-pulse">
              Welcome to my personal website
            </h3>
            <h1 className="font-bold text-center text-7xl md:text-8xl text-valorantWhite tracking-[.4rem] animate-pulse">
              {"I'M ZAKY"}
            </h1>
            <h1 className="text-4xl font-bold text-center md:text-5xl text-valorantWhite tracking-[.4rem] animate-pulse">
              FRONTEND WEB DEVELOPER
            </h1>
            <div className="w-40 h-12 bg-gray-500 animate-pulse"></div>
          </div>
          <div className="w-[1px] h-[100%] bg-valorantWhite absolute left-[300px] top-0 animate-pulse" />
        </div>
      </div>
      <div className="w-full bg-valorantWhite">
        <div className="mx-auto w-[70%] flex flex-col border-l border-black py-10 gap-3">
          <div className="z-10 -mb-12 -ml-1 text-5xl font-bold md:text-9xl text-valorant animate-pulse">
            LATEST PROJECT
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-3">
            {skeletonThumbnails.map((_, index) => (
              <div
                key={index}
                className="w-full h-[200px] bg-gray-300 animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkeletonHome;
