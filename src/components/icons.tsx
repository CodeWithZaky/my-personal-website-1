import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

const icons_all = [
  <SiHtml5
    key={"html"}
    className="text-red-800 bg-slate-100 p-3 rounded-sm shadow-lg"
  />,
  <SiCss3
    key={"css"}
    className="text-blue-800 bg-slate-100 p-3 rounded-sm shadow-lg"
  />,
  <SiJavascript
    key={"js"}
    className="text-yellow-500 bg-slate-100 p-3 rounded-sm shadow-lg"
  />,
  <SiTypescript
    key={"ts"}
    className="text-blue-600 bg-slate-100 p-3 rounded-sm shadow-lg"
  />,
  <SiTailwindcss
    key={"tailwind"}
    className="text-sky-500 bg-slate-100 p-3 rounded-sm shadow-lg"
  />,
  <SiReact
    key={"react js"}
    className="text-sky-700 bg-slate-100 p-3 rounded-sm shadow-lg"
  />,
  <SiNextdotjs
    key={"next js"}
    className="text-black bg-slate-100 p-3 rounded-sm shadow-lg"
  />,
];
const icons_language = [
  <SiHtml5
    key={"html"}
    className="text-red-800 bg-slate-100 p-3 rounded-sm shadow-lg"
  />,
  <SiCss3
    key={"css"}
    className="text-blue-800 bg-slate-100 p-3 rounded-sm shadow-lg"
  />,
  <SiJavascript
    key={"js"}
    className="text-yellow-500 bg-slate-100 p-3 rounded-sm shadow-lg"
  />,
  <SiTypescript
    key={"ts"}
    className="text-blue-600 bg-slate-100 p-3 rounded-sm shadow-lg"
  />,
];
const icons_library = [
  <SiTailwindcss
    key={"tailwind"}
    className="text-sky-500 bg-slate-100 p-3 rounded-sm shadow-lg"
  />,
  <SiReact
    key={"react js"}
    className="text-sky-700 bg-slate-100 p-3 rounded-sm shadow-lg"
  />,
];
const icons_framework = [
  <SiTailwindcss
    key={"tailwind"}
    className="text-sky-500 bg-slate-100 p-3 rounded-sm shadow-lg"
  />,
  <SiNextdotjs
    key={"next js"}
    className="text-black bg-slate-100 p-3 rounded-sm shadow-lg"
  />,
];
export { icons_all, icons_language, icons_library, icons_framework };
