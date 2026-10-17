import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import QuoteBanner from "@/components/sections/QuoteBanner";
import Expertise from "@/components/sections/Expertise";
import HowWeWork from "@/components/sections/HowWeWork";
import Honoring from "@/components/sections/Honoring";
import Specialties from "@/components/sections/Specialties";
import OurOffice from "@/components/sections/OurOffice";
import Faq from "@/components/sections/Faq";
import Schedule from "@/components/sections/Schedule";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <WhoWeHelp />
      <QuoteBanner />
      <Expertise />
      <HowWeWork />
      <Honoring />
      <Specialties />
      <OurOffice />
      <Schedule />
      <Faq />
    </>
  );
}
