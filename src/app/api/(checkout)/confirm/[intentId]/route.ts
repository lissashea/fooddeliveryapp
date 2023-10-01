import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const intentId = Array.isArray(req.query.intentId)
    ? req.query.intentId[0] // If intentId is an array, take the first element
    : req.query.intentId; // Otherwise, use intentId as is

  if (req.method === "PUT") {
    try {
      await prisma.order.update({
        where: {
          intent_id: intentId,
        },
        data: { status: "Being prepared!" },
      });
      return new NextResponse(
        JSON.stringify({ message: "Order has been updated" }),
        { status: 200 }
      );
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: "Invalid HTTP method" }),
      { status: 405 } // Method Not Allowed
    );
  }
}
