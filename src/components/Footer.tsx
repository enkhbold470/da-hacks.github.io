import Link from "next/link";
import { IconBrandGithub, IconFileText } from "@tabler/icons-react";

export default function Footer() {
  return (
    <div className="w-full py-10 flex flex-col relative overflow-hidden">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2">
        <h1 className="text-md text-center">
          Clone this website on
          <Link
            href="https://github.com/da-hacks/da-hacks.github.io"
            target="_blank"
            className="ml-2"
          >
            <span className="underline pr-1">Github</span><IconBrandGithub className="inline-block" />
          </Link>
        </h1>
        <h1 className="text-md text-center">
          License: GPLv3
          <Link
            href="https://github.com/da-hacks/da-hacks.github.io/blob/main/LICENSE"
            target="_blank"
            className="ml-2"
          >
            <IconFileText className="inline-block" />
          </Link>
        </h1>
        <h1 className="text-md text-center">
          Made with ❤️ by the DAHacks team in Cupertino, CA
        </h1>
        <h2 className="text-sm text-center underline">
          <Link href="/policies">Policy & Code of Conduct</Link>
        </h2>
      </div>
    </div>
  );
}
