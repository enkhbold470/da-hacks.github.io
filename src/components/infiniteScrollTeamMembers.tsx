"use client";

import React, { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { teamMembers, TeamMemberProps } from "@/add_info/teamMembers";

const imageUrlHead =
  "https://raw.githubusercontent.com/enkhbold470/da-hacks.github.io/refs/heads/main/public";

export default function InfiniteScrollTeamMembers() {
  const [scrollWidth, setScrollWidth] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      setScrollWidth(scrollRef.current.scrollWidth);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden  py-10">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll linear infinite;
        }
      `}</style>
      <div
        ref={scrollRef}
        className="flex animate-scroll "
        style={{
          width: `${scrollWidth}px`,
          animationDuration: `${teamMembers.length * 10}s`,
        }}
      >
        {[...teamMembers, ...teamMembers].map(
          (person: TeamMemberProps, index: number) => (
            <Link
              href={person.linkedIn}
              target="_blank"
              key={index}
              className="flex lg:flex-row flex-col items-center space-x-4 px-4 gap-2 hover:scale-110 transition-all duration-300"
            >
              <Avatar className="h-[150px] w-[150px]">
                <AvatarImage
                  src={imageUrlHead + person.imageUrl}
                  alt={person.name}
                  className="hover:scale-110 transition-all duration-300"
                />
                <AvatarFallback>
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col min-w-[100px]">
                <p className="text-xl font-bold">{person.name}</p>
                <p className="text-sm font-thin opacity-50">{person.role}</p>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
