"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavSkill = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row gap-5 font-mono">
      <Link
        href={"/skill/all"}
        className={`px-3 py-1 bg-black/70 text-white text-xl rounded-sm ${
          pathname == "/skill/all" && "bg-red-500"
        }`}
      >
        All
      </Link>
      <Link
        href={"/skill/language"}
        className={`px-3 py-1 bg-black/70 text-white text-xl rounded-sm ${
          pathname == "/skill/language" && "bg-red-500"
        }`}
      >
        Language
      </Link>
      <Link
        href={"/skill/library"}
        className={`px-3 py-1 bg-black/70 text-white text-xl rounded-sm ${
          pathname == "/skill/library" && "bg-red-500"
        }`}
      >
        Library
      </Link>
      <Link
        href={"/skill/framework"}
        className={`px-3 py-1 bg-black/70 text-white text-xl rounded-sm ${
          pathname == "/skill/framework" && "bg-red-500"
        }`}
      >
        Framework
      </Link>
    </div>
  );
};

export default NavSkill;
