import { Metadata } from "next/types";
import ContactSection from "../components/home/ContactSection";
import IntroSection from "../components/home/IntroSection";
import LatestProject from "../components/home/LatestProjectSection";

export const metadata: Metadata = {
  title: "Home - Portfolio",
  description: "This is the home page and I wish you all the best",
};

const HomeHomePage = () => {
  return (
    <div>
      <IntroSection />
      <LatestProject />
      <ContactSection />
    </div>
  );
};
export default HomeHomePage;
