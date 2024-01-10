import React from "react";

function Sponsor() {

  return (
    <div id="sponsor" className="lg:mx-[50px] p-8 mx-4 mt-[100px] text-white flex flex-col justify-center items-center">
      <p className="text-[30px] font-bold self-center">Our 2024 Sponsors</p>
      <p className="mt-3">Want to sponsor our program?</p>
      
      <div className=" mt-6 flex gap-12 md:gap-32 justify-center items-center flex-col md:grid md:grid-cols-3 md:grid-row-1">

        <div className="flex flex-col items-center justify-between  h-[160px]">
          <img className="mt-8 w-20" src="./images/sponsors icon/sponsor1.png" />
          <p>FIL Lagos</p>
        </div>

        <div className="flex flex-col items-center justify-between  h-[160px]">
          <img className="mt-8 w-14" src="./images/sponsors icon/sponsor2.png" />
          <p>Ethereum Foundation</p>
        </div>

        <div className="flex flex-col items-center justify-between  h-[160px]">
          <img className="mt-8 w-20" src="./images/sponsors icon/sponsor3.png" />
          <p>Soar On Technologies</p>
        </div>

      </div>

      <a href="https://bit.ly/LBW-BECOMEASPONSOR" target="_blank" className="cursor-pointer py-3 px-12 text-[#000000] font-medium  bg-white rounded text-center w-[250px] md:w-[300px] self-center mt-[88px]">
        Become a Sponsor
      </a>
    </div>
  );
}

export default Sponsor;
