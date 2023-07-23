import NavSkill from "@/src/components/nav-skill";

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
    <div className="flex flex-col justify-center items-start gap-7 w-[70%] m-auto pb-10 border">
      <div className="font-bold text-5xl font-mono mb-5 border">My Skills</div>
      <NavSkill />
      <>{children}</>
    </div>
  );
}
