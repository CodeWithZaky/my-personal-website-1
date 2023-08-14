import Link from "next/link";

const LearnMoreButton = () => {
  return (
    <div className="relative flex items-center justify-center p-2 m-4 border border-slate-200 z-1">
      <Link
        href={"/about"}
        className="z-10 px-2 text-2xl font-semibold text-center text-white bg-valorant md:px-10 md:py-2"
      >
        Learn more
      </Link>
      <div className="absolute w-[110%] h-3 bg-black z-2" />
    </div>
  );
};
export default LearnMoreButton;
