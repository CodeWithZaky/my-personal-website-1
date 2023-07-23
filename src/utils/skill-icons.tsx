import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

const html = (
  <SiHtml5
    key={"html"}
    className="text-red-800 bg-slate-100 p-3 rounded-sm shadow-lg"
  />
);
const css = (
  <SiCss3
    key={"css"}
    className="text-blue-800 bg-slate-100 p-3 rounded-sm shadow-lg"
  />
);
const js = (
  <SiJavascript
    key={"js"}
    className="text-yellow-500 bg-slate-100 p-3 rounded-sm shadow-lg"
  />
);
const ts = (
  <SiTypescript
    key={"ts"}
    className="text-blue-600 bg-slate-100 p-3 rounded-sm shadow-lg"
  />
);
const tailwind = (
  <SiTailwindcss
    key={"tailwind"}
    className="text-sky-500 bg-slate-100 p-3 rounded-sm shadow-lg"
  />
);
const reactjs = (
  <SiReact
    key={"react js"}
    className="text-sky-700 bg-slate-100 p-3 rounded-sm shadow-lg"
  />
);
const nextjs = (
  <SiNextdotjs
    key={"next js"}
    className="text-black bg-slate-100 p-3 rounded-sm shadow-lg"
  />
);

const icons_all = [html, css, js, ts, tailwind, reactjs, nextjs];
const icons_language = [html, css, js, ts];
const icons_library = [tailwind, reactjs];
const icons_framework = [nextjs, tailwind];
export { icons_all, icons_language, icons_library, icons_framework };
