"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TeamMemberProps, teamMembers } from "@/add_info/teamMembers";

export default function OurTeam() {
  return (
    // Wrap the main container with motion.div
    <motion.div
      id="team"
      className="bg-slate-950 py-24 sm:py-32"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Meet the people who make De Anza Hacks possible.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {teamMembers.map((person: TeamMemberProps) => (
            // Wrap each team member item with motion.div
            <motion.div
              key={person.name} // Moved key to motion.div for better list rendering
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href={person.linkedIn} target="_blank">
                <li>
                  <div className="flex items-center gap-x-6">
                    <Image
                      className="h-32 w-32 rounded-full"
                      src={person.imageUrl}
                      alt={person.name}
                      width={128}
                      height={128}
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-200">
                        {person.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-green-600">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </li>
              </Link>
            </motion.div>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
