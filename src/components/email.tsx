import Link from "next/link";

export default function Email() {
  return (
    <div id="contact" className="py-32 bg-da_dark flex-col items-center">
      {/*email */}
      <h1 className="flex flex-col text-2xl gap-2 text-da_gold  items-center py-10 my-10">
        <span className="text-4xl text-da_gold pb-4">Questions?</span>
        Contact us @{"  "} <br />
        <Link
          href="mailto:deanzadevelopers@gmail.com"
          target="_blank"
          className="text-gray-500 hover:text-gray-900 dark:hover:text-da_gold dark:text-gray-400 "
        >
          deanzadevelopers@gmail.com
        </Link>
      </h1>
    </div>
  );
}
