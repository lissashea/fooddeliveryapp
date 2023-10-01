import { prisma } from "@/utils/connect";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    const { intentId } = req.query;

    try {
      await prisma.order.update({
        where: {
          intent_id: intentId as string, // Ensure intentId is treated as a string
        },
        data: { status: "Being prepared!" },
      });

      res.status(200).json({ message: "Order has been updated" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Something went wrong!" });
    }
  } else {
    res.status(405).json({ message: "Invalid HTTP method" });
  }
}
