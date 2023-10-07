// import { prisma } from "@/utils/connect";
// import { NextRequest, NextResponse } from "next/server";

// // FETCH ALL PRODUCTS
// export const GET = async (req: NextRequest, res: NextResponse) => {
//   return new NextResponse(JSON.stringify([]), { status: 200 });
// };

import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";


// FETCH ALL CATEGORIES
export const GET = async () => {
  return new NextResponse(JSON.stringify([]), { status: 200 });
  // try {
  //   const categories = await prisma.category.findMany().catch(err => err);
  //   if(categories){
  //     return new NextResponse(JSON.stringify(categories), { status: 200 });
  //   }
  //     return new NextResponse(JSON.stringify([]), { status: 400 });
  // } catch (err) {
  //   console.log(err);
  //   return new NextResponse(
  //     JSON.stringify({ message: "Something went wrong!" }),
  //     { status: 500 }
  //   );
  // }
};