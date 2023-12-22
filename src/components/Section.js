import React from "react";
import { Fragment } from "react";

function Section() {
  return (
    <Fragment>
      <section className=" lg:mx-[50px] mx-4 flex flex-col gap-y-3 py-16">
        <p className="font-bold text-[80px]">Lagos</p>
        <p className="font-bold text-[80px]">Blockchain Week</p>
        <p className="font-bold text-[30px]">4-10 April, 2024</p>
        <p>5 Days of learning, building and having fun</p>
        <p>The Zone park, Gbagada</p>
        <p className="py-5 px-12 text-black text-xl font-bold  bg-white rounded w-[300px]">
          Add to calender
        </p>
      </section>

      <div className=" lg:mx-[50px] mx-4 ">
        <p className="text-[20px]">Happening Live at</p>
        <div className="flex flex-col md:grid md:grid-rows-2 gap-y-0  md:grid-cols-8 border-solid  border-white rounded border-2">
            <div className="col-span-5 flex flex-col justify-center items-center p-3"><p className=" text-[60px] font-bold">The Zone Tech,</p>
            <p className=" text-[60px] font-bold">Gbagada Lagos</p></div>
            
            <img className="col-span-3 h-full" src="./images/image1.png"/>
            <img className="col-span-8 h-full" src="./images/image2.png"/>

        </div>
        
      </div>
    </Fragment>
  );
}

export default Section;
