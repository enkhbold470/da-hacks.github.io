import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Sponsors from "./components/Sponsor";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Team from "./components/ourTeam";
import Footer from "./components/Footer";
export default function Page() {
  return (
    <>
      <Navbar />
      <Landing />
      <Sponsors />
      <Faq />
      <Contact />
      <Team />
      <Footer />
    </>
  );
}
