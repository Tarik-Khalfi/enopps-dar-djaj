import Image from "next/image";
import React from "react";

export default function Video() {
  return (
    <div className="h-[700px] bg-black relative mt-[490px] lg:mt-[0px]">
      <div className="h-[700px] bg-[url('/_DSC4795.jpg')] bg-cover bg-no-repeat z-[-1]  opacity-40"></div>
      <Image
        src="Group 281.svg"
        alt=""
        width={120}
        height={240}
        className="absolute top-[45%] left-[45%] "
      />
    </div>
  );
}
