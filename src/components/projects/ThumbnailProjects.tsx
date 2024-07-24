import gedongarumImg from "@/assets/images/tumbnail-project/gedongarum.png";
import matrixCalculatorImg from "@/assets/images/tumbnail-project/matrix-calculator-2.png";
import myPortfolioImg from "@/assets/images/tumbnail-project/my-portfolio-2.png";
import numberConverterImg from "@/assets/images/tumbnail-project/number-convertion-2.png";
import CardProject from "./CardProject";

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
    linkHref="https://v1.zaky.vercel.app"
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

export const thumbnail_projects = [
  infoGedongarum,
  matrixCalcucalor,
  numberConverter,
  myPortfolio,
];
