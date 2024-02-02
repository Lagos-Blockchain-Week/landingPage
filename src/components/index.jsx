import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const SchedulePage = () => {
  return (
    <>
      <div className="bg-gray-800_01 flex flex-col font-redhatdisplay items-center justify-start mx-auto w-full">
        <div className="bg-blue_gray-900 h-[600px] md:px-5 relative w-full">
          <Img
            className="h-[600px] m-auto object-cover w-full"
            src="images/img_image28.png"
            alt="imageTwentyEight"
          />
          <div className="absolute h-[600px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[600px] m-auto object-cover w-full"
              src="images/img_rectangle_600x1440.png"
              alt="rectangle"
            />
            <div className="absolute flex flex-col gap-[21px] inset-x-[0] justify-start mx-auto top-[7%] w-[89%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[76%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px]"
                  size="txtRedHatDisplayRomanMedium24"
                >
                  LBW
                </Text>
                <div className="bg-gray-900_66 border border-solid border-yellow-50_01 flex flex-col items-center justify-start p-5 rounded-[16px] w-auto md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 gap-16 items-center justify-start w-auto">
                    <div className="flex flex-row font-prompt gap-6 items-start justify-start w-auto">
                      <Text
                        className="text-base text-yellow-50_01 tracking-[-0.32px] w-auto"
                        size="txtPromptRegular16"
                      >
                        Hackathon
                      </Text>
                      <Text
                        className="text-base text-yellow-50_01 tracking-[-0.32px] w-auto"
                        size="txtPromptBold16"
                      >
                        Schedule
                      </Text>
                      <Text
                        className="text-base text-yellow-50_01 tracking-[-0.32px] w-auto"
                        size="txtPromptRegular16"
                      >
                        Speakers
                      </Text>
                      <Text
                        className="text-base text-yellow-50_01 tracking-[-0.32px] w-auto"
                        size="txtPromptRegular16"
                      >
                        Pitch
                      </Text>
                    </div>
                    <Button className="cursor-pointer font-redhatdisplay font-semibold min-w-[225px] text-base text-center tracking-[-0.32px]">
                      Register For Event
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-prompt gap-3 items-start justify-end md:ml-[0] ml-[279px] w-[79%] md:w-full">
                <div className="flex flex-col gap-8 items-center justify-start md:mt-0 mt-[174px] w-auto md:w-full">
                  <Text
                    className="leading-[120.00%] max-w-[802px] md:max-w-full text-2xl md:text-[22px] text-center sm:text-xl text-yellow-50_01 tracking-[-0.48px]"
                    size="txtPromptRegular24"
                  >
                    Held in the picturesque city of Lagos, LBW is a week-long
                    blockchainextravaganza, made up of exhibitions, keynotes,
                    workshops, networking events,and more. See the full schedule
                    below.
                  </Text>
                  <div className="flex md:flex-col flex-row font-redhatdisplay gap-8 items-start justify-start w-auto md:w-full">
                    <Input
                      name="frame1321316807"
                      placeholder="Register for Hackathon"
                      className="font-medium md:text-[22px] p-0 placeholder:text-gray-900 sm:text-xl text-2xl text-left tracking-[-0.48px] w-full"
                      wrapClassName="flex rounded-lg w-[345px] md:w-full"
                      suffix={
                        <Img
                          className="mt-auto mb-0.5 h-8 ml-6"
                          src="images/img_icon_arrowright_gray_900.svg"
                          alt="icon / arrow-right"
                        />
                      }
                      size="sm"
                    ></Input>
                    <div className="border-b-8 border-l border-r-4 border-solid border-t border-yellow-50_01 flex flex-row gap-6 items-center justify-center md:px-10 px-12 sm:px-5 py-6 rounded-lg shadow-bs w-[345px]">
                      <Text
                        className="text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px] w-auto"
                        size="txtRedHatDisplayRomanMedium24"
                      >
                        Partner With Us
                      </Text>
                      <Img
                        className="h-8 w-8"
                        src="images/img_iconarrowright_yellow_50_01.svg"
                        alt="iconarrowright_One"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-[182px] md:h-[74px] px-1.5 relative rotate-[-90deg] w-[182px]">
                  <div className="absolute flex flex-col gap-[22px] items-center justify-start left-[3%] top-[11%] w-[23%]">
                    <div className="md:h-7 h-[71px] relative w-full">
                      <div className="absolute bottom-[0] md:h-7 h-[52px] left-[0] w-[61%]">
                        <Text
                          className="absolute bottom-[0] left-[0] rotate-[171deg] text-[18.07px] text-center text-yellow-50_01"
                          size="txtPromptMedium1807"
                        >
                          R
                        </Text>
                        <Text
                          className="absolute right-[0] rotate-[152deg] text-[18.07px] text-center text-yellow-50_01 top-[0]"
                          size="txtPromptMedium1807"
                        >
                          E
                        </Text>
                      </div>
                      <Text
                        className="absolute right-[0] rotate-[133deg] text-[18.07px] text-center text-yellow-50_01 top-[0]"
                        size="txtPromptMedium1807"
                      >
                        G
                      </Text>
                    </div>
                    <Text
                      className="rotate-[-152deg] text-[18.07px] text-center text-yellow-50_01"
                      size="txtPromptMedium1807"
                    >
                      T
                    </Text>
                  </div>
                  <div className="absolute flex flex-row items-start justify-center right-[11%] top-[0] w-[58%]">
                    <Text
                      className="mb-[23px] mt-1.5 rotate-[114deg] text-[18.07px] text-center text-yellow-50_01"
                      size="txtPromptMedium1807"
                    >
                      I
                    </Text>
                    <Text
                      className="mb-[29px] ml-[13px] rotate-[95deg] text-[18.07px] text-center text-yellow-50_01"
                      size="txtPromptMedium1807"
                    >
                      S
                    </Text>
                    <Text
                      className="mb-[27px] ml-2.5 mt-0.5 rotate-[76deg] text-[18.07px] text-center text-yellow-50_01"
                      size="txtPromptMedium1807"
                    >
                      T
                    </Text>
                    <Text
                      className="mb-[17px] ml-1.5 mt-3 rotate-[57deg] text-[18.07px] text-center text-yellow-50_01"
                      size="txtPromptMedium1807"
                    >
                      E
                    </Text>
                    <Text
                      className="mt-[29px] rotate-[38deg] text-[18.07px] text-center text-yellow-50_01"
                      size="txtPromptMedium1807"
                    >
                      R
                    </Text>
                  </div>
                  <div className="absolute bottom-[16%] md:h-7 h-[75px] right-[3%] w-[19%]">
                    <div className="absolute md:h-7 h-[53px] right-[0] top-[0] w-[64%]">
                      <Text
                        className="absolute right-[0] text-[18.07px] text-center text-yellow-50_01 top-[0]"
                        size="txtPromptMedium1807"
                      >
                        F
                      </Text>
                      <Text
                        className="absolute bottom-[0] left-[0] rotate-[-19deg] text-[18.07px] text-center text-yellow-50_01"
                        size="txtPromptMedium1807"
                      >
                        O
                      </Text>
                    </div>
                    <Text
                      className="absolute bottom-[0] left-[0] rotate-[-38deg] text-[18.07px] text-center text-yellow-50_01"
                      size="txtPromptMedium1807"
                    >
                      R
                    </Text>
                  </div>
                  <div className="absolute bottom-[0] flex flex-row items-start justify-center left-[15%] w-[48%]">
                    <Text
                      className="rotate-[-133deg] text-[18.07px] text-center text-yellow-50_01"
                      size="txtPromptMedium1807"
                    >
                      N
                    </Text>
                    <Text
                      className="mb-1.5 ml-1 mt-2.5 rotate-[-114deg] text-[18.07px] text-center text-yellow-50_01"
                      size="txtPromptMedium1807"
                    >
                      E
                    </Text>
                    <Text
                      className="ml-[9px] mt-4 rotate-[-95deg] text-[18.07px] text-center text-yellow-50_01"
                      size="txtPromptMedium1807"
                    >
                      V
                    </Text>
                    <Text
                      className="ml-2.5 mt-3.5 rotate-[-76deg] text-[18.07px] text-center text-yellow-50_01"
                      size="txtPromptMedium1807"
                    >
                      E
                    </Text>
                  </div>
                  <Img
                    className="absolute h-6 inset-[0] justify-center m-auto w-6"
                    src="images/img_iconarrowright.svg"
                    alt="iconarrowright_Two"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-prompt md:h-[11607px] h-[6668px] sm:h-[7093px] md:px-5 relative w-full">
          <Img
            className="h-[6668px] m-auto object-cover w-full"
            src="images/img_rectangle.png"
            alt="rectangle_One"
          />
          <div className="absolute flex flex-col md:gap-10 gap-24 h-max inset-[0] items-center justify-start m-auto w-auto">
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col items-center justify-start outline outline-[1px] outline-yellow-50_01 p-10 sm:px-5 rounded-lg w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                  <Text
                    className="border-b border-blue_gray-400 border-solid max-w-[1200px] md:max-w-full sm:pr-5 pr-[35px] py-[19px] sm:text-2xl md:text-[26px] text-[28px] text-yellow-50_01 tracking-[-0.56px] w-full"
                    size="txtPromptBold28"
                  >
                    2nd - 4th May
                  </Text>
                  <div className="flex flex-col items-center justify-start max-w-[1200px] py-6 w-full">
                    <Text
                      className="text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px] w-auto"
                      size="txtPromptMedium24"
                    >
                      Hackathon
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50_01 flex flex-row font-redhatdisplay gap-6 items-center justify-center max-w-7xl md:px-10 px-12 sm:px-5 py-6 rounded-lg w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                  size="txtRedHatDisplayRomanMedium24Gray900"
                >
                  Register for Hackathon
                </Text>
                <Img
                  className="h-8 w-8"
                  src="images/img_icon_arrowright_gray_900.svg"
                  alt="iconarrowright_Three"
                />
              </div>
            </div>
            <List
              className="flex flex-col gap-24 items-center w-full"
              orientation="vertical"
            >
              <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-center justify-start outline outline-[1px] outline-yellow-50_01 p-10 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-28 items-center justify-start max-w-[1200px] py-6 w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-yellow-50_01 tracking-[-0.56px] w-auto"
                        size="txtPromptBold28"
                      >
                        6th May
                      </Text>
                      <Line className="bg-blue_gray-400 h-[45px] md:h-px md:w-full w-px" />
                      <div className="flex md:flex-1 flex-row items-start justify-between w-[33%] md:w-full">
                        <Text
                          className="mt-0.5 sm:text-2xl md:text-[26px] text-[28px] text-yellow-50_01 tracking-[-0.56px] w-auto"
                          size="txtPromptBold28"
                        >
                          Topics
                        </Text>
                        <Img
                          className="h-[45px] w-[84px]"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close"
                        />
                      </div>
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-yellow-50_01 tracking-[-0.56px] w-auto"
                        size="txtPromptBold28"
                      >
                        Speakers
                      </Text>
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex sm:flex-col flex-row md:gap-10 gap-[113px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Text
                        className="leading-[120.00%] max-w-[190px] md:max-w-full text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px]"
                        size="txtPromptMedium24"
                      >
                        Crypto 101 Conference
                      </Text>
                      <Line className="bg-blue_gray-400 h-[45px] sm:h-px sm:w-full w-px" />
                      <Text
                        className="leading-[120.00%] max-w-[271px] md:max-w-full text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px]"
                        size="txtPromptMedium24"
                      >
                        Introduction to Bitcoin and Blockchain
                      </Text>
                      <Line className="bg-blue_gray-400 h-[45px] sm:h-px sm:w-full w-px" />
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[113px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869"
                      />
                      <Text
                        className="leading-[120.00%] max-w-[271px] md:max-w-full text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px]"
                        size="txtPromptMedium24"
                      >
                        Build your crypto portfolio
                      </Text>
                      <Line className="bg-blue_gray-400 h-[45px] md:h-px md:w-full w-px" />
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[113px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869_One"
                      />
                      <Text
                        className="leading-[120.00%] max-w-[271px] md:max-w-full text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px]"
                        size="txtPromptMedium24"
                      >
                        Wallet Setup and Security Workshop
                      </Text>
                      <Line className="bg-blue_gray-400 h-[45px] md:h-px md:w-full w-px" />
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[113px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869_Two"
                      />
                      <Text
                        className="leading-[120.00%] max-w-[271px] md:max-w-full text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px]"
                        size="txtPromptMedium24"
                      >
                        <>
                          Beginner&#39;s guide to cryptocurrencies/Understanding
                          DeFi Protocols
                        </>
                      </Text>
                      <Line className="bg-blue_gray-400 h-[45px] md:h-px md:w-full w-px" />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[113px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869_Three"
                      />
                      <Text
                        className="leading-[120.00%] max-w-[271px] md:max-w-full text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px]"
                        size="txtPromptMedium24"
                      >
                        Decoding NFTs and Digital Collectibles
                      </Text>
                      <Line className="bg-blue_gray-400 h-[45px] md:h-px md:w-full w-px" />
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50_01 flex flex-row font-redhatdisplay gap-6 items-center justify-center max-w-7xl md:px-10 px-12 sm:px-5 py-6 rounded-lg w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                    size="txtRedHatDisplayRomanMedium24Gray900"
                  >
                    Register for Event
                  </Text>
                  <Img
                    className="h-8 w-8"
                    src="images/img_icon_arrowright_gray_900.svg"
                    alt="iconarrowright"
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-center justify-start outline outline-[1px] outline-yellow-50_01 p-10 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-28 items-center justify-start max-w-[1200px] py-6 w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-yellow-50_01 tracking-[-0.56px] w-auto"
                        size="txtPromptBold28"
                      >
                        7th May
                      </Text>
                      <Line className="bg-blue_gray-400 h-[45px] md:h-px md:w-full w-px" />
                      <div className="flex md:flex-1 flex-row items-start justify-between w-[33%] md:w-full">
                        <Text
                          className="mt-0.5 sm:text-2xl md:text-[26px] text-[28px] text-yellow-50_01 tracking-[-0.56px] w-auto"
                          size="txtPromptBold28"
                        >
                          Topics
                        </Text>
                        <Img
                          className="h-[45px] w-[84px]"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close"
                        />
                      </div>
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-yellow-50_01 tracking-[-0.56px] w-auto"
                        size="txtPromptBold28"
                      >
                        Speakers
                      </Text>
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Text
                        className="leading-[120.00%] max-w-[216px] md:max-w-full text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px]"
                        size="txtPromptMedium24"
                      >
                        Creator Convergence Expo
                      </Text>
                      <Line className="bg-blue_gray-400 h-[45px] md:h-px md:w-full w-px" />
                      <div className="flex md:flex-1 flex-row gap-[86px] items-center justify-center w-[35%] md:w-full">
                        <Text
                          className="leading-[120.00%] text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px] w-[66%] sm:w-full"
                          size="txtPromptMedium24"
                        >
                          Introduction to Bitcoin and Blockchain
                        </Text>
                        <Img
                          className="h-[45px] w-[55px]"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close_One"
                        />
                      </div>
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869"
                      />
                      <div className="flex md:flex-1 flex-row gap-[86px] items-center justify-center w-[35%] md:w-full">
                        <Text
                          className="leading-[120.00%] text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px] w-[66%] sm:w-full"
                          size="txtPromptMedium24"
                        >
                          Virtual Reality (VR) Creation Workshop
                        </Text>
                        <Img
                          className="h-[45px] w-[54px]"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close_Two"
                        />
                      </div>
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869_One"
                      />
                      <Text
                        className="leading-[120.00%] max-w-[313px] md:max-w-full text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px]"
                        size="txtPromptMedium24"
                      >
                        Augmented Reality (AR) Development Workshop
                      </Text>
                      <Img
                        className="h-[45px] w-3"
                        src="images/img_close_blue_gray_400.svg"
                        alt="close_Three"
                      />
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869_Two"
                      />
                      <div className="flex md:flex-1 flex-row gap-[86px] items-center justify-center w-[35%] md:w-full">
                        <Text
                          className="leading-[120.00%] text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px] w-[67%] sm:w-full"
                          size="txtPromptMedium24"
                        >
                          Blockchain Gaming Design Lab
                        </Text>
                        <Img
                          className="h-[45px] w-[52px]"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close_Four"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869_Three"
                      />
                      <Text
                        className="leading-[120.00%] max-w-[313px] md:max-w-full text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px]"
                        size="txtPromptMedium24"
                      >
                        Digital Storytelling and Content Creation
                      </Text>
                      <Img
                        className="h-[45px] w-3"
                        src="images/img_close_blue_gray_400.svg"
                        alt="close_Five"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50_01 flex flex-row font-redhatdisplay gap-6 items-center justify-center max-w-7xl md:px-10 px-12 sm:px-5 py-6 rounded-lg w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                    size="txtRedHatDisplayRomanMedium24Gray900"
                  >
                    Register for Event
                  </Text>
                  <Img
                    className="h-8 w-8"
                    src="images/img_icon_arrowright_gray_900.svg"
                    alt="iconarrowright"
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-center justify-start outline outline-[1px] outline-yellow-50_01 p-10 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-28 items-center justify-start max-w-[1200px] py-6 w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-yellow-50_01 tracking-[-0.56px] w-auto"
                        size="txtPromptBold28"
                      >
                        8th May
                      </Text>
                      <Line className="bg-blue_gray-400 h-[45px] md:h-px md:w-full w-px" />
                      <div className="flex md:flex-1 flex-row items-start justify-between w-[33%] md:w-full">
                        <Text
                          className="mt-0.5 sm:text-2xl md:text-[26px] text-[28px] text-yellow-50_01 tracking-[-0.56px] w-auto"
                          size="txtPromptBold28"
                        >
                          Topics
                        </Text>
                        <Img
                          className="h-[45px] w-[84px]"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close"
                        />
                      </div>
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-yellow-50_01 tracking-[-0.56px] w-auto"
                        size="txtPromptBold28"
                      >
                        Speakers
                      </Text>
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Text
                        className="leading-[120.00%] max-w-[216px] md:max-w-full text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px]"
                        size="txtPromptMedium24"
                      >
                        Innovation Across Borders(Pitch/VC Fund Day) 
                      </Text>
                      <Line className="bg-blue_gray-400 h-[45px] md:h-px md:w-full w-px" />
                      <div className="flex md:flex-1 flex-row gap-[86px] items-center justify-center w-[35%] md:w-full">
                        <Text
                          className="leading-[120.00%] text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px] w-[73%] sm:w-full"
                          size="txtPromptMedium24"
                        >
                          Creative Entrepreneurship Workshop
                        </Text>
                        <Img
                          className="h-[45px] w-[27px]"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close_One"
                        />
                      </div>
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869"
                      />
                      <div className="flex md:flex-1 flex-row gap-[86px] items-center justify-center w-[35%] md:w-full">
                        <Text
                          className="leading-[120.00%] text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px] w-[66%] sm:w-full"
                          size="txtPromptMedium24"
                        >
                          Understanding blockchain privacy with Aztec protocol
                        </Text>
                        <Img
                          className="h-[45px] w-[54px]"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close_Two"
                        />
                      </div>
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex sm:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869_One"
                      />
                      <Text
                        className="text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px] w-auto"
                        size="txtPromptMedium24"
                      >
                        Pitch/VC Fund
                      </Text>
                      <Img
                        className="h-[45px] w-3"
                        src="images/img_close_blue_gray_400.svg"
                        alt="close_Three"
                      />
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869_Two"
                      />
                      <div className="flex md:flex-1 flex-row gap-[86px] items-center justify-center w-[35%] md:w-full">
                        <Text
                          className="leading-[120.00%] text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px] w-[67%] sm:w-full"
                          size="txtPromptMedium24"
                        >
                          Web3 Development Tools and Infrastructure
                        </Text>
                        <Img
                          className="h-[45px] w-[52px]"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close_Four"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869_Three"
                      />
                      <Text
                        className="leading-[120.00%] max-w-[313px] md:max-w-full text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px]"
                        size="txtPromptMedium24"
                      >
                        Decentralized Social Networks
                      </Text>
                      <Img
                        className="h-[45px] w-3"
                        src="images/img_close_blue_gray_400.svg"
                        alt="close_Five"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50_01 flex flex-row font-redhatdisplay gap-6 items-center justify-center max-w-7xl md:px-10 px-12 sm:px-5 py-6 rounded-lg w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                    size="txtRedHatDisplayRomanMedium24Gray900"
                  >
                    Register for Event
                  </Text>
                  <Img
                    className="h-8 w-8"
                    src="images/img_icon_arrowright_gray_900.svg"
                    alt="iconarrowright"
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-center justify-start outline outline-[1px] outline-yellow-50_01 p-10 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-2 items-start justify-start mb-[13px] w-auto md:w-full">
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-28 items-center justify-start max-w-[1200px] py-6 w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-yellow-50_01 tracking-[-0.56px] w-auto"
                        size="txtPromptBold28"
                      >
                        9th May
                      </Text>
                      <Line className="bg-blue_gray-400 h-[45px] md:h-px md:w-full w-px" />
                      <div className="flex md:flex-1 flex-row items-start justify-between w-[33%] md:w-full">
                        <Text
                          className="mt-0.5 sm:text-2xl md:text-[26px] text-[28px] text-yellow-50_01 tracking-[-0.56px] w-auto"
                          size="txtPromptBold28"
                        >
                          Topics
                        </Text>
                        <Img
                          className="h-[45px] w-[84px]"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close"
                        />
                      </div>
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-yellow-50_01 tracking-[-0.56px] w-auto"
                        size="txtPromptBold28"
                      >
                        Speakers
                      </Text>
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Text
                        className="leading-[120.00%] max-w-[216px] md:max-w-full text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px]"
                        size="txtPromptMedium24"
                      >
                        DWeb Storage Expo
                      </Text>
                      <Line className="bg-blue_gray-400 h-[45px] md:h-px md:w-full w-px" />
                      <div className="flex md:flex-1 flex-row gap-[86px] items-center justify-center w-[35%] md:w-full">
                        <Text
                          className="leading-[120.00%] text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px] w-[76%] sm:w-full"
                          size="txtPromptMedium24"
                        >
                          Practical hands-on exercises on using IPFS for file
                          storage and retrieval
                        </Text>
                        <Img
                          className="h-[45px] w-[15px]"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close_One"
                        />
                      </div>
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869"
                      />
                      <div className="flex md:flex-1 flex-row gap-[86px] items-center justify-center w-[35%] md:w-full">
                        <Text
                          className="leading-[120.00%] text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px] w-3/4 sm:w-full"
                          size="txtPromptMedium24"
                        >
                          Developing applications that utilize Filecoin for
                          distributed storage
                        </Text>
                        <Img
                          className="h-[45px] w-[19px]"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close_Two"
                        />
                      </div>
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869_One"
                      />
                      <div className="flex md:flex-1 flex-row gap-[86px] items-center justify-center w-[35%] md:w-full">
                        <Text
                          className="leading-[120.00%] text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px] w-[77%] sm:w-full"
                          size="txtPromptMedium24"
                        >
                          Practical exercises on integrating Swarm for
                          decentralized storage
                        </Text>
                        <Img
                          className="h-[45px] w-3"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close_Three"
                        />
                      </div>
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869_Two"
                      />
                      <div className="flex md:flex-1 flex-row gap-[86px] items-center justify-center w-[35%] md:w-full">
                        <Text
                          className="leading-[120.00%] text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px] w-[70%] sm:w-full"
                          size="txtPromptMedium24"
                        >
                          Storj: Decentralized Cloud Storage Workshop
                        </Text>
                        <Img
                          className="h-[45px] w-[39px]"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close_Four"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869_Three"
                      />
                      <div className="flex md:flex-1 flex-row items-end justify-between w-[35%] md:w-full">
                        <Text
                          className="mt-1.5 text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px] w-auto"
                          size="txtPromptMedium24"
                        >
                          NFT Storage Workshop
                        </Text>
                        <Img
                          className="h-[45px] w-3"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close_Five"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50_01 flex flex-row font-redhatdisplay gap-6 items-center justify-center max-w-7xl md:px-10 px-12 sm:px-5 py-6 rounded-lg w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                    size="txtRedHatDisplayRomanMedium24Gray900"
                  >
                    Register for Event
                  </Text>
                  <Img
                    className="h-8 w-8"
                    src="images/img_icon_arrowright_gray_900.svg"
                    alt="iconarrowright"
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-center justify-start outline outline-[1px] outline-yellow-50_01 p-10 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-28 items-center justify-start max-w-[1200px] py-6 w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-yellow-50_01 tracking-[-0.56px] w-auto"
                        size="txtPromptBold28"
                      >
                        10th May
                      </Text>
                      <Line className="bg-blue_gray-400 h-[45px] md:h-px md:w-full w-px" />
                      <div className="flex md:flex-1 flex-row items-start justify-between w-[33%] md:w-full">
                        <Text
                          className="mt-0.5 sm:text-2xl md:text-[26px] text-[28px] text-yellow-50_01 tracking-[-0.56px] w-auto"
                          size="txtPromptBold28"
                        >
                          Topics
                        </Text>
                        <Img
                          className="h-[45px] w-[84px]"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close"
                        />
                      </div>
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-yellow-50_01 tracking-[-0.56px] w-auto"
                        size="txtPromptBold28"
                      >
                        Speakers
                      </Text>
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Text
                        className="leading-[120.00%] max-w-[216px] md:max-w-full text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px]"
                        size="txtPromptMedium24"
                      >
                        Web3 BuiDLers Workshop
                      </Text>
                      <Line className="bg-blue_gray-400 h-[45px] md:h-px md:w-full w-px" />
                      <div className="flex md:flex-1 flex-row gap-[86px] items-center justify-center w-[35%] md:w-full">
                        <Text
                          className="leading-[120.00%] text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px] w-[72%] sm:w-full"
                          size="txtPromptMedium24"
                        >
                          Interoperability and Bridges: Connecting Blockchains
                          on Polkadot
                        </Text>
                        <Img
                          className="h-[45px] w-[31px]"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close_One"
                        />
                      </div>
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869"
                      />
                      <div className="flex md:flex-1 flex-row gap-[86px] items-center justify-center w-[35%] md:w-full">
                        <Text
                          className="leading-[120.00%] text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px] w-3/5 sm:w-full"
                          size="txtPromptMedium24"
                        >
                          Developing DApps on Optimistic Virtual Machine (OVM)
                        </Text>
                        <Img
                          className="h-[45px] w-20"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close_Two"
                        />
                      </div>
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869_One"
                      />
                      <Text
                        className="leading-[120.00%] max-w-[313px] md:max-w-full text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px]"
                        size="txtPromptMedium24"
                      >
                        Hermez Layer 2: A Practical Workshop on zk-rollups
                      </Text>
                      <Img
                        className="h-[45px] w-3"
                        src="images/img_close_blue_gray_400.svg"
                        alt="close_Three"
                      />
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869_Two"
                      />
                      <div className="flex md:flex-1 flex-row gap-[86px] items-center justify-center w-[35%] md:w-full">
                        <Text
                          className="leading-[120.00%] text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px] w-[67%] sm:w-full"
                          size="txtPromptMedium24"
                        >
                          DeFi on StarkWare: Optimizing and Scaling Finance
                          Applications
                        </Text>
                        <Img
                          className="h-[45px] w-[52px]"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close_Four"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869_Three"
                      />
                      <Text
                        className="leading-[120.00%] max-w-[313px] md:max-w-full text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px]"
                        size="txtPromptMedium24"
                      >
                        zkTube: Bridging Ethereum with Layer 2 zkRollup
                      </Text>
                      <Img
                        className="h-[45px] w-3"
                        src="images/img_close_blue_gray_400.svg"
                        alt="close_Five"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50_01 flex flex-row font-redhatdisplay gap-6 items-center justify-center max-w-7xl md:px-10 px-12 sm:px-5 py-6 rounded-lg w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                    size="txtRedHatDisplayRomanMedium24Gray900"
                  >
                    Register for Event
                  </Text>
                  <Img
                    className="h-8 w-8"
                    src="images/img_icon_arrowright_gray_900.svg"
                    alt="iconarrowright"
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-6 items-center justify-center w-auto md:w-full">
                <div className="flex flex-col items-center justify-start outline outline-[1px] outline-yellow-50_01 p-10 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-28 items-center justify-start max-w-[1200px] py-6 w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-yellow-50_01 tracking-[-0.56px] w-auto"
                        size="txtPromptBold28"
                      >
                        11th May
                      </Text>
                      <Line className="bg-blue_gray-400 h-[45px] md:h-px md:w-full w-px" />
                      <div className="flex md:flex-1 flex-row items-start justify-between w-[33%] md:w-full">
                        <Text
                          className="mt-0.5 sm:text-2xl md:text-[26px] text-[28px] text-yellow-50_01 tracking-[-0.56px] w-auto"
                          size="txtPromptBold28"
                        >
                          Topics
                        </Text>
                        <Img
                          className="h-[45px] w-[84px]"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close"
                        />
                      </div>
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-yellow-50_01 tracking-[-0.56px] w-auto"
                        size="txtPromptBold28"
                      >
                        Speakers
                      </Text>
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Text
                        className="leading-[120.00%] max-w-[216px] md:max-w-full text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px]"
                        size="txtPromptMedium24"
                      >
                        Web3 BuiDLers Summit
                      </Text>
                      <Line className="bg-blue_gray-400 h-[45px] md:h-px md:w-full w-px" />
                      <div className="flex md:flex-1 flex-row gap-[86px] items-center justify-center w-[35%] md:w-full">
                        <Text
                          className="leading-[120.00%] text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px] w-[66%] sm:w-full"
                          size="txtPromptMedium24"
                        >
                          Analyzing Data Trends with The Graph
                        </Text>
                        <Img
                          className="h-[45px] w-[55px]"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close_One"
                        />
                      </div>
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869"
                      />
                      <div className="flex md:flex-1 flex-row gap-[86px] items-center justify-center w-[35%] md:w-full">
                        <Text
                          className="leading-[120.00%] text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px] w-[66%] sm:w-full"
                          size="txtPromptMedium24"
                        >
                          Advanced Smart Contract Development on Ethereum
                        </Text>
                        <Img
                          className="h-[45px] w-[54px]"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close_Two"
                        />
                      </div>
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869_One"
                      />
                      <Text
                        className="leading-[120.00%] max-w-[313px] md:max-w-full text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px]"
                        size="txtPromptMedium24"
                      >
                        Rust Programming for Solana Smart Contracts
                      </Text>
                      <Img
                        className="h-[45px] w-3"
                        src="images/img_close_blue_gray_400.svg"
                        alt="close_Three"
                      />
                    </div>
                    <div className="border-b border-blue_gray-400 border-solid flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869_Two"
                      />
                      <div className="flex md:flex-1 flex-row gap-[86px] items-center justify-center w-[35%] md:w-full">
                        <Text
                          className="leading-[120.00%] text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px] w-[67%] sm:w-full"
                          size="txtPromptMedium24"
                        >
                          Polygon PoS Chain: Staking and Validator Node Setup
                        </Text>
                        <Img
                          className="h-[45px] w-[52px]"
                          src="images/img_close_blue_gray_400.svg"
                          alt="close_Four"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[86px] items-center justify-start max-w-[1200px] py-6 w-full">
                      <Img
                        className="h-[45px] w-[303px]"
                        src="images/img_frame1321316869.svg"
                        alt="frame1321316869_Three"
                      />
                      <Text
                        className="leading-[120.00%] max-w-[313px] md:max-w-full text-2xl md:text-[22px] sm:text-xl text-yellow-50_01 tracking-[-0.48px]"
                        size="txtPromptMedium24"
                      >
                        Liquidity Pool Management with Aave
                      </Text>
                      <Img
                        className="h-[45px] w-3"
                        src="images/img_close_blue_gray_400.svg"
                        alt="close_Five"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50_01 flex flex-row font-redhatdisplay gap-6 items-center justify-center max-w-7xl md:px-10 px-12 sm:px-5 py-6 rounded-lg w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                    size="txtRedHatDisplayRomanMedium24Gray900"
                  >
                    Register for Event
                  </Text>
                  <Img
                    className="h-8 w-8"
                    src="images/img_icon_arrowright_gray_900.svg"
                    alt="iconarrowright"
                  />
                </div>
              </div>
            </List>
          </div>
        </div>
        <footer className="flex font-redhatdisplay items-center justify-center md:px-5 w-full">
          <div className="h-[488px] md:h-[937px] relative w-full">
            <div className="bg-yellow-50 blue_300_blue_A700_border border-solid border-t h-[484px] m-auto w-full"></div>
            <div className="absolute h-[488px] md:h-[937px] inset-[0] justify-center m-auto w-full">
              <Img
                className="h-[488px] m-auto object-cover w-full"
                src="images/img_rectangle.png"
                alt="rectangle_Two"
              />
              <div className="absolute bottom-[10%] flex md:flex-col flex-row md:gap-10 gap-[94px] inset-x-[0] items-start justify-start max-w-[1200px] mx-auto w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                  size="txtRedHatDisplayRomanMedium24Gray900"
                >
                  LBW
                </Text>
                <div className="flex md:flex-1 md:flex-col flex-row font-prompt md:gap-10 gap-20 h-[344px] md:h-auto items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-[177px]">
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtPromptBold16Gray900"
                    >
                      Volunteers
                    </Text>
                    <ul className="flex flex-col gap-4 items-start justify-start w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900"
                        >
                          <Text size="txtPromptMedium16Gray900">
                            Content creators
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900"
                        >
                          <Text size="txtPromptMedium16Gray900">
                            Community Managers
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900"
                        >
                          <Text size="txtPromptMedium16Gray900">
                            Developers
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900"
                        >
                          <Text size="txtPromptMedium16Gray900">Designers</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900"
                        >
                          <Text size="txtPromptMedium16Gray900">
                            Technical Writers
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start w-[177px]">
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtPromptBold16Gray900"
                    >
                      Partners
                    </Text>
                    <ul className="flex flex-col gap-4 items-start justify-start w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900"
                        >
                          <Text size="txtPromptMedium16Gray900">Sponsors</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900"
                        >
                          <Text size="txtPromptMedium16Gray900">
                            Become a Sponsor
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900"
                        >
                          <Text size="txtPromptMedium16Gray900">
                            Partner With Us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900"
                        >
                          <Text size="txtPromptMedium16Gray900">
                            Made in Africa
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start w-[177px]">
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtPromptBold16Gray900"
                    >
                      Team
                    </Text>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-base text-gray-900 w-full"
                        size="txtPromptMedium16Gray900"
                      >
                        Ethereum Nigeria
                      </Text>
                      <Text
                        className="text-base text-gray-900 w-full"
                        size="txtPromptMedium16Gray900"
                      >
                        Meet Our Dev Team
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start w-[177px]">
                    <Text
                      className="text-base text-gray-900 w-full"
                      size="txtPromptBold16Gray900"
                    >
                      Resources
                    </Text>
                    <ul className="flex flex-col gap-4 items-start justify-start w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900"
                        >
                          <Text size="txtPromptMedium16Gray900">About</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900"
                        >
                          <Text size="txtPromptMedium16Gray900">Blog</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900"
                        >
                          <Text size="txtPromptMedium16Gray900">
                            Contact Us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="text-base text-gray-900"
                        >
                          <Text size="txtPromptMedium16Gray900">Support</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SchedulePage;
