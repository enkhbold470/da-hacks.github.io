import { faq, FAQProps } from "@/add_info/faq";

export default function Faq() {
  return (
    <section
      id="faqs"
      className=" text-gray-100 py-32 min-h-screen bg-gradient-to-b from-slate-950 via-green-800 to-slate-950"
    >
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-200">
          {faq.map((item: FAQProps, index: number) => (
            <details key={index}>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                {item.question}
              </summary>
              <div className="px-4 pb-4">
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
