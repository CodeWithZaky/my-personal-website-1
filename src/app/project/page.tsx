const Card = ({ num }: { num: number }) => {
  return (
    <div className="w-[400px] pr-10 py-5 pl-5 relative border-l-2 border-t-2 border-black">
      <div className="h-[150px] bg-valorant " />
      <div className="flex flex-col justify-center">
        <div className="flex flex-row justify-start items-center">
          <p className="font-semibold">{"12/12/12"}</p>
          <p className="font-bold">{"."}</p>
          <p className="text-sm font-semibold text-valorant">
            next js, tailwind, redux toolkit
          </p>
        </div>
        <p className="font-semibold">
          Growth Familie merupakan aplikasi berbasis web yang mengusung tema
          Solusi Keluarga dan Parenting
        </p>
      </div>
      {num == 2 ? (
        <div className="w-[15px] h-[15px] bg-valorant absolute left-0 bottom-0" />
      ) : (
        ""
      )}
      {num % 3 == 0 ? (
        <div className="w-[15px] h-[15px] bg-black/50 absolute bottom-0 right-0" />
      ) : (
        ""
      )}
    </div>
  );
};

const Project = () => {
  return (
    <div className="min-h-screen w-full bg-valorantWhite">
      <div className="h-[4rem] w-full flex">
        <div className="w-[80%] border-r-2 border-black" />
        <div className="w-[20%] " />
      </div>
      <div className=" w-full flex">
        <div className="w-[80%] border-r-2 border-t-2 border-r-black border-t-valorant flex flex-col justify-end items-end">
          <div className="w-[10px] h-[10px] bg-valorant" />
          <h1 className="text-8xl font-bold">PROJECTS</h1>
          <div className="grid grid-cols-2 border-b-2 border-black">
            <Card num={1} />
            <Card num={2} />
            <Card num={3} />
            <Card num={4} />
            <Card num={5} />
            <Card num={6} />
            <Card num={7} />
            <Card num={8} />
          </div>
        </div>
        <div className="w-[20%] border-t-2 border-t-valorant" />
      </div>
    </div>
  );
};

export default Project;
