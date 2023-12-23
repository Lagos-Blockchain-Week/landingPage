import React from "react";
import { Fragment } from "react";

function Section() {
  return (
    <Fragment>
        {/* section1 */}
      <section className=" lg:mx-[50px] mx-4 flex flex-col gap-y-3 py-16">
        <p className="font-bold text-[80px]">Lagos</p>
        <p className="font-bold text-[80px]">Blockchain Week</p>
        <p className="font-bold text-[30px]">4-10 April, 2024</p>
        <p>5 Days of learning, building and having fun</p>
        <p>The Zone park, Gbagada</p>
        <p className="py-5 px-12 text-[#000000] text-xl font-bold  bg-white rounded w-[300px]">
          Add to calender
        </p>
      </section>

{/* section 2 */}
      <div className=" lg:mx-[50px] mx-4 ">
        <p className="text-[20px]">Happening Live at</p>
        <div className="flex flex-col md:grid md:grid-rows-2 gap-y-0  md:grid-cols-8 border-solid  border-blue rounded border-2 mt-6">
          <div className="col-span-5 flex flex-col justify-center items-center p-3">
            <p className=" text-[60px] font-bold">The Zone Tech,</p>
            <p className=" text-[60px] font-bold">Gbagada Lagos</p>
          </div>

          <img className="col-span-3 h-full" src="./images/image1.png" />
          <img className="col-span-8 h-full" src="./images/image2.png" />
        </div>
      </div>


{/* section 3 */}
      <div className=" lg:mx-[50px] mx-4 mt-[100px]">
        <p>2024 Program Tracks</p>

        {/* 1 */}
        <div className= "flex justify-center flex-wrap gap-y-[60px] md:grid md:grid-rows-1 md:gap-x-[60px] md:grid-cols-3 mt-6">
          <div className="box flex flex-col p-8 gap-y-6 col-span-1 border-solid border-2 rounded border-blue px-4">
            <p>Finance</p>
            <img src="./images/line.png" />
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon1.png" />{" "}
              <p className="pl-3">Custody</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon2.png" />{" "}
              <p className="pl-3">Decentrilized Finance</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon3.png" />{" "}
              <p className="pl-3">Macro Trends & Investments</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon4.png" />{" "}
              <p className="pl-3">Mass Adoption</p>{" "}
            </div>
          </div>

          <div className="box flex flex-col p-8 gap-y-6  col-span-1 border-solid border-2 rounded border-blue px-4 bg-gradient-to-br from-opacity-50 via-opacity-25 to-opacity-15" >
            <p>Tech</p>
            <img src="./images/line.png" />
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon5.png" />{" "}
              <p className="pl-3">Artificial Intelligence</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon6.png" />{" "}
              <p className="pl-3">Scalability</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon7.png" />{" "}
              <p className="pl-3">Interoperability</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon8.png" />{" "}
              <p className="pl-3">Data Management</p>{" "}
            </div>
          </div>
          
        </div>

{/*   2 */}

<div className="flex justify-center flex-wrap gap-y-[60px] md:grid md:grid-rows-1 md:gap-x-[60px] md:grid-cols-6 mt-[60px]">
    <div></div>
          <div className="box flex flex-col p-8 gap-y-6 col-span-2 border-solid border-2 rounded border-blue px-4">
            <p>Finance</p>
            <img src="./images/line.png" />
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon1.png" />{" "}
              <p className="pl-3">Custody</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon2.png" />{" "}
              <p className="pl-3">Decentrilized Finance</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon3.png" />{" "}
              <p className="pl-3">Macro Trends & Investments</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon4.png" />{" "}
              <p className="pl-3">Mass Adoption</p>{" "}
            </div>
          </div>
          
          <div className="box flex flex-col p-8 gap-y-6 col-span-2 border-solid border-2 rounded border-blue px-4 bg-gradient-to-br from-opacity-50 via-opacity-25 to-opacity-15" >
            <p>Tech</p>
            <img src="./images/line.png" />
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon5.png" />{" "}
              <p className="pl-3">Artificial Intelligence</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon6.png" />{" "}
              <p className="pl-3">Scalability</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon7.png" />{" "}
              <p className="pl-3">Interoperability</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon8.png" />{" "}
              <p className="pl-3">Data Management</p>{" "}
            </div>
          </div>

          <div></div>
          
        </div>
      </div>
    </Fragment>
  );
}

export default Section;
