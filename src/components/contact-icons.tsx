import {
  SiGithub,
  SiTwitter,
  SiInstagram,
  SiLinkedin,
  SiGmail,
} from "react-icons/si";

const IconsContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-row gap-2 mb-1">{children}</div>;
};

const LinkBlank = ({ tolink }: { tolink: string }) => {
  return (
    <a href={tolink} target="_blank" className="text-blue-700">
      {` - ${tolink}`}
    </a>
  );
};

const github = (
  <IconsContainer>
    <SiGithub className="text-black text-xl" />
    <p>Github</p>
    <LinkBlank tolink={"https://www.github.com"} />
  </IconsContainer>
);
const twitter = (
  <IconsContainer>
    <SiTwitter className="text-blue-500 text-xl" />
    <p>Twitter</p>
    <LinkBlank tolink={"https://www.twitter.com"} />
  </IconsContainer>
);
const instagram = (
  <IconsContainer>
    <SiInstagram className="text-red-700 text-xl" />
    <p>Instagram</p>
    <LinkBlank tolink={"https://www.instagram.com"} />
  </IconsContainer>
);
const linkedin = (
  <IconsContainer>
    <SiLinkedin className="text-blue-700 text-xl" />
    <p>Linkedin</p>
    <LinkBlank tolink={"https://www.linkedin.com"} />
  </IconsContainer>
);
const gmail = (
  <IconsContainer>
    <SiGmail className="text-red-600 text-xl" />
    <p>Gmail</p>
    <LinkBlank tolink={"https://www.gmail.com"} />
  </IconsContainer>
);
const contact_icons = [github, twitter, instagram, linkedin, gmail];
export { contact_icons };
