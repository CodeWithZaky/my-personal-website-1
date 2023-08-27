import { DINNextW1G } from "@/src/assets/fonts/font";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import React from "react";

const CardProject = ({
  srcTumb,
  title,
  stackTumb,
  textTumb,
  linkHref,
}: {
  srcTumb: StaticImageData;
  title: string;
  stackTumb: string[];
  textTumb: string;
  linkHref: string;
}) => {
  return (
    <a
      href={`${linkHref}`}
      target="_blank"
      className={clsx(
        DINNextW1G.className,
        "flex flex-col items-start justify-start w-full gap-2 cursor-pointer"
      )}
    >
      <Image
        alt="matrix calculations"
        src={srcTumb}
        className="w-full h-full mb-2 border border-valorantBlack/10"
      />
      <h1 className="text-xl font-bold text-valorantBlack hover:underline">
        {title}
      </h1>
      <div className="flex flex-wrap items-start justify-start gap-1 text-xs text-valorantWhite">
        {stackTumb.map((item, index) => (
          <p key={index} className="px-2 bg-valorantBlack">
            {item}
          </p>
        ))}
      </div>
      <p className="font-bold leading-none text-md md:text-md text-valorantBlack/80 hover:text-valorantBlack">
        {textTumb}
      </p>
    </a>
  );
};

export default CardProject;
