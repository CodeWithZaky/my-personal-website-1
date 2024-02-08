import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import newLogoZ from "@/assets/images/newLogoZ.svg";
import { GiHamburgerMenu } from "react-icons/gi";

export function Sidebar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <GiHamburgerMenu className="text-3xl cursor-pointer mr-10" />
            </SheetTrigger>
            <SheetContent className="bg-valorantBlack">
                <SheetHeader>
                    <Link href={"/"}>
                        <Image
                            alt="image"
                            src={newLogoZ}
                            className="w-auto h-6 ml-10"
                        />
                    </Link>
                </SheetHeader>
                <SheetFooter>
                    <div className="flex flex-col items-end justify-center gap-10 pt-10 pr-10 font-mono text-xl font-bold ">
                        <NavLink />
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
