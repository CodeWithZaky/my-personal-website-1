import matrixcalc from "@/assets/matrix-calculations.png";
import numbconv from "@/assets/number-convertion.png";
import myportfolio from "@/assets/my-portfolio.png";
import Image, { StaticImageData } from "next/image";
import { DINNextW1G } from "@/src/font/font";
import clsx from "clsx";

const TubmnailComp = ({
  srcTumb,
  dateTumb,
  stackTumb,
  textTumb,
}: {
  srcTumb: StaticImageData;
  dateTumb: string;
  stackTumb: string;
  textTumb: string;
}) => {
  return (
    <div
      className={clsx(
        DINNextW1G.className,
        "flex flex-col items-start justify-start w-full gap-2"
      )}
    >
      <Image
        alt="matrix calculations"
        src={srcTumb}
        className="w-full h-full border border-slate-300/50"
      />
      <h3 className="text-sm font-semibold">
        {`${dateTumb} . `}
        <span className="text-valorant">{`${stackTumb}`}</span>
      </h3>
      <p className="font-semibold text-md md:text-xl">{textTumb}</p>
    </div>
  );
};

const matrixCalc = (
  <TubmnailComp
    srcTumb={matrixcalc}
    dateTumb="12/12/12"
    stackTumb="next js, tailwind, typescript"
    textTumb="Lorem ipsum dolor sit amet consectetur adipisicing elit Quam laborum"
  />
);
const numbConv = (
  <TubmnailComp
    srcTumb={numbconv}
    dateTumb="12/12/12"
    stackTumb="next js, tailwind, typescript"
    textTumb="Lorem ipsum dolor sit amet consectetur adipisicing elit Quam laborum"
  />
);
const myPortfolio = (
  <TubmnailComp
    srcTumb={myportfolio}
    dateTumb="12/12/12"
    stackTumb="next js, tailwind, typescript"
    textTumb="Lorem ipsum dolor sit amet consectetur adipisicing elit Quam laborum"
  />
);

const TubmnailArray = [matrixCalc, numbConv, myPortfolio];
export { TubmnailArray };
