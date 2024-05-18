import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Sponsors from "./components/Sponsor";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Team from "./components/ourTeam";

export default function Page() {
  return (
    <>
      <Navbar />
      <Landing />
      <Sponsors />
      <Faq />
      <Contact />
      <Team />
      {/* <div className="bg-gradient-radial from-white to-blue-500 h-screen flex items-center justify-center">
        <h1 className="text-5xl font-bold text-black">Join De Anza Hacks</h1>
      </div> */}
    </>
  );
}
