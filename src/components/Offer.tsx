import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-red-300 h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-orange-500 text-5xl font-bold xl:text-6xl">The countdown is on until the next drop</h1>
        <p className="text-yellow-300 text-3xl xl:text-xl">
          Get your orders in before next Tuesday at 12:00 pm PST
        </p>
        <CountDown/>
        <button className="bg-red-400 text-white rounded-md py-3 px-6">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/slide1.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;