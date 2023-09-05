import { DINNextW1G } from "@/src/assets/fonts/font";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

interface CardProjectType {
  srcTumb: StaticImageData;
  title: string;
  stack: string[];
  description: string;
  linkHref: string;
}

const CardProject = (props: CardProjectType) => {
  const { linkHref, title, srcTumb, stack, description } = props;
  return (
    <a
      href={`${linkHref}`}
      target="_blank"
      className={clsx(
        DINNextW1G.className,
        "flex flex-col items-start justify-between w-full gap-2 cursor-pointer"
      )}
    >
      <Image
        alt={title}
        src={srcTumb}
        className="w-full h-full mb-2 border border-valorantBlack/10"
      />
      <h1 className="text-xl font-bold uppercase text-valorantBlack hover:underline">
        {title}
      </h1>
      <div className="flex flex-wrap items-start justify-start gap-1 text-xs text-valorantWhite">
        {stack.map((item, index) => (
          <p key={index} className="px-2 uppercase bg-valorantBlack">
            {item}
          </p>
        ))}
      </div>
      <p className="font-bold leading-none uppercase text-md md:text-md text-valorantBlack/80 hover:text-valorantBlack">
        {description}
      </p>
    </a>
  );
};

export default CardProject;
