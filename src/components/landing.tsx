/* eslint-disable react/no-unescaped-entities */
"use client";
import PixelCountdown from "./pixel-countdown";
import Link from "next/link";
import { rqndpPro, karmaticArcade } from "../utils/font";
import { motion } from "framer-motion";

const landingDate = new Date("2024-10-25T11:00:00");

export default function Landing() {
  return (
    <motion.div
      className={`bg-da_dark`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative isolate px-6 lg:px-6">
        <motion.div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-da_lighter to-da_lightest opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </motion.div>
        <div className="mx-auto max-w-2xl py-16 sm:py-48 lg:py-[6rem]">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-base leading-6 text-gray-300 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Hosted on De Anza College Campus{" "}
              <Link
                href="https://deanza.edu/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-da_lightest"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Learn more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h1
              className={`lg:text-[5rem] font-bold tracking-tight text-gray-100 text-[3rem] ${karmaticArcade.className}`}
            >
              De Anza Hacks V3.0
            </h1>
            <div className="flex flex-col items-center gap-2">
              <PixelCountdown targetDate={landingDate} />
            </div>

            <p className="mt-6 lg:text-2xl text-base leading-8 text-gray-300 font-thin">
              Cupertino’s leading hackathon is back! Join us for our 4th year
              with 200+ hackers across the state! October 25th - October 26th,
              2024
            </p>
            <div className="mt-10 flex items-center flex-col justify-center gap-y-6">
              <Link
                href="https://docs.google.com/document/d/e/2PACX-1vQmDCK49N5kSuBpJ9Dw5KhlMqriV16uB-_2R0-PrGmk3n3X-dB9Prqh02WYxIBSJoETj7I4buMfd84t/pub"
                target="_blank"
                rel="noreferrer"
                className={`rounded-md bg-yellow-500	 px-5 py-3.5 text-2xl font-bold text-white shadow-sm hover:bg-da_lightest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-da_lightest ${rqndpPro.className} `}
              >
                HACKER'S GUIDE
              </Link>
              {/*<Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfG9ncjB7jS9vIq3UI2PHdQ63lVDmzqY_8z3PrPK8j2w4SDnA/viewform"
                target="_blank"
                rel="noreferrer"
                className={`rounded-md px-5 py-3.5 text-2xl font-bold text-white underline ${rqndpPro.className}`}
              >
                APPLY AS A MENTOR
              </Link>*/}
            </div>
          </div>
        </div>
        <motion.div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-da_lighter to-da_lightest opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
