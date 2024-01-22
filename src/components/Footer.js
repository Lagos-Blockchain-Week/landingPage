import React from "react";

function Footer() {
  return (
    <div id="footer" className="lg:px-[50px] px-6 mt-20 !text-[#131313] py-10 lg:flex justify-evenly">
      <p className="">LBW</p>

      <div className="flex flex-col">
        <p className="font-medium mb-3">Volunteers</p>

        <p className="">Content creators</p>
        <p className="">Community Managers</p>
        <p className="">Developers</p>
        <p className="">Designers</p>
        <p className="">Technical Writers</p>
      </div>

      <div className="flex flex-col">
        <p className="font-medium mb-3">Partners</p>
        <p className="">Sponsors</p>
        <p className="">Become a Sponsor</p>
        <p className="">Partner With Us</p>
        <p className="">Made in Africa</p>
      </div>

      <div className="flex flex-col">
        <p className="font-medium mb-3">Team</p>
        <p className="">Ethereum Nigeria</p>
        <p className="">Meet Our Dev Team</p>
      </div>

      <div className="flex flex-col">
        <p className="font-medium mb-3">Resources</p>
        <p className="">About</p>
        <p className="">Blog</p>
        <p className="">Contact Us</p>
        <p className="">Support</p>
      </div>
    </div>
  );
}

export default Footer;
