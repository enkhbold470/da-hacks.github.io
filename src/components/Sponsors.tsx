import Image from "next/image";
import Link from "next/link";
import { sponsors, SponsorProps } from "@/add_info/sponsors";

export default function Sponsors() {
  return (
    <section
      id="sponsor"
      className="py-24 bg-gradient-to-b from-slate-950 via-green-600 to-slate-950 "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h4 className="text-4xl text-gray-200 text-center font-medium">
            Our Sponsors and Partners
          </h4>
        </div>
        <div className="grid grid-cols-2  justify-center  items-center  gap-12 md:grid-cols-3  xl:grid-cols-none xl:flex xl:justify-between">
          {sponsors.map((sponsor: SponsorProps, index: number) => (
            <Link
              key={index}
              href={sponsor.link}
              target="_blank"
              className="flex flex-col justify-center items-center"
            >
              <Image
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={sponsor.imageUrl}
                alt={sponsor.name}
                width={158}
                height={48}
              />
              <p className="text-gray-200 text-center mt-2">{sponsor.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
