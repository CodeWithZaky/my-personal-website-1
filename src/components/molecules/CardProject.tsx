import { DINNextW1G } from "@/src/assets/fonts/font";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

interface PropsType {
  srcTumb: StaticImageData;
  title: string;
  stackTumb: string[];
  textTumb: string;
  linkHref: string;
}

const CardProject = (props: PropsType) => {
  const { linkHref, title, srcTumb, stackTumb, textTumb } = props;
  return (
    <a
      href={`${linkHref}`}
      target="_blank"
      className={clsx(
        DINNextW1G.className,
        "flex flex-col items-start justify-start w-full gap-2 cursor-pointer"
      )}
    >
      <ImageProject alt={title} src={srcTumb} />
      <Title title={title} />
      <Stack stackTumb={stackTumb} />
      <Description text={textTumb} />
    </a>
  );
};

export default CardProject;

const ImageProject = ({ alt, src }: { alt: string; src: StaticImageData }) => (
  <Image
    alt={alt}
    src={src}
    className="w-full h-full mb-2 border border-valorantBlack/10"
  />
);
const Title = ({ title }: { title: string }) => (
  <h1 className="text-xl font-bold text-valorantBlack hover:underline">
    {title}
  </h1>
);
const Stack = ({ stackTumb }: { stackTumb: string[] }) => (
  <div className="flex flex-wrap items-start justify-start gap-1 text-xs text-valorantWhite">
    {stackTumb.map((item, index) => (
      <p key={index} className="px-2 bg-valorantBlack">
        {item}
      </p>
    ))}
  </div>
);
const Description = ({ text }: { text: string }) => (
  <p className="font-bold leading-none text-md md:text-md text-valorantBlack/80 hover:text-valorantBlack">
    {text}
  </p>
);
