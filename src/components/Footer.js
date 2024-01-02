import React from "react";

function Footer() {
  return (
    <div className="lg:mx-[50px] mx-4 my-[100px] flex flex-col items-center lg:items-start  lg:grid md:grid-rows-1 lg:grid-cols-5 gap-[40px]">
      <p className="">BlockChain Week</p>
       <div className="flex flex-col">
        {/*<p className="text-white">For Talents</p>
        <p className="text-[#645D5D]">Global Invoicing</p>
        <p className="text-[#645D5D]">Tax Assistance</p>
        <p className="text-[#645D5D]">Banking</p>
        <p className="text-[#645D5D]">Virtual Accounts</p> */}
      </div>

      <div className="flex flex-col">
        {/* <p className="text-white">Tools</p>
        <p className="text-[#645D5D]">Invoice Generator</p>
        <p className="text-[#645D5D]">Resume Builder</p>
        <p className="text-[#645D5D]">NDAs</p> */}
        <p className="text-[#645D5D]">Services</p>
      </div>

      <div className="flex flex-col">
        <p className="text-white">Resources</p>
        {/* <p className="text-[#645D5D]">Pricing</p> */}
        <p className="text-[#645D5D]">About </p>
        <p className="text-[#645D5D]">Blog</p>
        <p className="text-[#645D5D]">Support</p>
        <p className="text-[#645D5D]">Contact Us</p>
        <p className="text-[#645D5D]">Career</p>
        {/* <p className="text-[#645D5D]">Press Kit Available</p> */}
      </div>

      <div className="flex flex-col">
        <p className="text-white">Collaborate</p>
        {/* <p className="text-[#645D5D]">Partners Program</p> */}
        <p className="text-[#645D5D]">Partners</p>
        {/* <p className="text-[#645D5D]">Affliates</p>
        <p className="text-[#645D5D]">HR Partner</p> */}
        <p className="text-[#645D5D]">Community</p>
      </div>
    </div>
  );
}

export default Footer;
