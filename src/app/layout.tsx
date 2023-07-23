import "../../node_modules/tailwindcss/tailwind.css";
import Navbar from "../components/navbar";
import TriangleHome from "../components/triangle-home";

interface Props {
  children: React.ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <main className="container-none w-full min-h-screen bg-slate-100">
          <Navbar />
          <div className="bg-red-400 w-full relative">
            <TriangleHome />
            <div className="mx-auto w-[70%] flex flex-col border-x border-black">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
