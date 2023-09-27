import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import Decimal from 'decimal.js';

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(
  request: NextRequest,
  { params }: { params: { orderId: string } }
) {
  const { orderId } = params;

  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
  });

  if (order) {
    // Convert order.price to a number using decimal.js
    const priceAsDecimal = new Decimal(order.price);
    
    // Ensure that priceAsDecimal is a valid number
    if (!priceAsDecimal.isNaN()) {
      const amount = priceAsDecimal.times(100).toNumber();
      
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });
  
      await prisma.order.update({
        where: {
          id: orderId,
        },
        data: { intent_id: paymentIntent.id },
      });
  
      return new NextResponse(
        JSON.stringify({ clientSecret: paymentIntent.client_secret }),
        { status: 200 }
      );
    }
  }
  
  // Handle the case where order.price is not a valid number
  return new NextResponse(
    JSON.stringify({ message: "Invalid order price!" }),
    { status: 400 }
  );
}
