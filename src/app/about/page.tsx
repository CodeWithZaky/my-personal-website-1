import { Metadata } from "next/types";
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
