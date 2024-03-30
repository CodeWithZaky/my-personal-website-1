import matrixcalc from "@/assets/images/tumbnail-project/matrix-calculator-2.png";
import numbconv from "@/assets/images/tumbnail-project/number-convertion-2.png";
import myportfolio from "@/assets/images/tumbnail-project/my-portfolio-2.png";
import gedongarum from "@/assets/images/tumbnail-project/gedongarum.png";
import CardProject from "../CardProject";

const matrixCalc = (
    <CardProject
        linkHref="https://matrix-calc.vercel.app"
        srcTumb={matrixcalc}
        title="matrix-calc"
        stack={["NEXT JS", "TAILWIND CSS", "DAISYUI", "SWEETALERT2"]}
        description="This website was built as part of a college assignment to create an application for the addition, subtraction, and multiplication of two matrices"
    />
);
const numbConv = (
    <CardProject
        linkHref="https://numconv.vercel.app"
        srcTumb={numbconv}
        title="numconv"
        stack={["NEXT JS", "TAILWIND CSS", "DAISYUI", "SWEETALERT2"]}
        description="This website was developed as part of a college assignment to create an application for converting decimal, binary, octal, and hexadecimal numbers."
    />
);
const myPortfolio = (
    <CardProject
        linkHref="https://zaky.vercel.app"
        srcTumb={myportfolio}
        title="zaky"
        stack={["NEXT JS", "TAILWIND CSS", "FRAMERMOTION"]}
        description="PERSONAL WEBSITE FOR INFORMATION ABOUT ME, ESPECIALLY IN THE FIELD OF TECHNOLOGY"
    />
);
const infogedongarum = (
    <CardProject
        linkHref="https://gedongarum.vercel.app"
        srcTumb={gedongarum}
        title="gedongarum"
        stack={["NEXT JS", "TAILWIND CSS", "SHADCN UI"]}
        description="This website was constructed as part of a college assignment to create an informational website about the hometown village of the student"
    />
);

export const thumbnail_projects = [
    infogedongarum,
    matrixCalc,
    numbConv,
    myPortfolio,
];
