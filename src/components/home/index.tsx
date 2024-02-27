import IntroSection from "./component/IntroSection";
import LatestProject from "./component/LatestProjectSection";
import ContactSection from "./component/ContactSection";

const Home = () => {
    return (
        <section>
            <IntroSection />
            <LatestProject />
            <ContactSection />
        </section>
    );
};

export default Home;
