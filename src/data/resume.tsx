import gedongarumImg from "@/assets/images/tumbnail-project/gedongarum.png";
import matrixCalculatorImg from "@/assets/images/tumbnail-project/matrix-calculator-2.png";
import myPortfolioImg from "@/assets/images/tumbnail-project/my-portfolio-2.png";
import numberConverterImg from "@/assets/images/tumbnail-project/number-convertion-2.png";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export const DATA = {
  name: "Ahmad Zaky Ubaidillah",
  url: "https://zaky.vercel.app",
  about_me: [
    "Hello, I'm Ahmad Zaky Ubaidillah, commonly known as Zaky or Ubed. I'm a Front-End Web Developer with over 2 years of experience. My primary skills include React.js, Next.js, Tailwind CSS, and TypeScript.",
    "Throughout my career journey, I've been dedicated to crafting captivating and responsive web interfaces. By harnessing technologies like React.js and Next.js, I create dynamic user experiences. Applying responsive design principles and adopting a mobile-first approach are integral parts of my work.",
    "I'm also highly proficient in utilizing Tailwind CSS for swiftly designing layouts and components. The implementation of TypeScript enhances code quality and minimizes potential errors during development. I'm consistently enthusiastic about learning and staying updated with the latest trends in the Front-End industry, aiming to create innovative and engaging web experiences for users.",
  ],
  skills: [
    "react js",
    "next js",
    "tailwind",
    "typescript",
    "react query",
    "react hook form",
    "shadcn ui",
    "swipper js",
    "sweetalert2",
    "framer motion",
  ],
  navbar: [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/project", title: "Project" },
  ],
  contact: {
    email: "ahmadzakyubaidillah@example.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: SiGithub,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: SiLinkedin,
      },
      X: {
        name: "Instagram",
        url: "https://dub.sh/dillion-twitter",
        icon: SiInstagram,
      },
    },
  },

  projects: [
    {
      title: "gedongarum",
      dates: "April 2023 - March 2024",
      description:
        "This website was constructed as part of a college assignment to create an informational website about the hometown village of the student",
      technologies: ["NEXT JS", "TAILWIND CSS", "SHADCN UI"],
      links: [
        {
          type: "Website",
          href: "https://gedongarum.vercel.app",
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
        },
      ],
      image: gedongarumImg,
    },
    {
      title: "matrix-calculator",
      dates: "Jan 2024 - Feb 2024",
      description:
        "This website was built as part of a college assignment to create an application for the addition, subtraction, and multiplication of two matricesa",
      technologies: ["NEXT JS", "TAILWIND CSS", "DAISYUI", "SWEETALERT2"],
      links: [
        {
          type: "Website",
          href: "https://matrixcalculator.vercel.app",
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
        },
      ],
      image: matrixCalculatorImg,
    },
    {
      title: "number-converter",
      dates: "June 2023 - Present",
      description:
        "This website was developed as part of a college assignment to create an application for converting decimal, binary, octal, and hexadecimal numbers.",
      technologies: ["NEXT JS", "TAILWIND CSS", "DAISYUI", "SWEETALERT2"],
      links: [
        {
          type: "Website",
          href: "https://number-converter-2.vercel.app",
        },
        {
          type: "Source",
          href: "",
        },
      ],
      image: numberConverterImg,
    },
    {
      title: "my personal website",
      dates: "April 2023 - September 2023",
      description:
        "PERSONAL WEBSITE FOR INFORMATION ABOUT ME, ESPECIALLY IN THE FIELD OF TECHNOLOGY",
      technologies: ["NEXT JS", "TAILWIND CSS", "FRAMERMOTION"],
      links: [
        {
          type: "Website",
          href: "https://zaky.vercel.app",
        },
        {
          type: "Source",
          href: "",
        },
      ],
      image: myPortfolioImg,
    },
  ],
} as const;
