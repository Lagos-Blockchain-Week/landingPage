
import { Link as Scroll } from "react-scroll/modules"
import React from "react";
import Link from 'next/link'
import { useRouter } from "next/router";



function HeaderNav() {
  const router = useRouter()

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";

  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0%";

  };

  return (
    <div id={router.pathname === '/' ? "hero" : null} className="pt-10">
      <header className=" flex justify-center w-full bg-transparent text-white">
        {/* items-center justify-between edit this */}
        <div className="lg:py-2 py-4 px-4 flex items-center justify-between lg:w-[70%] w-[89%]  border-solid rounded-2xl border-white border-[1px]">

          <Link href={"/"}>
            <p className="mr-[64px] cursor-pointer font-bold hover:underline">#LBW2024</p>
          </Link>
          <div className="lg:flex hidden items-center gap-x-8 text-sm">
{/*             <Link href={"/hackathon"}>
              <p className="my-5 text-sm cursor-pointer">Hackathon</p>
            </Link> */}
            <Link href={"/hackathon"}>
            <p className="my-5 text-sm cursor-pointer hover:underline">Hackathon</p> 
            </Link>
            <Link href={"/schedule"}>
              <p className="cursor-pointer hover:underline">Schedule</p>
            </Link>
            <Link href={"/speakers"}>
              <p className="cursor-pointer hover:underline">Speaker</p>
            </Link>
            {/* <Scroll to="speaker" smooth={true} duration={500}>
              <p className="cursor-pointer">Partners</p>
            </Scroll> */}
            {/* <Scroll to="speaker" smooth={true} duration={500}> */}
              <a href="https://forms.gle/PzhS6GDZzPP2ZH3f8" target="_blank"><p className="cursor-pointer hover:underline">Pitch</p></a>
            
            <a href="https://lu.ma/icnl3ym9" target="_blank" className="cursor-pointer ml-[64px] py-3 px-12 text-[#000000] text-sm  bg-white rounded">Register For Event</a>
          </div>
          <img
            onClick={() => openNav()}
            src="./images/icons/icons8-hamburger.svg"
            className="bg-white w-6  cursor-pointer lg:hidden block my-auto"
            alt=""
          />

          <div id="mySidenav" className="sidenav">
            <div className="w-[90%] mx-auto">
              <p
                onClick={() => closeNav()}
                className="float-right text-4xl cursor-pointer"
              >
                &times;
              </p>
              <div className="pt-20"></div>

              <Link href={"/hackathon"}>
                <p className="my-5 text-base cursor-pointer">Hackathon</p>
              </Link>
              <Link href={"/schedule"}>
                <p className="my-5 text-base cursor-pointer">Schedule</p>
              </Link>

              <Link href={"/speakers"}>
                <p className="my-5 text-base cursor-pointer">Speaker</p>
              </Link>

              <Scroll to="speaker" smooth={true} duration={500}>
                <p className="my-5 text-base cursor-pointer">Pitch</p>
              </Scroll>

              <a href="https://lu.ma/icnl3ym9" target="_blank">
                <p className="cursor-pointer  text-center py-5 px-12 text-[#000000] text-xl font-bold  bg-white rounded">Register For Event</p>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderNav;
