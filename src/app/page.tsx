import Image from "next/image";
import profilIMG from "@/assets/profil2.jpg";
import { Metadata } from "next";
import ButtonLearnMore from "../components/button-learn-more";

export const metadata: Metadata = {
  title: "Home - Portfolio",
};

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center m-auto border border-red-500 gap-4 py-20">
      <h3 className="text-2xl font-bold">welcome to my portfolio</h3>
      <h1 className="text-8xl font-bold">{"I'M ZAKY"}</h1>
      <h1 className="text-5xl font-bold">{"FRONTEND WEB DEVELOPER"}</h1>
      <ButtonLearnMore />
    </div>
  );
};
export default Home;
