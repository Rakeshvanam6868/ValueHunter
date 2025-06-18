// app/api/instacards/[id]/route.js
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// DELETE: Delete a card
export async function DELETE(request, { params }) {
  const { id } = params;

  if (!id || isNaN(parseInt(id))) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    await prisma.instaCard.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: "Card deleted" });
  } catch (error) {
    console.error("Error deleting card:", error);
    return NextResponse.json({ error: "Card not found or could not be deleted" }, { status: 500 });
  }
}

// PATCH: Update a card
export async function PATCH(request, { params }) {
  const { id } = params;
  const body = await request.json();
  const { title, image, link } = body;

  if (!id || isNaN(parseInt(id)) || !title || !image || !link) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const updatedCard = await prisma.instaCard.update({
      where: { id: parseInt(id) },
      data: { title, image, link },
    });

    return NextResponse.json(updatedCard);
  } catch (error) {
    console.error("Error updating card:", error);
    return NextResponse.json({ error: "Card not found or could not be updated" }, { status: 500 });
  }
}