import HeaderNav from '@/components/HeaderNav'
import Section from '@/components/Section';
import { Inter } from 'next/font/google'

import { Fragment } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <Fragment>
    <HeaderNav/>
    <Section/>
   </Fragment>
  )
}
