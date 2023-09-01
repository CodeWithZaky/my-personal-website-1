"use client";
import { useContext, useState } from "react";
import "/node_modules/tailwindcss/tailwind.css";
import Navbar from "@/src/components/organisms/nav/Navbar";
import Sidebar from "@/src/components/organisms/nav/Sidebar";
import clsx from "clsx";
import { TungstenBold } from "@/assets/fonts/font";
import React from "react";
import ToggleButtonProvider, { ToggleContext } from "../context/ToggleButton";

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
          <nav>
            <Navbar />
            <Sidebar />
          </nav>
          {children}
        </Body>
      </html>
    </ToggleButtonProvider>
  );
}

const Head = () => (
  <head>
    <meta
      name="description"
      content="Hi, I'm a frontend web developer based in Indonesia."
    />
  </head>
);
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
