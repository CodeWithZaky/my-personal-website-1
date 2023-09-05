"use client";
import "/node_modules/tailwindcss/tailwind.css";
import Navbar from "@/components/organisms/nav/Navbar";
import { useContext } from "react";
import ToggleButtonProvider, { ToggleContext } from "../context/ToggleButton";
import { TungstenBold } from "@/assets/fonts/font";
import clsx from "clsx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToggleButtonProvider>
      <html lang="en" className={clsx(TungstenBold.className, "scroll-smooth")}>
        <Head />
        <Body>
          <>
            <Navbar />
          </>
          {children}
        </Body>
      </html>
    </ToggleButtonProvider>
  );
}

const Head = () => {
  return (
    <head>
      <meta
        name="description"
        content="Hi, I'm a frontend web developer based in Indonesia."
      />
      <meta name="description" content="the best website in the world" />
    </head>
  );
};

const Body = ({ children }: { children: React.ReactNode }) => {
  const { isToggled } = useContext(ToggleContext);

  return (
    <body
      className={clsx(
        isToggled ? "overflow-hidden" : "evervlow-auto",
        "bg-valorantWhite w-full min-h-screen container-none"
      )}
    >
      {children}
    </body>
  );
};
