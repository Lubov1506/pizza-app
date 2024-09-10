import { prisma } from "@/prisma/prisma-client";
import { updateCartTotalAmount } from "@/shared/lib";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const body = (await req.json()) as { quantity: number };
    const token = req.cookies.get("cartToken")?.value;
    if (!token) {
      return NextResponse.json({ message: "No token" }, { status: 401 });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: id,
      },
    });

    if (!cartItem) {
      return NextResponse.json(
        { message: "Cart item not found" },
        { status: 404 }
      );
    }

    await prisma.cartItem.update({
      where: {
        id: id,
      },
      data: {
        quantity: body.quantity,
      },
    });

    const updatedUserCart = await updateCartTotalAmount(token);
    return NextResponse.json(updatedUserCart);
  } catch (e) {
    console.log("[CART PATCH] Server error", e);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const token = req.cookies.get("cartToken")?.value;
    if (!token) {
      return NextResponse.json({ message: "No token" }, { status: 401 });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: id,
      },
    });

    if (!cartItem) {
      return NextResponse.json("Cart item not found", { status: 404 });
    }

    await prisma.cartItem.delete({
      where: {
        id: id,
      },
    });

    const updatedUserCart = await updateCartTotalAmount(token);
    return NextResponse.json(updatedUserCart);
  } catch (e) {
    console.log("[CART DELETE] Server error", e);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
