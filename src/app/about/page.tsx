import { Metadata } from "next/types";
import clsx from "clsx";
import { DINNextW1G } from "@/src/assets/fonts/font";
import AboutPage from "@/src/components/about";

export const metadata: Metadata = {
    title: "About - Portfolio",
    description: "This is the about page and I wish you all the best",
};

const About = () => {
    return (
        <div>
            <AboutPage />
        </div>
    );
};
export default About;
