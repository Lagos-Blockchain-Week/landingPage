import Calender from "@/components/Calender";

import HeaderNav from "@/components/HeaderNav";
import Section from "@/components/Section";
import Speakers from "@/components/Speakers";
import Sponsor from "@/components/Sponsor";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";

import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Fragment>
      <HeaderNav />
      <Section />
      <Speakers />
      <Sponsor />
      <Calender />

      <Footer />
 
    </Fragment>
  );
}
