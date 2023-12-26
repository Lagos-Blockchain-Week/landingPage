
import Link from "next/link";
import React, { useState, useEffect } from "react";

function HeaderNav() {
  const [open, setOpen] = useState(false);

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
    setOpen(true);
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0%";
    setOpen(false);
  };

  return (
    <header className="mt-[40px] flex justify-center   bg-black text-white">
  
  {/* items-center justify-between edit this */}
      <div className="p-5 flex items-center justify-between w-[80%]  border-solid rounded border-white border-[1px]">
      <p className="mr-[64px]">Blockchain Week</p>
      <div className="lg:flex hidden items-center gap-x-10">
      <p>Schedule</p>
      <p>Speaker</p>
      <p>Sponsors</p>
      <p>Volunteer</p>
      <p className="ml-[64px] py-5 px-12 text-[#000000] text-xl font-bold  bg-white rounded">Sponsor Us</p>
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
            <Link href={""}>
              <p className="my-5 text-base">Schedule</p>
            </Link>

            <Link href={""}>
              <p className="my-5 text-base">Speaker</p>
            </Link>

            <Link href={"/events"}>
              <p className="my-5 text-base">Sponsors</p>
            </Link>

            <Link href={"/about_us"}>
              <p className="my-5 text-base">Volunteer</p>
            </Link>

            <Link href={"/blog"}>
            <p className="w-[205px] py-5 px-12 text-[#000000] text-xl font-bold  bg-white rounded">Sponsor Us</p>
     
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderNav;
