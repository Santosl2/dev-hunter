import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

import Link from "next/link";

import { Button } from "../../Button";
import { SocialMediaButtonsProps } from "./SocialMediaButtons.types";

export function SocialMediaButtons({
  github,
  linkedin,
}: SocialMediaButtonsProps) {
  if (!github || !linkedin) return null;

  return (
    <section className="flex gap-2">
      <Link href={`https://github.com/${github}`} target="_blank">
        <Button $variant="github" iconLeft={<AiOutlineGithub size={24} />}>
          GitHub
        </Button>
      </Link>
      <Link href={linkedin} target="_blank">
        <Button $variant="linkedin" iconLeft={<AiFillLinkedin size={24} />}>
          Linkedin
        </Button>
      </Link>
    </section>
  );
}
