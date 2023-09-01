import { Metadata } from "next/types";
import ContactSection from "@/components/organisms/home/ContactSection";
import LatestProjectSection from "@/components/organisms/home/LatestProjectSection";
import HeaderSection from "@/components/organisms/home/HeaderSection";

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
