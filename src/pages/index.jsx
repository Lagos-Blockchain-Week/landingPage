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

      <div className=" lg:mx-[50px] mx-4 mt-[100px] text-white flex flex-col">
        <p className="text-white text-[30px]">Join us at</p>
        <img src="/images/location.png" className="rounded-md mt-4" alt="" />
      </div>
      <ProgramTrack />
      {/* <Speakers /> */}

      <EventSchedule />
      <Sponsor />
      <Calender />
      <Footer />
    </Fragment>
  );
}
