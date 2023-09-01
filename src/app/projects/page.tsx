import { Metadata } from "next/types";
import ProjectContent from "@/components/organisms/projects/ProjectContent";

export const metadata: Metadata = {
  title: "Project - Portfolio",
  description: "This is the projects page and I wish you all the best",
};

const ProjectsPage = () => {
  return (
    <section className="w-full min-h-screen">
      <SectionGrid className="h-[4rem] w-full flex">
        <div className="w-full md:w-[80%] border-r border-valorantBlack/50" />
        <div className="w-0 md:w-[20%] " />
      </SectionGrid>
      <div className="flex w-full">
        <ProjectContent />
        <SectionGrid className="w-0 md:w-[20%] border-t border-t-valorantBlack/50" />
      </div>
    </section>
  );
};

export default ProjectsPage;

const SectionGrid = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;
