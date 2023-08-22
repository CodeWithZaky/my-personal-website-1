import { DINNextW1G } from "@/assets/fonts/font";
import clsx from "clsx";
import React from "react";

const Copyright = () => {
  return (
    <p
      className={clsx(
        DINNextW1G.className,
        "text-center text-sm sm:text-md md:text-lg text-valorantBlack"
      )}
    >
      @2023 Ahmad Zaky Ubaidillah
    </p>
  );
};

export default Copyright;
