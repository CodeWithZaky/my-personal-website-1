import "../../node_modules/tailwindcss/tailwind.css";
import MainNavbar from "../components/MainNavbar";
import LatestProject from "../components/latest-project";
import TriangleHome from "../components/triangle-home";

interface Props {
  children: React.ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <main className="container-none w-full min-h-screen bg-slate-100">
          <MainNavbar />
          <section className="bg-black w-full relative">
            <TriangleHome />
            <div className="relative mx-auto w-[70%] flex flex-col border-x border-slate-300">
              {children}
              <div className="w-[15px] h-[15px] bg-red-400 absolute left-0 top-20" />
              <div className="w-[1px] h-[100%] bg-slate-300 absolute left-[300px] top-0" />
            </div>
          </section>
          <section className="LATEST-PROJECT w-full">
            <div className="mx-auto w-[70%] flex flex-col border-l border-black py-10 gap-3">
              <div className="text-7xl text-red-500 font-extrabold">
                LATEST PROJECT
              </div>
              <div className="grid grid-cols-3 gap-4">
                <LatestProject />
                <LatestProject />
                <LatestProject />
              </div>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
