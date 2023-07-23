const buttonLearnMore = () => {
  return (
    <div className="relative border border-slate-200 p-2 flex justify-center items-center z-1 mt-4">
      <div className="absolute w-[110%] h-3 bg-red-400 z-2" />
      <button className="bg-black text-xl text-white px-8 py-2 z-10">
        Learn more
      </button>
    </div>
  );
};
export default buttonLearnMore;
