import { MenuType } from "@/types/types";
import { prisma } from "@/utils/connect";
import Link from "next/link";
import React from "react";

// const getData = async () => {
  
//   const res = await fetch("http://localhost:3000/api/categories", {
//     cache: "no-store"
//   });
//   const r = await res?.json()
//   console.log(r);
  
//   if (!r) {
//     // throw new Error("Failed!");
//     return []
//   }

//   return r;
// };

// const getData = async () => {
//   const categories = await prisma.category.findMany();

//   console.log("categories: ");
//   console.log(categories);
//   return categories
// };

const getData = async () => {
  const categories = await prisma.category.findMany().catch(err => err);
  return categories || []
}

const MenuPage = async () => {
  const menu: MenuType = await getData();
  // console.log("menu: ");
  // console.log(menu);
  
  // const menu: MenuType = []
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/2 bg-cover p-8 m-4  md:h-1/2"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-white w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-8">{category.desc}</p>
            <button
              className={`2xl:block bg-red-400 text-white py-2 px-4 rounded-md`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
