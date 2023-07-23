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
          {children}
        </main>
      </body>
    </html>
  );
}
