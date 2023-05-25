import React from "react";

const Card = () => {
  return (
    <div className="w-[350px] border border-red-500 space-y-2">
      <div className="h-[200px] bg-slate-500"></div>
      <p className="font-semibold">Growth Familie</p>
      <p className="text-sm">Dicoding</p>
      <p>
        Growth Familie merupakan aplikasi berbasis web yang mengusung tema
        Solusi Keluarga dan Parenting, project ini merupakan tugas Capstone atau
        tugas akhir dari kegiatan SIB Dicoding. Project ini dibangun dalam
        bentuk tim yang beranggotakan 4 orang.
      </p>
      <button className="py-1 px-2 rounded-sm bg-red-400 text-white">
        repository
      </button>
    </div>
  );
};

const Project = () => {
  return (
    <div className="grid grid-cols-3 mx-auto gap-10 px-10">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Project;
