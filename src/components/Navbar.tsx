import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center gap-7 text-xl font-bold font-mono py-7">
      <Link href={"/"}>Home</Link>
      <Link href={"/About"}>About</Link>
      <Link href={"/skill/all"}>Skill</Link>
      <Link href={"/project"}>Project</Link>
      <Link href={"/contact"}>Contact</Link>
    </div>
  );
};

export default Navbar;
