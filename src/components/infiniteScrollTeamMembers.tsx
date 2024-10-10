"use client";

import React, { useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { teamMembers, TeamMemberProps } from "@/add_info/teamMembers";

const imageUrlHead =
  "https://raw.githubusercontent.com/enkhbold470/da-hacks.github.io/refs/heads/main/public";

export default function InfiniteScrollTeamMembers() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 1; // Adjust the scroll speed as needed
  let isTouching = false;

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let startX = 0;
    let scrollLeft = 0;

    const handleScroll = () => {
      if (scrollContainer) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
        }
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (scrollContainer) {
        event.preventDefault(); // Prevent default vertical scroll
        scrollContainer.scrollLeft += event.deltaY;
        handleScroll();
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      isTouching = true;
      startX = event.touches[0].pageX - scrollContainer!.offsetLeft;
      scrollLeft = scrollContainer!.scrollLeft;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isTouching) return;
      const x = event.touches[0].pageX - scrollContainer!.offsetLeft;
      const walk = (x - startX) * 2; // Adjust the multiplier as needed
      scrollContainer!.scrollLeft = scrollLeft - walk;
      handleScroll();
    };

    const handleTouchEnd = () => {
      isTouching = false;
    };

    const autoScroll = () => {
      if (scrollContainer && !isTouching) {
        scrollContainer.scrollLeft += scrollSpeed;
        handleScroll();
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      scrollContainer.addEventListener("wheel", handleWheel, { passive: false });
      scrollContainer.addEventListener("touchstart", handleTouchStart, { passive: true });
      scrollContainer.addEventListener("touchmove", handleTouchMove, { passive: true });
      scrollContainer.addEventListener("touchend", handleTouchEnd, { passive: true });
      const scrollInterval = setInterval(autoScroll, 20); // Adjust the interval as needed

      return () => {
        clearInterval(scrollInterval);
        scrollContainer.removeEventListener("scroll", handleScroll);
        scrollContainer.removeEventListener("wheel", handleWheel);
        scrollContainer.removeEventListener("touchstart", handleTouchStart);
        scrollContainer.removeEventListener("touchmove", handleTouchMove);
        scrollContainer.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, []);

  return (
    <div className="w-full overflow-hidden py-10">
      <style jsx>{`
        .scroll-container {
          display: flex;
          overflow-x: hidden;
          scrollbar-width: none; /* Firefox */
        }

        .scroll-container::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        .scroll-content {
          display: flex;
          width: max-content;
        }
      `}</style>
      <div ref={scrollRef} className="scroll-container">
        <div className="scroll-content">
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
    </div>
  );
}
