import "../../node_modules/tailwindcss/tailwind.css";
import MainNavbar from "../components/MainNavbar";

interface Props {
  children: React.ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="bg-valorantWhite">
        <main className="container-none w-full min-h-screen">
          <MainNavbar />
          {children}
        </main>
      </body>
    </html>
  );
}
