"use client";

import React, { useState } from "react";

const SubscribeNewsletter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setIsSubmitted(false); // Reset the submission state when reopening the modal
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScKU375HOpyOs2RG0olcV1ZSvhW7NMPydk1Sdet6JqnxKOCeQ/viewform?usp=pp_url&entry.393667472=" + encodeURIComponent(email);
    window.open(formUrl, "_blank");
    setIsSubmitted(true);
    setEmail(""); // Clear the input field
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="fixed bottom-4 right-4 px-4 py-2 border-2 border-white rounded-md p-2.5 text-da_gold shadow-sm shadow-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 hover:bg-gray-100 hover:text-[#8B032C]"
      >
        Subscribe
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#800000] p-6 rounded-lg shadow-lg text-da_gold">
            <h2 className="text-2xl text-center mb-4">Subscribe to our Newsletter!</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="border border-da_gold bg-[#400000] p-2 mb-4 w-full text-da_gold placeholder-da_gold"
            />
            <div className="flex justify-end">
                <button
                onClick={handleSubmit}
                className="bg-da_gold text-[#800000] px-4 py-2 rounded mr-2 hover:bg-[#FFD700] hover:text-[#400000]"
                >
                Submit
                </button>
                <button
                onClick={handleClose}
                className="bg-[#B22222] text-da_gold px-4 py-2 rounded hover:bg-[#FF6347] hover:text-[#400000]"
                >
                Close
                </button>
            </div>     
          </div>
        </div>
      )}
    </>
  );
};

export default SubscribeNewsletter;