"use client";
import { useState } from "react";
import "/node_modules/tailwindcss/tailwind.css";
import Navbar from "@/src/components/organisms/nav/Navbar";
import Sidebar from "@/src/components/organisms/nav/Sidebar";
import clsx from "clsx";
import { TungstenBold } from "@/assets/fonts/font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toggle, setToggle] = useState(false);
  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <html lang="en" className={clsx(TungstenBold.className, "scroll-smooth")}>
      <head>
        <meta
          name="description"
          content="Hi, I'm a frontend web developer based in Indonesia."
        />
      </head>
      <body
        className={clsx(
          "__MANTAB__BRO__",
          toggle ? "overflow-hidden" : "evervlow-auto",
          "bg-valorantWhite w-full min-h-screen container-none"
        )}
      >
        <>
          <Navbar toggleButton={toggleButton} />
          <Sidebar toggleButton={toggleButton} toggle={toggle} />
        </>
        {children}
      </body>
    </html>
  );
}
