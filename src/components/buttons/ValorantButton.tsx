const ValorantButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative z-1 flex flex-col justify-center items-center m-4 p-2">
      <div className="top-0 absolute border-valorantWhite border-t border-r border-l w-full h-[40%]"></div>
      <div className="z-10 bg-valorant hover:bg-valorantBlue px-5 md:px-10 py-1 md:py-2 text-center text-valorantWhite text-xl md:text-2xl transition-all">
        {children}
      </div>
      <div className="bottom-0 absolute border-valorantWhite border-r border-b border-l w-full h-[40%]"></div>
    </div>
  );
};

export default ValorantButton;
