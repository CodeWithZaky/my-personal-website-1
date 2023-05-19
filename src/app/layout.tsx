import "@/src/app/globals.css";
import Navbar from "../components/Navbar";

interface Props {
  children: React.ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <main className="container-none w-full border h-screen">
          <div className="container mx-auto h-full flex flex-col border">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
