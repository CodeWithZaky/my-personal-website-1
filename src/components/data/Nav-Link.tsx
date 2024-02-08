export interface NavLink {
    path: string;
    title: string;
}

export const nav_links: NavLink[] = [
    { path: "/", title: "home" },
    { path: "/projects", title: "projects" },
    { path: "/about", title: "about" },
];
