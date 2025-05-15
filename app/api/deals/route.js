import { prisma } from "@/lib/prisma";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const isTopDeal = searchParams.get("isTopDeal") === "true";
  const minDiscount = searchParams.get("minDiscount");

  let where = {
    expiresAt: { gt: new Date() }, // Only active deals
  };

  if (isTopDeal) where.isTopDeal = true;
  if (minDiscount) where.discountPercentage = { gte: parseInt(minDiscount, 10) };

  try {
    const deals = await prisma.deal.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
    });

    return Response.json(deals);
  } catch (error) {
    console.error("Error fetching deals:", error);
    return Response.json({ error: "Failed to  deals" }, { status: 500 });
  }
}