
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
    <div id="hero" className="pt-10">
      <header className=" flex justify-center w-full bg-transparent text-white">
        {/* items-center justify-between edit this */}
        <div className="lg:py-2 py-4 px-4 flex items-center justify-between lg:w-[70%] w-[89%]  border-solid rounded-2xl border-white border-[1px]">
          <p className="mr-[64px] cursor-pointer font-bold">#LBW2024</p>
          <div className="lg:flex hidden items-center gap-x-8 text-sm">
            <a href="https://bit.ly/Hack-LBW-2024" target="_blank">
              <p className="my-5 text-sm cursor-pointer">Hackathon</p>
            </a>
            <Link to="schedule" smooth={true} duration={500}>
              <p className="cursor-pointer">Schedule</p>
            </Link>
            <Link to="speaker" smooth={true} duration={500}>
              <p className="cursor-pointer">Speaker</p>
            </Link>
            <Link to="speaker" smooth={true} duration={500}>
              <p className="cursor-pointer">Partners</p>
            </Link>
            <Link to="speaker" smooth={true} duration={500}>
              <p className="cursor-pointer">Pitch</p>
            </Link>
            <a href="https://bit.ly/LBW-BECOMEASPONSOR" target="_blank" className="cursor-pointer ml-[64px] py-3 px-12 text-[#000000] text-lg font-bold  bg-white rounded">Sponsor Us</a>
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

              <a href="https://bit.ly/Hack-LBW-2024" target="_blank">
                <p className="my-5 text-base cursor-pointer">Hackathon</p>
              </a>
              <Link to="schedule" smooth={true} duration={500}>
                <p className="my-5 text-base cursor-pointer">Schedule</p>
              </Link>

              <Link to="speaker" smooth={true} duration={500}>
                <p className="my-5 text-base cursor-pointer">Speaker</p>
              </Link>

              <Link to="speaker" smooth={true} duration={500}>
                <p className="my-5 text-base cursor-pointer">Partners</p>
              </Link>
              <Link to="speaker" smooth={true} duration={500}>
                <p className="my-5 text-base cursor-pointer">Start-up</p>
              </Link>


              <a href="https://bit.ly/LBW-BECOMEASPONSOR" target="_blank">
                <p className="cursor-pointer  text-center py-5 px-12 text-[#000000] text-xl font-bold  bg-white rounded">Sponsor Us</p>

              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderNav;
