export interface NavLink {
  path: string;
  title: string;
}

export const nav_links: NavLink[] = [
  { path: "/", title: "home" },
  { path: "/about", title: "about" },
  { path: "/projects", title: "projects" },
];
