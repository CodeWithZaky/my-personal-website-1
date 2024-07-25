import gedongarumImg from "@/assets/images/tumbnail-project/gedongarum.png";
import matrixCalculatorImg from "@/assets/images/tumbnail-project/matrix-calculator-2.png";
import myPortfolioImg from "@/assets/images/tumbnail-project/my-portfolio-2.png";
import numberConverterImg from "@/assets/images/tumbnail-project/number-convertion-2.png";
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
      className="flex flex-col justify-between items-start gap-2 w-full cursor-pointer"
    >
      <Image
        alt={title}
        src={srcTumb}
        className="border-valorantBlack/10 mb-2 border w-full h-full"
      />
      <h1 className="font-bold text-valorantBlack text-xl hover:underline uppercase">
        {title}
      </h1>
      <div className="flex flex-wrap justify-start items-start gap-1 text-valorantWhite text-xs">
        {stack.map((item, index) => (
          <p key={index} className="bg-valorantBlack px-2 uppercase">
            {item}
          </p>
        ))}
      </div>
      <p className="font-bold text-md text-valorantBlack/80 md:text-md hover:text-valorantBlack uppercase leading-none">
        {description}
      </p>
    </a>
  );
};

const matrixCalcucalor = (
  <CardProject
    linkHref="https://matrixcalculator.vercel.app"
    srcTumb={matrixCalculatorImg}
    title="matrix-calculator"
    stack={["NEXT JS", "TAILWIND CSS", "DAISYUI", "SWEETALERT2"]}
    description="This website was built as part of a college assignment to create an application for the addition, subtraction, and multiplication of two matrices"
  />
);
const numberConverter = (
  <CardProject
    linkHref="https://number-converter-2.vercel.app"
    srcTumb={numberConverterImg}
    title="number-converter"
    stack={["NEXT JS", "TAILWIND CSS", "DAISYUI", "SWEETALERT2"]}
    description="This website was developed as part of a college assignment to create an application for converting decimal, binary, octal, and hexadecimal numbers."
  />
);
const myPortfolio = (
  <CardProject
    linkHref="https://zaky.vercel.app"
    srcTumb={myPortfolioImg}
    title="zaky"
    stack={["NEXT JS", "TAILWIND CSS", "FRAMERMOTION"]}
    description="PERSONAL WEBSITE FOR INFORMATION ABOUT ME, ESPECIALLY IN THE FIELD OF TECHNOLOGY"
  />
);
const infoGedongarum = (
  <CardProject
    linkHref="https://gedongarum.vercel.app"
    srcTumb={gedongarumImg}
    title="gedongarum"
    stack={["NEXT JS", "TAILWIND CSS", "SHADCN UI"]}
    description="This website was constructed as part of a college assignment to create an informational website about the hometown village of the student"
  />
);

export const projects_item = [
  infoGedongarum,
  matrixCalcucalor,
  numberConverter,
  myPortfolio,
];
