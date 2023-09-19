const SkeletonHome = () => {
  return (
    <section>
      <div className="relative w-full overflow-hidden bg-valorantBlue">
        <div className="relative mx-auto w-[70%] flex flex-col border-x border-valorantWhite animate-pulse">
          <div className="flex flex-col items-center justify-center w-full gap-5 py-16 m-auto tracking-widest">
            <div className="w-[15px] h-[15px] bg-gray-500 self-start animate-pulse" />
            <h3 className="h-5 text-xl font-bold tracking-widest text-center bg-gray-500 rounded-sm w-80 md:text-2xl animate-pulse" />
            <h3 className="h-20 text-xl font-bold tracking-widest text-center bg-gray-500 rounded-sm w-60 md:text-2xl animate-pulse" />
            <h3 className="h-10 text-xl font-bold tracking-widest text-center bg-gray-500 rounded-sm w-96 md:text-2xl animate-pulse" />
            <div className="relative flex flex-col items-center justify-center p-2 m-4 z-1">
              <div className="absolute top-0 w-full border-t border-l border-r h-[40%] border-valorantWhite animate-pulse"></div>
              <div className="z-10 w-48 h-12 px-2 text-2xl text-center transition-all bg-gray-500 text-valorantWhite hover:bg-valorantBlue md:px-10 md:py-2 animate-pulse"></div>
              <div className="absolute bottom-0 w-full border-b border-l border-r h-[40%] border-valorantWhite animate-pulse"></div>
            </div>
            <div className="w-[15px] h-[15px] bg-gray-500 animate-pulse self-end mr-3"></div>
          </div>
          <div className="w-[1px] h-[100%] bg-valorantWhite absolute left-[300px] top-0 animate-pulse" />
        </div>
      </div>
      <div className="w-full bg-valorantWhite">
        <div className="mx-auto w-[70%] flex flex-col border-l border-black py-10 gap-3">
          <div className="z-10 h-20 -mb-12 text-5xl font-bold bg-gray-500 w-96 md:text-9xl animate-pulse"></div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-3">
            {[1, 2, 3].map((_, index) => (
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
