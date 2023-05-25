"use client";
import NavSkill from "@/src/components/NavSkill";
import { useEffect } from "react";
import { icons_all } from "@/src/components/icons-skill";
import { useRouter } from "next/navigation";
const About = () => {
  const { push } = useRouter();
  useEffect(() => {
    setTimeout(() => {
      push("/skill/all");
    }, 1000);
  }, [push]);
  return (
    <div className="h-full w-full">
      <p className="m-auto font-bold text-5xl">Loading...</p>
    </div>
  );
};
export default About;
