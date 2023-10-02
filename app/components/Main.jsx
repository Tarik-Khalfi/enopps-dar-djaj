import Image from "next/image";
import React from "react";

export default function Main() {
  return (
    <div className="h-[793px] bg-[#0B0E11] relative">
      <Image
        src="/Group 51.svg"
        width={212}
        height={111}
        alt=""
        className="absolute right-0 top-[10%]"
      />
      <div className="md:container w-full mx-auto px-10 mt-[490px] lg:mt-[90px] ">
        <div className="flex flex-col justify-center items-center gap-5 mb-[75px]  mt-[40px] text-center">
          <p className="text-[#F09804] font-normal leading-normal text-[44px] mt-[96px] font-bernier">
            DISCOVER
          </p>
          <h1 className="text-[#FFF] text-[36px]  font-[600] leading-normal font-poppins">
            Our Special Cuisine
          </h1>
        </div>

        <div className="grid lg:grid-cols-2  lg:grid-rows-2  gap-y-10 gap-x-10 md:justify-items-center  grid-cols-1">
          <div className="lg:h-[200px] h-fit md:w-full w-[100%] bg-[#0D1518] text-[#F09804] flex items-center md:gap-5  frstCont  ">
            <div className="md:flex md:flex-row md:gap-5 flex-col  justify-center ">
              <div className="md:ml-20 mx-auto  justify-center flex ">
                <Image
                  src="/Food Icon-08 3.svg"
                  width={60}
                  alt=""
                  height={60}
                  className="w-[60px] mb-[20px] h-[60px] "
                />
              </div>
              <div className="md:flex md:flex-col md:col md:w-[70%] md:pr-[100px] mt-2 space-y-4 w-[100%] mx-auto px-1">
                <p className="text-[#F09804] font-poppins text-[22px] font-600 leading-600 text-center md:text-left">
                  Middle - East Food
                </p>
                <p className="text-[14px] font-400 leading-[26px] font-poppins text-[#808080]  ">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
              </div>
            </div>
          </div>
          <div className="lg:h-[200px] h-fit md:w-full w-[100%] bg-[#0D1518] text-[#F09804] flex items-center md:gap-5   scdCont">
            <div className="md:flex md:flex-row md:gap-5 flex-col  justify-center">
              <div className="md:ml-20 justify-center flex">
                <Image
                  src="/Layer 2.svg"
                  width={60}
                  alt=""
                  height={60}
                  className="w-[60px] h-[60px]"
                />
              </div>
              <div className="md:flex md:flex-col md:col md:w-[70%] md:pr-[100px] mt-2 space-y-4 w-[100%] mx-auto px-1 ">
                <p className="text-[#F09804] font-poppins text-[22px] font-600 leading-600 text-center md:text-left">
                  Korean Food
                </p>
                <p className="text-[14px] font-400 leading-[26px] font-poppins text-[#808080]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
              </div>
            </div>
          </div>
          <div className="lg:h-[200px] h-fit md:w-full w-[100%] bg-[#0D1518] text-[#F09804] flex items-center md:gap-5   scdCont">
            <div className="md:flex md:flex-row md:gap-5 flex-col  justify-center">
              <div className="md:ml-20 justify-center flex">
                <Image
                  src="/Vector.svg"
                  width={60}
                  alt=""
                  height={60}
                  className="w-[60px] h-[60px]"
                />
              </div>
              <div className="md:flex md:flex-col md:col md:w-[70%] md:pr-[100px] mt-2 space-y-4 w-[100%] mx-auto px-1 ">
                <p className="text-[#F09804] font-poppins text-[22px] font-600 leading-600 text-center md:text-left">
                  Western Food
                </p>
                <p className="text-[14px] font-400 leading-[26px] font-poppins text-[#808080]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
              </div>
            </div>
          </div>
          <div className="lg:h-[200px] h-fit md:w-full w-[100%] bg-[#0D1518] text-[#F09804] flex items-center md:gap-5  frstCont">
            <div className="md:flex md:flex-row md:gap-5 flex-col  justify-center">
              <div className="md:ml-20 justify-center flex">
                <Image
                  src="/Layer 2(1).svg"
                  width={60}
                  alt=""
                  height={60}
                  className="w-[60px] h-[60px]"
                />
              </div>
              <div className="md:flex md:flex-col md:col md:w-[70%] md:pr-[100px] mt-2 space-y-4 w-[100%] mx-auto px-1 ">
                <p className="text-[#F09804] font-poppins text-[22px] font-600 leading-600 text-center md:text-left">
                  Chinese Food
                </p>
                <p className="text-[14px] font-400 leading-[26px] font-poppins text-[#808080]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
