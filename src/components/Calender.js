import React from "react";

function Calender() {
  return (
    <div className="lg:mx-[50px] mx-4 mt-[100px] flex flex-col   p-12 gap-6">
<div className=" flex flex-col gap-y-12 items-center lg:grid lg:grid-rows-1 lg:grid-cols-2">
<div className="flex flex-col justify-between px-4 md:px-10 gap-y-6 ">
    <div>
     <p className="font-bold text-xl">Don’t miss out!</p>
    <p className="mt-3">The blockchain week is  a ground breaking event that brings together industry pioneers, innovators, and enthusiasts to discuss and explore the immense potential of blockchain technology.</p>
    </div >
        <p>Creators Economy</p>
        <p className="pl-6">European Regulations</p>
        <p className="pl-12">Decentralized Finance</p>
   
</div>
< img className= " h-[300px] w-[400px]" src="./images/section background.png"/>
</div >
      <p className="py-5 px-12 text-[#000000] text-xl font-bold  bg-white rounded text-center w-[250px] md:w-[300px] self-center mt-[88px]">
        Add To Calender
      </p>
      
    </div>
  );
}

export default Calender;
