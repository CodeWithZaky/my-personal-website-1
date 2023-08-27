import { Metadata } from "next/types";
import ContactSection from "@/src/components/organisms/pages/ContactSection";
import LatestProjectSection from "@/src/components/organisms/pages/LatestProjectSection";
import HeaderSection from "@/components/organisms/pages/HeaderSection";

export const metadata: Metadata = {
  title: "Home - Portfolio",
  description: "This is the home page and I wish you all the best",
};

const Home = () => {
  return (
    <section>
      <HeaderSection />
      <LatestProjectSection />
      <ContactSection />
    </section>
  );
};
export default Home;
