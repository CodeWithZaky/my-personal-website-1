import matrixcalc from "@/assets/tumbnail-project/matrix-calculations.png";
import numbconv from "@/assets/tumbnail-project/number-convertion.png";
import myportfolio from "@/assets/tumbnail-project/my-portfolio.png";
import Image, { StaticImageData } from "next/image";
import { DINNextW1G } from "@/src/font/font";
import clsx from "clsx";

const TubmnailComp = ({
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

const matrixCalc = (
  <TubmnailComp
    linkHref="https://matrix-calc.vercel.app"
    srcTumb={matrixcalc}
    title="MATRIX CALCULATOR"
    stackTumb={["REACT JS", "NEXT JS", "TAILWIND CSS"]}
    textTumb="MATRIX CALCULATOR WEB APPLICATION DEVELOPED TO FULFILL UNIVERSITY ASSIGNMENTS"
  />
);
const numbConv = (
  <TubmnailComp
    linkHref="https://numconv.vercel.app"
    srcTumb={numbconv}
    title="NUMBER CONVERTION"
    stackTumb={["REACT JS", "NEXT JS", "TAILWIND CSS"]}
    textTumb="NUMBER CONVERTION WEB APPLICATION DEVELOPED TO FULFILL A UNIVERSITY ASSIGNMENT"
  />
);
const myPortfolio = (
  <TubmnailComp
    linkHref="https://azaku.vercel.app"
    srcTumb={myportfolio}
    title="MY PORTFOLIO"
    stackTumb={["NEXT JS", "TAILWIND CSS", "TYPESCRIPT"]}
    textTumb="PERSONAL WEBSITE FOR INFORMATION ABOUT ME, ESPECIALLY IN THE FIELD OF TECHNOLOGY"
  />
);

export const TubmnailArray = [matrixCalc, numbConv, myPortfolio];
