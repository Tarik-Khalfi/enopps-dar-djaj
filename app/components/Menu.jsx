import Image from "next/image";
import React from "react";

export default function Menu() {
  return (
    <div className=" h-[780px] bg-[#0B0E11] lg:mt-[120px] mt-[1700px]   mb-[110px] relative ">
      <div className="lg:container lg:mx-auto lg:px-10 lg:grid lg:grid-cols-2  relative flex flex-col-reverse">
        <div className="bg-[#FFFF] lg:h-[397px] h-[400px] lg:w-[482px]  flex flex-col py-5 lg:mt-[184px]  mt-[600px] z-50   items-center justify-center">
          <div className="  lg:w-[442px] w-[100%] my-auto lg:space-y-2 space-y-2  absolute space-x-2 overflow-hidden">
            <h1 className="text-[#f09804] font-bernier text-[44px] font-400 leading-normal text-left md:px-5 px-1">
              POULET BRAISE GRILLE
            </h1>
            <div className="flex  justify-between items-center md:px-5 px-1">
              <p className="text-[#0F1622] font-bernier text-[22px] font-400 leading-normal text-uppercase">
                1/4 poulet
              </p>
              <p className="text-[#F09804] text-sm  ">
                ------------------------------
              </p>
              <p className="text-[#F09804] text-[23px] font-400 leading-normal">
                40DHS
              </p>
            </div>
            <div className="flex justify-between items-center md:px-5 px-1">
              <p className="text-[#0F1622] font-bernier text-[22px] font-400 leading-normal text-uppercase">
                1/2 poulet
              </p>
              <p className="text-[#F09804] text-sm  ">
                ------------------------------
              </p>
              <p className="text-[#F09804] text-[23px] font-400 leading-normal">
                80DHS
              </p>
            </div>
            <div className="flex justify-between items-center md:px-5 px-1">
              <p className="text-[#0F1622] font-bernier text-[22px] font-400 leading-normal text-uppercase">
                poulet entier
              </p>
              <p className="text-[#F09804] text-sm  ">
                ------------------------
              </p>
              <p className="text-[#F09804] text-[23px] font-400 leading-normal ">
                145DHS
              </p>
            </div>
            <h1 className="text-[#F09804] font-bernier text-[22px] font-400 leading-normal md:px-5 px-1">
              SERVI AVEC SALADE MAROCAINE SAUCE,RIZ ET FRITE
            </h1>
          </div>
        </div>
        <div className="mt-[80px] relative xl:w-[815px] lg:w-full   ">
          <div className="overflow-hidden">
            <div className="absolute z-20 xl:w-[1115px]  lg:w-[900px] w-[100%] h-[600px] lg:right-[20px] xl:right-20 right-[-10]">
              <Image
                src="/Group 41.svg"
                alt=""
                width={210}
                height={210}
                className="absolute lg:top-[-12%] lg:left-[-10%] top-[-20%] left-[-15%] z-1"
              />
              <Image
                src="/menu_poulet.jpg"
                fill={true}
                objectFit="cover"
                objectPosition="center"
                className="  absolute z-10 overflow-hidden foodClipe"
                alt=""
              />
              <Image
                src="/Group 5.svg"
                width={170}
                height={170}
                alt=""
                className="absolute lg:bottom-0 lg:right-[-10%] bottom-[-75%]  right-[0] z-20"
                f
              />
              <Image
                src="/Group 5 vertical.svg"
                width={100}
                height={70}
                alt=""
                className="absolute lg:bottom-[-16%] lg:right-[-3%] bottom-[-90%] right-[20%]  z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// // <div className=" relative mt-[10px] mr-[20px]">
//             <div className=" overflow-hidden">
//               <div className="absolute z-20 right-0  w-[480px]   h-[490px]    clipImage1  ">
//                 <Image
//                   src="/_DSC4793.jpg"
//                   alt=""
//                   fill
//                   objectFit="cover"
//                   objectPosition="center"
//                   className=" border border-[#EF4949]   absolute z-10 overflow-hidden"
//                 />
//               {/* </div> */}
