import CardProject from "@/src/components/project/CardProject";

const card_items: React.ReactNode[] = [];
for (let i = 1; i <= 6; i++) {
  card_items.push(<CardProject num={i} />);
}

const Project = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="h-[4rem] w-full flex">
        <div className="w-full md:w-[80%] border-r-2 border-black" />
        <div className="w-0 md:w-[20%] " />
      </div>
      <div className="w-full flex">
        <div className="w-full md:w-[80%] border-r-2 border-t-2 border-r-black border-t-valorant flex flex-col justify-end items-end">
          <div className="w-[10px] h-[10px] bg-valorant" />
          <h1 className="text-5xl md:text-8xl font-bold mb-5">PROJECTS</h1>
          <div className="w-[90%] md:w-[60%] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 border-y border-l border-black">
            {card_items}
          </div>
        </div>
        <div className="w-0 md:w-[20%] border-t-2 border-t-valorant" />
      </div>
    </div>
  );
};

export default Project;
