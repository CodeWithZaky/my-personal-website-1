import Image, { StaticImageData } from "next/image";

interface CardProjectType {
  srcTumb: StaticImageData;
  title: string;
  stack: string[];
  description: string;
  linkHref: string;
}

const CardProject = (props: CardProjectType) => {
  const { linkHref, title, srcTumb, stack, description } = props;
  return (
    <a
      href={`${linkHref}`}
      target="_blank"
      className="flex flex-col justify-between items-start gap-2 w-full cursor-pointer"
    >
      <Image
        alt={title}
        src={srcTumb}
        className="border-valorantBlack/10 mb-2 border w-full h-full"
      />
      <h1 className="font-bold text-valorantBlack text-xl hover:underline uppercase">
        {title}
      </h1>
      <div className="flex flex-wrap justify-start items-start gap-1 text-valorantWhite text-xs">
        {stack.map((item, index) => (
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

export default CardProject;
