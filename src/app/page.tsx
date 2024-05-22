import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Team from "./components/ourTeam";
import Footer from "./components/Footer";
import SponsorLogos from "./components/SponsorsNew";
export default function Page() {
  return (
    <>
      <Navbar />
      <Landing />
      {/* <Sponsors /> */}
      <SponsorLogos />
      <Faq />
      <Contact />
      <Team />
      <Footer />
    </>
  );
}
