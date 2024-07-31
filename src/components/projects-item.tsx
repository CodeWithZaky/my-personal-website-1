import Image, { StaticImageData } from "next/image";

interface CardProjectType {
  srcImage: StaticImageData;
  title: string;
  technologies: readonly string[];
  description: string;
  href: string;
}

export const CardProject = (props: CardProjectType) => {
  const { href, title, srcImage, technologies, description } = props;
  return (
    <a
      href={`${href}`}
      target="_blank"
      className="flex flex-col justify-between items-start gap-2 w-full cursor-pointer"
    >
      <Image
        alt={title}
        src={srcImage}
        className="border-valorantBlack/10 mb-2 border w-full h-full"
      />
      <h1 className="font-bold text-valorantBlack text-xl hover:underline uppercase">
        {title}
      </h1>
      <div className="flex flex-wrap justify-start items-start gap-1 text-valorantWhite text-xs">
        {technologies.map((item, index) => (
          <p key={index} className="bg-valorantBlack px-2 uppercase">
            {item}
          </p>
        ))}
      </div>
      <p className="font-bold text-md text-valorantBlack/80 md:text-md hover:text-valorantBlack uppercase leading-none">
        {description}
      </p>
    </a>
  );
};
