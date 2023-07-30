import Link from "next/link";

const LearnMoreButton = () => {
  return (
    <div className="relative border border-slate-200 p-2 flex justify-center items-center z-1 m-4">
      <Link
        href={"/about"}
        className="bg-valorant text-2xl text-center font-semibold text-white px-2 md:px-10 md:py-2 z-10"
      >
        Learn more
      </Link>
      <div className="absolute w-[110%] h-3 bg-black z-2" />
    </div>
  );
};
export default LearnMoreButton;
