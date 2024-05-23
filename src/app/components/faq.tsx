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
                DAHacks is from Friday, May 31st from 10:30 AM - 9 PM to Saturday, June 1st from 9 AM - 6 PM at De Anza College in the Science Center Building SC1102. This is not an overnight event. if you have any questions, please
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
              There will be prizes for First Place ($200), Second Place ($100), and Third Place ($75). There are also other special prizes!{" "}
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
            What if I have never hacked before?
            </summary>
            <div className="px-4 pb-4">
              <p>
              Don’t sweat! DAHacks welcomes hackers of all levels, whether you are a coding prodigy or just dipping your toes into the world of hacking. We will have workshops and mentors to help you along the way, so you can learn, create, and have a blast! Here is a link to our{" "}
                <a
                  href="https://github.com/da-hacks/awesome-projects-boilerplates"
                  className="underline text-lg"
                >
                  hacking kit
                </a>{" "}
                to get you started
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
              Teams who want to borrow equipment must have between 3 and 4 members. Otherwise, teams can have between 1 and 4 members. You can either form a team beforehand and come to the event or make teammates at the event. We will be having a team-making session. Note that teams must be formed by the opening ceremony at 12 PM. 
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
