import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconBrandGithub,
  IconBrandDiscord,
} from "@tabler/icons-react";

type Social = {
  name: string;
  link: string;
  icon: React.ReactNode;
};

const socials: Social[] = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/deanzahacks/",
    icon: <IconBrandInstagram size={50} />,
  },

  {
    name: "GitHub",
    link: "https://github.com/da-hacks",
    icon: <IconBrandGithub size={50} />,
  },
  {
    name: "Discord",
    link: "https://discord.gg/uWBcwcRbTr",
    icon: <IconBrandDiscord size={50} />,
  },
];

export default function Socials() {
  return (
    <div id="socials" className="py-32 bg-da_dark flex-col items-center">
      {/*social */}
      <span className="flex justify-center mt-20 text-4xl text-da_gold">
        Socials
      </span>
      <ul className="flex justify-center space-x-8 py-4 h-min">
        {socials.map((social: Social) => (
          <li key={social.name}>
            <Link href={social.link} target="_blank">
              <div
                className="w-[50px] h-[50px] text-da_gold hover:text-da_gold/50"
                aria-hidden="true"
              >
                {social.icon}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
