import Link from "next/link";
export interface NavLink {
  path: string;
  title: string;
}

const nav_links: NavLink[] = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/project", title: "Project" },
];

const NavLink = () => {
  return (
    <>
      {nav_links.map((item, index) => (
        <Link key={index} href={item.path} className="uppercase">
          {item.title}
        </Link>
      ))}
    </>
  );
};

export default NavLink;
