import Image from "next/image";
import Link from "next/link";
import NavLink from "./component/NavLink";
import newLogoZ from "@/assets/images/newLogoZ.svg";
import { Sidebar } from "./component/sidebar";
// import { ToggleTheme } from "../toggle-theme";

const Navbar = () => {
    return (
        <nav className="flex items-end justify-center">
            <div className="z-20 flex items-center justify-between w-screen gap-10 border-b bg-valorantBlack py-7 border-valorantWhite/10 md:justify-center">
                <Link href={"/"}>
                    <Image
                        alt="image"
                        src={newLogoZ}
                        className="w-auto h-6 ml-10 md:ml-0"
                    />
                </Link>
                <div className="items-center justify-center hidden gap-10 font-mono text-xl font-bold md:flex text-valorantWhite">
                    <NavLink />
                </div>
                {/* <ToggleTheme /> */}
                <div className="block md:hidden">
                    <Sidebar />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
