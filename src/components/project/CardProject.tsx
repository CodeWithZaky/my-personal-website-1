const CardProject = ({ num }: { num: number }) => {
  return (
    <div className="w-[400px] pr-10 py-5 pl-5 relative border-l-2 border-t-2 border-black">
      <div className="h-[150px] w-[90%] bg-valorant " />
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

export default CardProject;
