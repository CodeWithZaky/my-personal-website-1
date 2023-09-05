import matrixcalc from "@/assets/images/tumbnail-project/matrix-calculator-2.png";
import numbconv from "@/assets/images/tumbnail-project/number-convertion-2.png";
import myportfolio from "@/assets/images/tumbnail-project/my-portfolio-2.png";
import CardProject from "../../tamplates/CardProject";

const matrixCalc = (
  <CardProject
    linkHref="https://matrix-calc.vercel.app"
    srcTumb={matrixcalc}
    title="MATRIX CALCULATOR"
    stack={["NEXT JS", "TAILWIND CSS", "DAISYUI", "SWEETALERT2"]}
    description="MATRIX CALCULATOR WEB APPLICATION DEVELOPED TO FULFILL UNIVERSITY ASSIGNMENTS"
  />
);
const numbConv = (
  <CardProject
    linkHref="https://numconv.vercel.app"
    srcTumb={numbconv}
    title="NUMBER CONVERSION"
    stack={["NEXT JS", "TAILWIND CSS", "DAISYUI", "SWEETALERT2"]}
    description="NUMBER CONVERSION WEB APPLICATION DEVELOPED TO FULFILL A UNIVERSITY ASSIGNMENT"
  />
);
const myPortfolio = (
  <CardProject
    linkHref="https://azaku.vercel.app"
    srcTumb={myportfolio}
    title="MY PORTFOLIO"
    stack={["NEXT JS", "TAILWIND CSS", "FRAMERMOTION"]}
    description="PERSONAL WEBSITE FOR INFORMATION ABOUT ME, ESPECIALLY IN THE FIELD OF TECHNOLOGY"
  />
);

export const thumbnail_projects = [matrixCalc, numbConv, myPortfolio];
