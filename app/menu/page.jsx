import { HeaderProp, Nav } from "@/components";
import { Menu1, Menu2, Menu3 } from "@/components/AllMenu";
import Image from "next/image";

const page = () => {
  return (
    <main className="text-black">
      <section className='bg-[url("/Rectangle2.png")] space-y-[100px] bg-cover bg-no-repeat'>
        <Nav />
        <HeaderProp
          fontt="font-bold text-7xl"
          font="font-bernier"
          text="Our Menu"
        />
      </section>
      <div className="bg-[#0D1518] ">
        <Menu1 />
        <Menu3 />
        <Menu2 />
        <div className=" h-[908px] bg-[#0D1518] mb-[91px]  mt-[91px]">
          <div className="flex flex-row container mx-auto px-5  ">
            <div className="h-[650px] w-[442px] bg-white z-50 p-10 space-y-3 py-10  relative top-24 mt-20">
              <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                SANDWICH
              </h1>
              <div className="flex justify-between align-baseline">
                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                  SANDWICH POULET
                </p>
                {/* <Image src="/Vector 24.svg" width={170} height={5} alt="" /> */}
                <span className="text-[#F09804] h-[20px] ">
                  -------------------------
                </span>
                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                  35 DH
                </p>
              </div>
              <div className="flex justify-between align-baseline">
                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                  TACOS DAR DJAJ
                </p>
                <span className="text-[#F09804] h-[20px] ">
                  -------------------------
                </span>
                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                  30DH
                </p>
              </div>
              <div className="flex justify-between align-baseline">
                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                  SANDWICH TANDORI
                </p>
                <span className="text-[#F09804] h-[20px] ">
                  -------------------------
                </span>
                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                  30DH
                </p>
              </div>
              <div className="flex justify-between align-baseline">
                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                  SANDWICH CURRY
                </p>
                <span className="text-[#F09804] h-[20px] ">
                  -------------------------
                </span>
                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                  30DH
                </p>
              </div>
              <div className="flex justify-between align-baseline">
                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                  SANDWiCH PARIKA
                </p>
                <span className="text-[#F09804] h-[20px] ">
                  -------------------------
                </span>
                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                  30DH
                </p>
              </div>
              <div className="flex justify-between align-baseline">
                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                  SANDWICH VAINDE HACHEE
                </p>
                <span className="text-[#F09804] h-[20px] ">
                  -----------------
                </span>
                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                  30DH
                </p>
              </div>
              <div className="flex justify-between align-baseline">
                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                  SANDWICH MERGUEZ POULET
                </p>
                <span className="text-[#F09804] h-[20px] ">--------------</span>
                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                  30DH
                </p>
              </div>
              <div className="flex justify-between align-baseline">
                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                  SANDWICH MERGUEZ VIANDE
                </p>
                <span className="text-[#F09804] h-[20px] ">--------------</span>
                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                  30DH
                </p>
              </div>
              <div className="flex justify-between align-baseline">
                <p className="font-bernier font-400 text-[22px] leading-[25px]">
                  SANDWICH DAR D’JAJ
                </p>
                <span className="text-[#F09804] h-[20px] ">
                  ----------------------
                </span>
                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                  30DH
                </p>
              </div>

              <p className="text-[#F09804] text-[22px] leading-[25px] font-[400]">
                TACOS DAR DJAJ SERVI AVEC SAUCE ET FRITE
              </p>
            </div>
            <div className="flex flex-col relative right-32 space-y-10 mt-10">
              <div className=" z-10">
                <div className=" w-[415px] h-[337px]  shapeMenu">
                  <Image
                    src="/_DSC4739.jpg"
                    width={415}
                    height={337}
                    alt=""
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
              </div>
              <div className=" w-[415px] h-[284px] z-10 absolute top-[30%]">
                <Image
                  src="/_DSC4744.jpg"
                  fill
                  alt=""
                  objectFit="cover"
                  objectPosition="right"
                  className="overflow-hidden shapeMenu2 "
                />
              </div>
            </div>
            <div className="flex flex-col relative">
              div
              <Image
                src="/Group 5 vertical.svg"
                width={120}
                height={20}
                alt=""
                className="absolute right-0 bottom-[375px] z-20"
              />
              <Image
                src="/Group 5.svg"
                width={220}
                height={400}
                alt=""
                className="absolute right-0 bottom-64 z-20"
              />
              <div className="h-fit w-[442px] bg-white z-50 p-10 space-y-3 relative top-0 left-[12%]">
                <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                  BUCKETS
                </h1>
                <div className="flex justify-between align-baseline">
                  <div className="flex flex-col">
                    <p className="font-bernier font-400 text-[22px] leading-[25px]">
                      DAR DJAJ
                    </p>
                    <p className="text-[#808080] font-poppins text-[14px] font-500 leading-[26px]">
                      1 cuisse
                    </p>
                  </div>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30 DH
                  </p>
                </div>

                <div className="flex justify-between align-baseline">
                  <div className="flex flex-col">
                    <p className="font-bernier font-400 text-[22px] leading-[25px]">
                      BUCKET MIX
                    </p>
                    <p className="text-[#808080] font-poppins text-[14px] font-500 leading-[26px]">
                      1 Cuisse, 6 Wings
                    </p>
                  </div>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    47 DH
                  </p>
                </div>

                <div className="flex flex-col -space-y-3">
                  <div className="flex">
                    <p className="font-bernier font-400 text-[22px] leading-[25px]">
                      BUCKET XL
                    </p>
                    <p className="text-[#F09804] h-[20px] ">
                      ------------------------------------
                    </p>
                    <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                      95 DH
                    </p>
                  </div>
                  <p className="text-[#808080] font-poppins text-[14px] font-500 leading-[26px]">
                    1 Cuisse, 6 Wings, 4 Tenders{" "}
                  </p>
                </div>

                <div className="flex flex-col -space-y-3">
                  <div className="flex ">
                    <p className="font-bernier font-400 text-[22px] leading-[25px]">
                      BUCKET XXL
                    </p>
                    <p className="text-[#F09804] h-[20px] ">
                      ----------------------------------
                    </p>
                    <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                      110DH
                    </p>
                  </div>
                  <p className="text-[#808080] font-poppins text-[14px] font-500 leading-[26px]">
                    1 Cuisse, 12 Wings (6 spicy +6 classic) , 4 Tenders{" "}
                  </p>
                </div>

                <div className="flex flex-col -space-y-3">
                  <div className="flex">
                    <p className="font-bernier font-400 text-[22px] leading-[25px]">
                      BUCKET XXXL
                    </p>
                    <p className="text-[#F09804] h-[20px] ">
                      --------------------------------
                    </p>
                    <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                      199DH
                    </p>
                  </div>
                  <p className="text-[#808080] font-poppins text-[14px] font-500 leading-[26px]">
                    1 Cuisse, 18 Wings (6 spicy +6 classic ), 6 Tenders, 4
                    nuggets{" "}
                  </p>
                </div>
              </div>
              <div className="relative z-10 bottom-[30%] right-[10%] ">
                <div className="w-[563px] h-[533px] relative">
                  <Image
                    src="/_DSC4783.jpg"
                    fill
                    objectFit="cover"
                    objectPosition="center"
                    className="overflow-hidden shapeMenu3"
                    alt=""
                  />
                </div>
                <Image
                  src="/Group 41.svg"
                  width={300}
                  height={300}
                  alt=""
                  className="absolute z-50 top-1 opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" h-[908px] bg-[#0D1518] mb-[91px] ">
            <div className="flex flex-row container mx-auto px-5 relative ">
              <Image
                src="/Group 5 vertical.svg"
                width={120}
                height={20}
                alt=""
                className="absolute right-40 bottom-[375px] z-20"
              />
              <Image
                src="/Group 5.svg"
                width={220}
                height={400}
                alt=""
                className="absolute right-40 bottom-64 z-20"
              />
              <div className="h-[440px] w-[442px] bg-white z-50 p-10 space-y-3     relative bottom-[-320px] mt-20">
                <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                  WINGS
                </h1>
                <div className="flex flex-col -space-y-3">
                  <div className="flex justify-between">
                    <p className="font-bernier font-400 text-[22px] leading-[25px]">
                      WINGS CLASSIC
                    </p>
                    <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                    <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                      25 DH
                    </p>
                  </div>
                  <p className="text-[14px] font-500 leading-[26px] font-poppins text-[#808080]">
                    base chaplure
                  </p>
                </div>
                <div className="flex flex-col -space-y-2">
                  <div className="flex justify-between">
                    <p className="font-bernier font-400 text-[22px] leading-[25px]">
                      WINGS 6 PC BUFFALO{" "}
                    </p>
                    <p className="text-[#F09804] h-[20px] ">
                      ----------------------
                    </p>
                    <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                      30DH
                    </p>
                  </div>
                  <p className="text-[14px] font-500 leading-[26px] font-poppins text-[#808080]">
                    accompagné sauce américaine
                  </p>
                </div>
                <div className="flex flex-col -space-y-2">
                  <div className="flex justify-between">
                    <p className="font-bernier font-400 text-[22px] leading-[25px]">
                      WINGS MENU{" "}
                    </p>
                    <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                    <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                      30DH
                    </p>
                  </div>
                  <p className="text-[14px] font-500 leading-[26px] font-poppins text-[#808080]">
                    accompagné sauce bbq ou spicy
                  </p>
                </div>
                <div className="flex  flex-col -space-y-2">
                  <div className="flex justify-between">
                    <p className="font-bernier font-400 text-[22px] leading-[25px]">
                      WINGS BUFFALO MENU{" "}
                    </p>
                    <p className="text-[#F09804] h-[20px] ">
                      ----------------------
                    </p>
                    <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                      30DH
                    </p>
                  </div>
                  <p className="text-[14px] font-500 leading-[26px] font-poppins text-[#808080]">
                    accompagné sauce bbq ou spicy
                  </p>
                </div>
                <p className="text-[#F09804] text-[22px] leading-[25px] font-[400] font-bernier">
                  FRiTES CLASSIC 12 DH
                </p>
              </div>
              <div className="flex flex-col relative right-[280px] space-y-10 mt-10">
                <div className="z-10">
                  <div className="w-[509px] h-[700px] relative">
                    <Image
                      src="/0a057e698af57a6c452b0d5003044b0c.jpg"
                      fill
                      objectFit="cover"
                      objectPosition="center"
                      alt=""
                      className="overflow-hidden shapeMenu4 "
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="h-[400px] w-[442px] bg-white z-50 p-10 space-y-3 relative top-20 left-[12%]">
                  <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                    TENDERS
                  </h1>
                  <div className="flex flex-col -space-y-3">
                    <div className="flex justify-between">
                      <p className="font-bernier font-400 text-[22px] leading-[25px]">
                        TENDERS SPICY
                      </p>

                      <Image
                        src="/Vector 24.svg"
                        width={170}
                        height={5}
                        alt=""
                      />
                      <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                        25 DH
                      </p>
                    </div>
                    <p className="text-[14px] font-500 leading-[26px] font-poppins text-[#808080]">
                      base chaplure
                    </p>
                  </div>
                  <div className="flex flex-col -space-y-3">
                    <div className="flex justify-between">
                      <p className="font-bernier font-400 text-[22px] leading-[25px]">
                        TENDERS BARBECUE
                      </p>
                      <p className="text-[#F09804] h-[20px] ">
                        ----------------------
                      </p>
                      <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                        25 DH
                      </p>
                    </div>
                    <p className="text-[#808080] font-poppins text-[14px] font-500 leading-[26px]">
                      accompagné paella, salade marocaine sauce tomate, sauce
                      poulet, frites
                    </p>
                  </div>
                  <div className="flex  flex-col -spacep-y-2">
                    <div className="flex justify-between">
                      <p className="font-bernier font-400 text-[22px] leading-[25px]">
                        TENDERS MIEL
                      </p>
                      <Image
                        src="/Vector 24.svg"
                        width={170}
                        height={5}
                        alt=""
                      />
                      <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                        25 DH
                      </p>
                    </div>
                    <p className="text-[#808080] font-poppins text-[14px] font-500 leading-[26px]">
                      accompagné paella, salade marocaine sauce tomate, sauce
                      poulet, frites
                    </p>
                  </div>
                  <p className="text-[#F09804] text-[22px] leading-[25px] font-[400] font-bernier">
                    FRiTES CLASSIC 12 DH
                  </p>
                </div>
                <div className="relative z-10 bottom-[30%] right-[40%]">
                  <div className="w-[563px] h-[533px] re;ative">
                    <Image
                      src="/_DSC4783.jpg"
                      fill
                      objectFit="cover"
                      objectPosition="center"
                      className="overflow-hidden shapeMenu5"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[1508px] bg-[#0D1518]  ">
          <div className="container mx-auto px-5 grid grid-cols-12 gap-4  relative">
            <Image
              src="/Group 5 vertical.svg"
              width={100}
              height={100}
              alt=""
              className="top-[52%] right-14 z-10 absolute"
            />
            <Image
              src="/Group 41.svg"
              width={300}
              height={300}
              alt=""
              className=" z-50 absolute left-[50%] top-[390px]"
            />
            <div className="col-span-4 h-max w-[500px] bg-[#ffff] p-6 space-y-5 z-20 mt-[200px]">
              {" "}
              <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804] mt-[70px] px-[40px] ">
                JUS DE FRUITS
              </h1>
              <div className="px-[40px] pb-[72px]">
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    ORANGE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    35 DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    FRAISE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    POMME{" "}
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    BANANE{" "}
                  </p>

                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    FRAMBOISE{" "}
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    KAKI{" "}
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    AVOCAT{" "}
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    MANGUE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    {" "}
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    PAPAYE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    PECHE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    <div className="flex justify-between align-baseline">
                      <p className="font-bernier font-400 text-[22px] leading-[25px]">
                        PANACHE
                      </p>
                    </div>
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    <div className="flex justify-between align-baseline">
                      <p className="font-bernier font-400 text-[22px] leading-[25px]">
                        KIWI
                      </p>
                    </div>
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    <div className="flex justify-between align-baseline">
                      <p className="font-bernier font-400 text-[22px] leading-[25px]">
                        CITRON
                      </p>
                    </div>
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    <div className="flex justify-between align-baseline">
                      <p className="font-bernier font-400 text-[22px] leading-[25px]">
                        ZE3ZE3
                      </p>
                    </div>
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    <div className="flex justify-between align-baseline">
                      <p className="font-bernier font-400 text-[22px] leading-[25px]">
                        FRUITS SECS
                      </p>
                      <Image
                        src="/Vector 24.svg"
                        width={170}
                        height={5}
                        alt=""
                      />
                    </div>
                  </p>
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    <div className="flex justify-between align-baseline">
                      <p className="font-bernier font-400 text-[22px] leading-[25px]">
                        SALADE DE FRUITS
                      </p>
                      <Image
                        src="/Vector 24.svg"
                        width={170}
                        height={5}
                        alt=""
                      />
                    </div>
                  </p>
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-3 w-fit overflow-hidden">
              <div className="z-10 absolute h-[323px] w-[689px] left-[15%] ">
                <Image
                  src="/_DSC4663.jpg"
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  className=" w-[2900px] h-[323px]  shapeMenu2 overflow-hidden"
                  alt=""
                />
              </div>
              <div className="z-10 absolute h-[452px] w-[543px] mt-[-40px] top-[20%] right-[45%] overflow-hidden">
                <Image
                  src="/_DSC4773.jpg"
                  fill
                  objectFit="cover"
                  objectPosition="right"
                  className=" mt-[50px] w-[550px]  shapeMenu22 overflow-hidden"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2 relative">
              <div className="col-span-5 h-fit w-[500px] bg-[#ffff] z-20 px-[30px] space-y-2 relative top-[-10%]">
                <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804] pt-[25px]">
                  JUS DE LEGUMES
                </h1>

                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    CONCOMBRE{" "}
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    CITROUILLE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    DETOX
                  </p>

                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    CAROTTE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    COURGETTE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    BETTERAVE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                  MILKSHAKE{" "}
                </h1>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    FRAISE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    {" "}
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    CAFE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    {" "}
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    VANILLE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    {" "}
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    CARAMEL
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    {" "}
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    CHOCOLAT
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    {" "}
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    PISTACHE
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    {" "}
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    NOUGAT
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    OREO{" "}
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
                <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                  MILKSHAKE AU CHOIX
                </p>
                <div className="flex justify-between align-baseline pb-[30px]">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    2 AROMES MAX
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    25DH
                  </p>
                </div>
              </div>

              <div className="col-span-4 h-[300px] w-[500px]   overflow-hidden  relative z-10 top-[-9%] right-[40%] ">
                <div className=" absolute h-[500px] w-[500px] ">
                  <Image
                    src="/_DSC4661.jpg"
                    fill
                    alt=""
                    objectFit="cover"
                    objectPosition="bottom"
                    className="overflow-hidden lastImg"
                  />
                </div>
              </div>
              <div className="col-span-5 h-fit w-[500px] bg-[#ffff] z-20  relative top-[-20%] px-[30px] space-y-[30px]">
                <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804] pt-[25px]">
                  THÉ
                </h1>
                <div className="flex justify-between align-baseline">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    THÉ
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    10 DH
                  </p>
                </div>
                <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                  GLACES
                </h1>

                <div className="flex-col -space-y-2">
                  <div className="flex justify-between align-baseline">
                    <p className="font-bernier font-400 text-[22px] leading-[25px]">
                      BOUCLE DE GLACE AU CHOIX{" "}
                    </p>
                    <Image src="/Vector 24.svg" width={170} height={5} alt="" />

                    <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                      30DH
                    </p>
                  </div>
                  <p className="text-[#808080] font-poppins text-[14px] font-500 leading-[26px]">
                    {" "}
                    Fraise, Chocolat, Pistache, Vanille, Café, Caramel, Oreo
                  </p>
                </div>
                <h1 className="font-bernier font-400 text-[44px] leading-[51px] text-[#F09804]">
                  SUNDAE
                </h1>

                <div className="flex justify-between align-baseline pb-[70px]">
                  <p className="font-bernier font-400 text-[22px] leading-[25px]">
                    CHocolat, fraise, caramel
                  </p>
                  <Image src="/Vector 24.svg" width={170} height={5} alt="" />
                  <p className="font-bernier text-[#F09804] text-[24px] font-400 leading-normal">
                    30DH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
