"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { sponsors, SponsorProps } from "@/add_info/sponsors";
import { motion, useInView } from "framer-motion"; // Import useInView

export default function Sponsors() {
  const ref = React.useRef(null); // Create a ref
  const inView = useInView(ref, { once: true }); // Check if in view

  return (
    <motion.section // Wrap the entire section with motion.section
      id="sponsor"
      className="py-24 bg-gradient-to-b from-da_dark via-da_lightest to-da_dark "
      ref={ref} // Attach ref to motion.section
      initial={{ opacity: 0, y: -50 }} // Initial state
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }} // Animate based on inView
      transition={{ duration: 1 }} // Transition duration
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h4 className="text-4xl text-gray-200 text-center font-medium">
            Our Sponsors and Partners
          </h4>
        </div>
        <div className="grid grid-cols-2  justify-center  items-center  gap-12 md:grid-cols-3  xl:grid-cols-none xl:flex xl:justify-between">
          {sponsors.map((sponsor: SponsorProps, index: number) => (
            <motion.div // Keep Link wrapped with motion.div for individual animations
              key={index}
              initial={{ opacity: 0 }} // Initial state for individual items
              animate={{ opacity: inView ? 1 : 0 }} // Animate based on inView
              transition={{ duration: 0.5 }} // Transition duration
            >
              <Link
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
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
