export default function Faq() {
  return (
    <section
      id="faqs"
      className=" text-gray-100 py-32 min-h-screen bg-gradient-to-b from-slate-950 via-green-800 to-slate-950"
    >
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-200">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is a hackathon?
            </summary>
            <div className="px-4 pb-4">
              <p>
                A hackathon is like a creative marathon for tech enthusiasts!
                DAHacks is great for first timers or returners looking to
                experience inspiring guest speakers, helpful workshops, tons of
                skilled mentors, and, of course, fun games and cool swag.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              When and where is DAHacks?
            </summary>
            <div className="px-4 pb-4">
              <p>
                DAHacks is from June 7 - 8 at De Anza College. Exact location on
                campus will be announced soon, together with the schedule! This
                is not an overnight event. if you have any questions, please
                email{" "}
                <a
                  href="mailto:deanzadevelopers@gmail.com"
                  className="underline"
                >
                  deanzadevelopers@gmail.com
                </a>{" "}
                for assistance.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Does it cost money to attend?
            </summary>
            <div className="px-4 pb-4">
              <p>
                No need to break the bank to join in on the hacking fun! DAHacks
                is absolutely FREE to attend. We believe in making tech
                innovation accessible to everyone.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Are there prizes?
            </summary>
            <div className="px-4 pb-4">
              <p>
                There will be prizes and swag for First, Second, and Third
                place. Others include Best Beginner Hack, Best Hardware Hack,
                Most Entertaining Hack, and Best Design.{" "}
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              I have never hacked before!
            </summary>
            <div className="px-4 pb-4">
              <p>
                Don’t sweat! DAHacks welcomes hackers of all levels, whether you
                are a coding prodigy or just dipping your toes into the world of
                hacking. We will have workshops and mentors to help you along
                the way, so you can learn, create, and have a blast! Here is to{" "}
                <a
                  href="https://github.com/da-hacks/awesome-projects-boilerplates"
                  className="underline text-lg"
                >
                  hacking kit
                </a>{" "}
                get you started
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How do teams work?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Teams can have up to 4 members. You can either form a team
                before hand and come to the event or make teammates at the
                event. We will be having a team making session. You can also
                choose to be alone if you wish to!
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What if I don’t have a team?
            </summary>
            <div className="px-4 pb-4">
              <p>
                No team? No problem! Leading up to our event, you can meet new
                people through our hacker Discord. We will have team formation
                events at the beginning of the hackathon geared towards helping
                you find people to work with.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
