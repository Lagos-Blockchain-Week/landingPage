import Calender from "@/components/Calender";

import HeaderNav from "@/components/HeaderNav";
import Section from "@/components/Section";
import Sponsor from "@/components/Sponsor";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

import { Fragment } from "react";
import ProgramTrack from "@/components/ProgramTrack";
import EventSchedule from "@/components/EventSchedule";
import Partners from "@/components/Partners";
import Join from "@/components/Join";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <title>Lagos BlockChain Week</title>
      <HeaderNav />
      <Section />

      {/* <div className=" lg:mx-[50px] mx-4 mt-[100px] flex flex-col">
        <h3 className="font-bold text-[30px]">Join us at</h3>
        <img src="./images/join-us.png" className="rounded-md mt-4" alt="" />
      </div>  */}
      <ProgramTrack />
      {/* <Speakers /> */}
      <Join />

      {/* <EventSchedule /> */}
      {/* <Patners />
      <Sponsor /> */}
      <Footer />
    </Fragment>
  );
}
