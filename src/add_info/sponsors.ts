export type SponsorProps = {
  name: string;
  imageUrl: string;
  link: string;
};

export const sponsors: SponsorProps[] = [
  {
    name: "XYZ",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fc/.xyz_logo.svg",
    link: "https://gen.xyz",
  },
  {
    name: "De Anza College",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/be/De_Anza_College_logo.svg",
    link: "https://deanza.edu",
  },
  {
    name: "DASG",
    imageUrl:
      "https://www.deanza.edu/dasg/images/dasg-logo/dasg-logo-abreviation.png",
    link: "https://www.deanza.edu/dasg/",
  },
  {
    name: "De Anza Developers",
    imageUrl: "/dadevlogo.png",
    link: "#",
  },
];
