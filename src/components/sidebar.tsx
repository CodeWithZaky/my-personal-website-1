import newLogoZ from "@/assets/images/newLogoZ.svg";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DATA } from "@/src/data/resume";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <GiHamburgerMenu className="mr-10 text-3xl cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="bg-valorantBlack">
        <SheetHeader>
          <Link href={"/"}>
            <Image alt="image" src={newLogoZ} className="ml-10 w-auto h-6" />
          </Link>
        </SheetHeader>
        <SheetFooter>
          <div className="flex flex-col justify-center items-end gap-10 pt-10 pr-10 font-bold font-mono text-xl">
            {DATA.navbar.map((item, index) => (
              <Link key={index} href={item.path} className="uppercase">
                {item.title}
              </Link>
            ))}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
