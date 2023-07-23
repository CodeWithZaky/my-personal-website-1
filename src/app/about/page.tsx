import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Portfolio",
};

const About = () => {
  return (
    <div className="w-[70%] m-auto font-mono border flex justify-between items-start pb-10">
      <div className="w-[70%] border space-y-8">
        <p className="text-5xl font-bold border">About Me</p>
        <div className="space-y-4 pr-5">
          <p>
            My name is Ahmad Zaky Ubaidillah, but you can call me Zaky or Ubed.
          </p>
          <p>
            For over 2 years developing and programming interfaces with Next js,
            Tailwind css and Typescript.
          </p>
          <p>
            study of Systems Analysis and Development from Informatics
            Engineering.
          </p>
          <p>
            Interest in Front-end development with Next js, Tailwind css, and
            Typescript.
          </p>
          <p>Trying to be a little better than yesterday every day.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
