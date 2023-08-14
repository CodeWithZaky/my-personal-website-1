"use client";
import { useState } from "react";
import "../../node_modules/tailwindcss/tailwind.css";
import Navbar from "../components/nav/Navbar";
import Sidebar from "../components/nav/Sidebar";
import clsx from "clsx";
import { Heebo } from "next/font/google";

const font = Heebo({
  weight: "variable",
  subsets: ["latin"],
});

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const [toggle, setToggle] = useState(false);
  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <html lang="en" className={clsx(font.className)}>
      <body
        className={clsx(
          "__MANTAB__BRO__",
          "bg-valorantWhite",
          toggle ? "overflow-hidden" : "evervlow-auto"
        )}
      >
        <main className="w-full min-h-screen container-none">
          <>
            <Navbar toggleButton={toggleButton} />
            <Sidebar toggleButton={toggleButton} toggle={toggle} />
          </>
          {children}
        </main>
      </body>
    </html>
  );
}
