import newLogoZ from "@/assets/images/newLogoZ.svg";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./nav-link";
import { Sidebar } from "./sidebar";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center">
      <div className="z-20 flex justify-between md:justify-center items-center gap-10 border-valorantWhite/10 bg-valorantBlack py-7 border-b w-screen">
        <Link href={"/"}>
          <Image
            alt="image"
            src={newLogoZ}
            className="ml-10 md:ml-0 w-auto h-6"
          />
        </Link>
        <div className="md:flex justify-center items-center gap-10 hidden font-bold font-mono text-valorantWhite text-xl">
          <NavLink />
        </div>
        <div className="block md:hidden">
          <Sidebar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
