import { about_me } from "../../atoms/data/About-Me";

const AboutMeSection = () => {
  return (
    <div className="flex flex-col gap-3 text-md md:text-xl font-semibold pr-5 md:pr-0 w-full md:w-[80%] text-valoran my-2">
      {about_me.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

export default AboutMeSection;
