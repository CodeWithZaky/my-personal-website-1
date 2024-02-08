import { Metadata } from "next/types";
import HomePage from "@/components/home/index";

export const metadata: Metadata = {
    title: "Home - Portfolio",
    description: "This is the home page and I wish you all the best",
};

const Home = () => {
    return (
        <section>
            <HomePage />
        </section>
    );
};
export default Home;
