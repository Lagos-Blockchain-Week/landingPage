import React from "react";

function Calender() {
  return (
    <div className="lg:px-[50px] px-4 mt-[100px] text-white linear p-12 gap-6">
      <div className=" flex flex-col justify-between lg:mx-20 gap-y-12 items-center lg:grid lg:grid-rows-1 lg:grid-cols-2">
        <div className="flex flex-col w-[90%] justify-between gap-y-6 ">
          <div>
            <p className=" text-2xl">Don’t miss out!</p>
            <p className="mt-3 text-sm">The blockchain week is  a ground breaking event that brings together industry pioneers, innovators, and enthusiasts to discuss and explore the immense potential of blockchain technology.</p>
          </div >
          <div className="flex">
            <img className="mr-3 w-8 h-8" src="./images/img1.png" alt="" />
            <p className="my-auto">Creators Economy</p>
          </div>
          <div className="flex pl-6">
            <img className="mr-3 w-8 h-8" src="./images/img2.png" alt="" />
            <p className="my-auto">Africa Regulations</p>
          </div>
          <div className="flex pl-12">
            <img className="mr-3 w-8 h-8" src="./images/img3.png" alt="" />
            <p className="my-auto">Decentralized Finance</p>
          </div>
        </div>
        < img className="" src="./images/section background.png" />
      </div >
      <div >
        <p className="py-3 px-12 text-[#000000] font-medium bg-white rounded text-center w-[250px] md:w-[300px] mx-auto self-center mt-[88px]">
          Add To Calender
        </p>
      </div>

    </div>
  );
}

export default Calender;
