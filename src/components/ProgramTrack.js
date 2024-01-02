import React from 'react'

function ProgramTrack() {
  return (
    <div className=" lg:mx-[50px] mx-4 mt-[100px] flex flex-col">
        <p className='text-[30px] font-bold self-center'>2024 Program Tracks</p>

        {/* 1 */}
        <div className="flex justify-center flex-wrap gap-y-[60px]  md:gap-x-[60px] md:grid-cols-3 mt-6">
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

          <div className="box flex flex-col p-8 gap-y-6  col-span-1 border-solid border-2 rounded border-blue px-4 bg-gradient-to-br from-opacity-50 via-opacity-25 to-opacity-15">
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

          <div className="box flex flex-col p-8 gap-y-6 col-span-2 border-solid border-2 rounded border-blue px-4">
            <p>Enterprise Blockchain</p>
            <img src="./images/line.png" />
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon9.png" />{" "}
              <p className="pl-3">Africa Regulations</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon10.png" />{" "}
              <p className="pl-3">Regulatory Trends</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon11.png" />{" "}
              <p className="pl-3">CBDCs</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon12.png" />{" "}
              <p className="pl-3">AML (Anti Money Laundering)</p>{" "}
            </div>
          </div>

          <div className="mt-[60px] md:mt-[0] box flex flex-col p-8 gap-y-6 col-span-2 border-solid border-2 rounded border-blue px-4 bg-gradient-to-br from-opacity-50 via-opacity-25 to-opacity-15">
            <p>Corporate Web3</p>
            <img src="./images/line.png" />
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon13.png" />{" "}
              <p className="pl-3">Web3 & Luxury</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon14.png" />{" "}
              <p className="pl-3">Brands in Web3</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon15.png" />{" "}
              <p className="pl-3">Creators Economy</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon16.png" />{" "}
              <p className="pl-3">NFT Gaming & Metaverse</p>{" "}
            </div>
          </div>

          {/* <div className="mt-[60px] md:mt-[0] box flex flex-col p-8 gap-y-6 col-span-2 border-solid border-2 rounded border-blue px-4 bg-gradient-to-br from-opacity-50 via-opacity-25 to-opacity-15">
            <p>Corporate Web3</p>
            <img src="./images/line.png" />
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon13.png" />{" "}
              <p className="pl-3">Web3 & Luxury</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon14.png" />{" "}
              <p className="pl-3">Brands in Web3</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon15.png" />{" "}
              <p className="pl-3">Creators Economy</p>{" "}
            </div>
            <div className="flex items-center">
              {" "}
              <img src="./images/programs icons/icon16.png" />{" "}
              <p className="pl-3">NFT Gaming & Metaverse</p>{" "}
            </div>
          </div> */}
        </div>


  
      </div>
  )
}

export default ProgramTrack