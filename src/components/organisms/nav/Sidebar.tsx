import newLogoZ from "@/assets/images/newLogoZ.svg";
import Image from "next/image";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import NavLink from "../../molecules/NavLink";

interface Props {
  toggleButton: () => void;
  toggle: boolean;
}

const Sidebar = ({ toggleButton, toggle }: Props) => {
  return (
    <section
      className={
        toggle
          ? "flex w-full h-full absolute top-0 right-0 z-20 md:hidden"
          : "hidden"
      }
    >
      <div
        onClick={toggleButton}
        className="w-[40%] backdrop-blur-sm bg-black/30"
      />
      <div
        className={
          "w-[60%] h-full flex-col justify-start items-center bg-black gap-10 border-l-2  border-l-white/5"
        }
      >
        <div className="w-full h-[90px] border-b border-b-white/5 flex justify-between items-center ">
          <Link href={"/"}>
            <Image alt="image" src={newLogoZ} className="w-auto h-6 ml-10" />
          </Link>
          <IoCloseSharp
            onClick={toggleButton}
            className="mr-10 text-4xl text-valorantWhite"
          />
        </div>
        <div className="flex flex-col items-end justify-center gap-10 pt-10 pr-10 font-mono text-xl font-bold text-valorantWhite">
          <NavLink />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
