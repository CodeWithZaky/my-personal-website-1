import Link from "next/link";

const LearnMoreButton = () => {
  return (
    <div className="relative flex flex-col items-center justify-center p-2 m-4 z-1">
      <div className="absolute top-0 w-full border-t border-l border-r h-[40%] border-valorantWhite"></div>
      <Link
        href={"/about"}
        className="z-10 px-2 text-2xl font-semibold text-center text-valorantWhite bg-valorant md:px-10 md:py-2"
      >
        MORE ABOUT ME
      </Link>
      <div className="absolute bottom-0 w-full border-b border-l border-r h-[40%] border-valorantWhite"></div>
    </div>
  );
};
export default LearnMoreButton;
