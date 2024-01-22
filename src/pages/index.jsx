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
import Patners from "@/components/Patners";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <title>Lagos BlockChain Week</title>
      <HeaderNav />
      <Section />

      <div className=" lg:mx-[50px] mx-4 mt-[100px] flex flex-col">
        <h3 className="font-bold text-[30px]">Join us at</h3>
        <img src="./images/join-us.png" className="rounded-md mt-4" alt="" />
      </div>
      <ProgramTrack />
      {/* <Speakers /> */}
      <div className="mt-[100px] relative">
        <img src="./images/join.png" className="rounded-md mt-4" alt="" />
        <div className="flex justify-between absolute lg:top-40 top-10 my-auto lg:left-20 left-5 lg:right-20 right-5">
          <p className="text-white font-bold my-auto text-sm lg:text-5xl">Join us from May 2nd - 11th, 2024, at <br /> The Raddison Blue Hotel, Lagos.</p>
          <img className="lg:w-32 w-14" src="./images/circular-button.png" alt="" />
        </div>
      </div>

      <EventSchedule />
      <Patners />
      <Sponsor />
      <Footer />
    </Fragment>
  );
}
