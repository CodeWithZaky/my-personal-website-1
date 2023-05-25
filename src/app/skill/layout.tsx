import NavSkill from "@/src/components/NavSkill";
import { Metadata } from "next";

export const metadata = {
  title: {
    template: "Skill %s - Portfolio",
  },
};
interface Props {
  children: React.ReactNode;
}

export default function Page({ children }: Props) {
  return (
    <main className="container-none w-full h-full m-auto">
      <div className="container mx-auto h-full flex flex-col">
        <div className="flex flex-col justify-center items-start gap-7 w-[80%] m-auto px-10 pb-10 border">
          <div className="font-bold text-5xl font-mono mb-5 border">
            My Skills
          </div>
          <NavSkill />
          <>{children}</>
        </div>
      </div>
    </main>
  );
}
