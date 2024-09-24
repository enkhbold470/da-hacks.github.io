"use client";
import { motion, useInView } from "framer-motion"; // Import useInView from framer-motion
import { faq, FAQProps } from "@/add_info/faq";
import React, { useRef } from "react";

export default function Faq() {
  const faqRef = useRef(null);
  const isInView = useInView(faqRef, { once: true }); // Ensure this is set up correctly

  return (
    <motion.section
      id="faqs"
      className=" text-gray-100 py-32 min-h-screen bg-gradient-to-b from-da_dark via-da_lighter to-da_dark overflow-hidden"
      ref={faqRef} // Attach ref to section for visibility tracking
      initial={{ opacity: 0, y: -50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Animate based on visibility
      transition={{ duration: 0.5 }}
    >
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-200 overflow-hidden">
          {faq.map((item: FAQProps, index: number) => (
            <motion.details
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on visibility
              transition={{ duration: 0.7 }}
            >
              <motion.summary
                className="py-2 outline-none cursor-pointer focus:underline"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                } // Animate based on visibility
                transition={{ duration: 0.7 }}
              >
                {item.question}
              </motion.summary>
              <motion.div
                className="px-4 pb-4"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                } // Animate based on visibility
                transition={{ duration: 0.8 }}
              >
                <p>{item.answer}</p>
              </motion.div>
            </motion.details>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
