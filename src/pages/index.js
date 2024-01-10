import Calender from "@/components/Calender";

import HeaderNav from "@/components/HeaderNav";
import Section from "@/components/Section";
import Speakers from "@/components/Speakers";
import Sponsor from "@/components/Sponsor";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

import { Fragment } from "react";
import ProgramTrack from "@/components/ProgramTrack";
import EventSchedule from "@/components/EventSchedule";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <title>Lagos BlockChain Week</title>
      <HeaderNav />
      <Section />
      <ProgramTrack />
      <Speakers />
      
      <EventSchedule />
      <Sponsor />
      <Calender />
      <Footer />
    </Fragment>
  );
}
