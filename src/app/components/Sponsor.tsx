export default function Sponsors() {
  return (
    <div
      id="sponsors"
      className="py-40 sm:py-32 bg-gradient-to-b from-slate-950 via-green-600 to-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-xl font-semibold leading-8 text-white">
          Trusted by the most innovative sponsors
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/1/16/Wolfram_Alpha_logo.svg"
            alt="Wolfram Alpha"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/f/fc/.xyz_logo.svg"
            alt="XYZ"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 "
            src="https://upload.wikimedia.org/wikipedia/commons/b/be/De_Anza_College_logo.svg"
            alt="Deanza College"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/4/4b/AAAMM_Big_Tech.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
            alt="OpenAI"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
}
