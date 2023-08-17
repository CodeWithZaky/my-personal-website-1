"use client";
import { useState } from "react";
import "../../node_modules/tailwindcss/tailwind.css";
import Navbar from "../components/nav/Navbar";
import Sidebar from "../components/nav/Sidebar";
import clsx from "clsx";
import { TungsenBold } from "@/src/font/font";

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
    <html lang="en" className={clsx(TungsenBold.className, "scroll-smooth")}>
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
