const CardProject = ({ num }: { num: number }) => {
  return (
    <div className="p-5 relative border border-black">
      <div className="aspect-video bg-valorant" />
      <div className="flex flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-start items-start">
          <span className="font-semibold">{"12/12/12"}</span>
          <span className="hidden md:block font-bold">{"."}</span>
          <span className="text-sm font-semibold text-valorant">
            next js, tailwind, redux toolkit
          </span>
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
