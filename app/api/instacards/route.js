// app/api/instacards/route.js
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// POST: Create new card
export async function POST(request) {
  const body = await request.json();
  const { title, image, link } = body;

  if (!title || !image || !link) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const newCard = await prisma.instaCard.create({
      data: { title, image, link },
    });

    return NextResponse.json(newCard, { status: 201 });
  } catch (error) {
    console.error("Error creating card:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// app/api/instacards/route.js

let cachedData = {};
let lastFetched = 0;
const CACHE_TTL = 1000 * 60 * 5; // 5 minutes

export async function GET(request) {
  const now = Date.now();
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page")) || 1;

  if (cachedData[page] && now - lastFetched < CACHE_TTL) {
    return NextResponse.json(cachedData[page]);
  }

  const limit = 12;
  const skip = (page - 1) * limit;

  try {
    const [cards, total] = await Promise.all([
      prisma.instaCard.findMany({
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.instaCard.count(),
    ]);

    const result = { cards, pagination: { page, limit, total } };
    cachedData[page] = result;
    lastFetched = now;

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching cards:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}