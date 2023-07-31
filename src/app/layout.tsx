"use client";
import { useState } from "react";
import "../../node_modules/tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const [toggle, setToggle] = useState(false);
  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <html lang="en">
      <body
        className={clsx(
          "__MANTAB__BRO__",
          "bg-valorantWhite",
          toggle ? "overflow-hidden" : "evervlow-auto"
        )}
      >
        <main className="container-none w-full min-h-screen">
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
