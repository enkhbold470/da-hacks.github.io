import Landing from "../components/landing";
import Faq from "../components/faq";
import Socials from "../components/contact";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import SubscribeNewsletter from "../components/SubscribeNewsletter";
import InfiniteScrollTeamMembers from "../components/infiniteScrollTeamMembers";
import Email from "../components/email";
import OurTeam from "../components/ourTeam";
export default function Page() {
  return (
    <>
      {/* <OurTeam /> */}
      <Landing />
      <Sponsors />
      <Faq />
      <Email />
      <InfiniteScrollTeamMembers />
      <Socials />
      <Footer />
      <SubscribeNewsletter />
    </>
  );
}
