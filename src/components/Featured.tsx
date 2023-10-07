import { ProductType } from "@/types/types";
import Image from "next/image";
import { prisma } from "@/utils/connect";
import React from "react";
import { log } from "console";

// const getData = async ()=>{
//   const res = await fetch("http://localhost:3000/api/products", {
//     cache: "no-store"
//   }) 

//   if (!res?.ok) {
//     // const errorData = await res.json(); // Await the error response JSON    
//     // throw new Error(errorData.status); // Throw an error with the error message
//     return []
//   }
//   return await res?.json()
// }

const getData = async () => {
  const products = await prisma.product.findMany({
    where: { isFeatured: true },
  }).catch(err => err);
  
  console.log(products);
  
  return products || []
}

const Featured = async () => {

  const featuredProducts:ProductType[] = await getData()

  return (
    <div className="w-screen overflow-x-scroll text-orange-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts && featuredProducts.length>0 && featuredProducts.map((item) => (
          <div
            key={item?.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER */}
            {item?.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={item?.img || ''} alt="" fill className="object-contain" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item?.title}</h1>
              <p className="p-4 2xl:p-8">{item?.desc}</p>
              <span className="text-xl font-bold">${item?.price}</span>
              <button className="bg-red-300 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (<>hello</>)
};

export default Featured;