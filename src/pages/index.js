import HeaderNav from '@/components/HeaderNav'
import Section from '@/components/Section';
import Speakers from '@/components/Speakers';
import { Inter } from 'next/font/google'

import { Fragment } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <Fragment>
    <HeaderNav/>
    <Section/>
    <Speakers/>
   </Fragment>
  )
}
