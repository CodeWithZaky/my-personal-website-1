import "/node_modules/tailwindcss/tailwind.css";
import Navbar from "@/components/organisms/nav/Navbar";
import ToggleButtonProvider from "../context/ToggleButton";
import { TungstenBold } from "@/assets/fonts/font";
import clsx from "clsx";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToggleButtonProvider>
      <html lang="en" className={clsx(TungstenBold.className, "scroll-smooth")}>
        <head>
          <meta
            name="description"
            content="Hi, I'm a frontend web developer based in Indonesia."
          />
          <meta name="description" content="the best website in the world" />
        </head>
        <body className="w-full min-h-screen bg-valorantWhite container-none">
          <Navbar />
          {children}
        </body>
      </html>
    </ToggleButtonProvider>
  );
};

export default RootLayout;
