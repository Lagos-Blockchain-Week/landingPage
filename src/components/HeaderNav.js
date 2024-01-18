
import { Link } from "react-scroll/modules"
import React from "react";



function HeaderNav() {


  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";

  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0%";

  };

  return (
    <header className="mt-[40px] flex justify-center   bg-black text-white">

      {/* items-center justify-between edit this */}
      <div className="lg:py-2 py-4 px-4 flex items-center justify-between w-[85%]  border-solid rounded-2xl border-white border-[1px]">
        <p className="mr-[64px] cursor-pointer">Blockchain Week</p>
        <div className="lg:flex hidden items-center gap-x-8 text-sm">
          <Link to="schedule" smooth={true} duration={500}>
            <p className="cursor-pointer">Home</p>
          </Link>
          {/* 
           <Link to="schedule" smooth={true} duration={500}>
            <p className="cursor-pointer">Program</p>
          </Link>
          <Link to="schedule" smooth={true} duration={500}>
            <p className="cursor-pointer">Event</p>
          </Link>
          */}

         
          <Link to="schedule" smooth={true} duration={500}>
            <p className="cursor-pointer">Schedule</p>
          </Link>
          <Link to="speaker" smooth={true} duration={500}>
            <p className="cursor-pointer">Speaker</p>
          </Link>
           {/* 
              <Link to="sponsor" smooth={true} duration={500}>
            <p className="cursor-pointer">Sponsors</p>
          </Link>
          */}

      
          <a href="https://bit.ly/Hack-LBW-2024" target="_blank">
            <p className="my-5 text-sm cursor-pointer">Hackathon</p>
          </a>
          <a href="https://bit.ly/LBW-BECOMEASPONSOR" target="_blank" className="cursor-pointer ml-[64px] py-3 px-12 text-[#000000] text-xl font-bold  bg-white rounded">Sponsor Us</a>
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
            <Link to="schedule" smooth={true} duration={500}>
              <p className="my-5 text-base cursor-pointer">Schedule</p>
            </Link>

            <Link to="speaker" smooth={true} duration={500}>
              <p className="my-5 text-base cursor-pointer">Speaker</p>
            </Link>

          

            {/* 
            <Link to="sponsor" smooth={true} duration={500}>
              <p className="my-5 text-base cursor-pointer">Sponsors</p>
            </Link>
          */}

            <a href="https://bit.ly/Hack-LBW-2024" target="_blank">
              <p className="my-5 text-base cursor-pointer">Hackathon</p>
            </a>

            <a href="https://bit.ly/LBW-BECOMEASPONSOR" target="_blank">
              <p className="cursor-pointer w-[205px] py-5 px-12 text-[#000000] text-xl font-bold  bg-white rounded">Sponsor Us</p>

            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderNav;
