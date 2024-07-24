import clsx from "clsx";

const about_me: string[] = [
  "Hello, I'm Ahmad Zaky Ubaidillah, commonly known as Zaky or Ubed. I'm a Front-End Web Developer with over 2 years of experience. My primary skills include React.js, Next.js, Tailwind CSS, and TypeScript.",
  "Throughout my career journey, I've been dedicated to crafting captivating and responsive web interfaces. By harnessing technologies like React.js and Next.js, I create dynamic user experiences. Applying responsive design principles and adopting a mobile-first approach are integral parts of my work.",
  "I'm also highly proficient in utilizing Tailwind CSS for swiftly designing layouts and components. The implementation of TypeScript enhances code quality and minimizes potential errors during development. I'm consistently enthusiastic about learning and staying updated with the latest trends in the Front-End industry, aiming to create innovative and engaging web experiences for users.",
];

const AboutMeSection = () => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-3 font-semibold w-11/12 sm:w-4/5 text-valoran my-2 text-valorantBlack",
        "text-md sm:text-xl md:text-2xl lg:text-2xl",
        "pr-5 md:pr-0"
      )}
    >
      {about_me.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

export default AboutMeSection;
