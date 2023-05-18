import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};
interface Props {
  children: React.ReactNode;
}

export default function Page({ children }: Props) {
  return (
    <main className="container-none w-full border h-screen">
      <div className="container mx-auto h-full flex flex-col border">
        {children}
      </div>
    </main>
  );
}
