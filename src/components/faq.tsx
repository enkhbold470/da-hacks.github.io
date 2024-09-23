"use client";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { faq, FAQProps } from "@/add_info/faq";

export default function Faq() {
  return (
    <section // Change section to motion.section
      id="faqs"
      className=" text-gray-100 py-32 min-h-screen bg-gradient-to-b from-slate-950 via-green-800 to-slate-950"
    >
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-200">
          {faq.map((item: FAQProps, index: number) => (
            <motion.details // Change details to motion.details
              key={index}
              initial={{ opacity: 0, x: -50 }} // Initial position for details
              animate={{ opacity: 1, x: 0 }} // Animate to original position
              transition={{ duration: 0.3 }} // Transition duration for details
            >
              <motion.summary
                className="py-2 outline-none cursor-pointer focus:underline"
                initial={{ opacity: 0, x: 500 }} // Initial position for details
                animate={{ opacity: 1, x: 0 }} // Animate to original position
                transition={{ duration: 0.5 }} // Transition duration for details
              >
                {item.question}
              </motion.summary>
              <div className="px-4 pb-4">
                <p>{item.answer}</p>
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
