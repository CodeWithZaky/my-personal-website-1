import { Metadata } from "next/types";
import ContactSection from "../components/home/contact-section";
import IntroSection from "../components/home/intro-section";
import LatestProject from "../components/home/latest-project-section";

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
