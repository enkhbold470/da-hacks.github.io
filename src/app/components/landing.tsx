import Countdown from "./Countdown";
export default function Landing() {
  return (
    <>
      <div className="bg-slate-950 ">
        {
          // <Countdown targetDate="2024-04-20T00:00:00" />
        }

        <div className="relative isolate px-6 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0eff00] to-[#063b00] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-16 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-base leading-6 text-gray-300 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Hosted on De Anza College Campus{" "}
                <a
                  href="https://deanza.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-green-600"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Learn more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <Countdown
                //   className="xl:text-7xl lg:text-6xl text-8xl mb-4 font-CerealBD text-white"
                targetDate="2024-06-07T00:00:00"
              />
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                De Anza Hacks V2.5
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Cupertino’s leading hackathon is back! Join us for our 3rd year
                with 200+ hackers across the state! June 7 - 8, 2024
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://forms.gle/ErSuEtGjBr3v92X59"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md bg-green-600 px-5 py-3.5 text-2xl font-bold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  APPLY NOW
                </a>
                <a
                  href="mailto:deanzadevelopers@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-semibold leading-6 text-gray-100"
                >
                  Judge/Sponsor Form
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0eff00] to-[#063b00]  opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
