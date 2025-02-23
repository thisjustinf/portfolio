import Image from "next/image";
import { SiGithub as GitHub } from "@icons-pack/react-simple-icons";
import { Linkedin } from "lucide-react";
import { ReactElement } from "react";

const SocialMediaIcons = (): ReactElement => {
  return (
    <div className="flex gap-4">
      <a
        href="https://www.linkedin.com/in/justin-fagan-jf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin />
      </a>
      <a
        href="https://www.github.com/thisjustinf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub />
      </a>
    </div>
  );
};

export default function Footer(): ReactElement {
  return (
    <footer className="flex items-center justify-center">
      <div className="container flex flex-col items-center justify-center px-4 py-8">
        <SocialMediaIcons />
        <p>
          &copy; {new Date().getFullYear()} Justin Fagan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
