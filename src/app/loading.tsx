const SkeletonHome = () => {
  return (
    <section>
      <div className="relative bg-valorantBlue w-full overflow-hidden">
        <div className="relative flex flex-col border-valorantWhite border-x mx-auto w-[70%] animate-pulse">
          <div className="flex flex-col justify-center items-center gap-5 m-auto py-16 w-full tracking-widest">
            <div className="bg-gray-500 w-[15px] h-[15px] animate-pulse self-start" />
            <h3 className="bg-gray-500 rounded-sm w-80 h-5 font-bold text-center text-xl md:text-2xl tracking-widest animate-pulse" />
            <h3 className="bg-gray-500 rounded-sm w-60 h-20 font-bold text-center text-xl md:text-2xl tracking-widest animate-pulse" />
            <h3 className="bg-gray-500 rounded-sm w-96 h-10 font-bold text-center text-xl md:text-2xl tracking-widest animate-pulse" />
            <div className="relative z-1 flex flex-col justify-center items-center m-4 p-2">
              <div className="top-0 absolute border-valorantWhite border-t border-r border-l w-full h-[40%] animate-pulse"></div>
              <div className="z-10 bg-gray-500 hover:bg-valorantBlue px-2 md:px-10 md:py-2 w-48 h-12 text-2xl text-center text-valorantWhite transition-all animate-pulse"></div>
              <div className="bottom-0 absolute border-valorantWhite border-r border-b border-l w-full h-[40%] animate-pulse"></div>
            </div>
            <div className="bg-gray-500 mr-3 w-[15px] h-[15px] animate-pulse self-end"></div>
          </div>
          <div className="top-0 left-[300px] absolute bg-valorantWhite w-[1px] h-[100%] animate-pulse" />
        </div>
      </div>
      <div className="bg-valorantWhite w-full">
        <div className="flex flex-col gap-3 mx-auto py-10 border-black border-l w-[70%]">
          <div className="z-10 bg-gray-500 -mb-12 w-96 h-20 font-bold text-5xl md:text-9xl animate-pulse"></div>
          <div className="gap-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="bg-gray-300 w-full h-[200px] animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkeletonHome;
