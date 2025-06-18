import { prisma } from "@/lib/prisma";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  // Filters
  const isTopDeal = searchParams.get("isTopDeal") === "true";
  const category = searchParams.get("category");
  const minPrice = searchParams.get("minPrice");
  const maxPrice = searchParams.get("maxPrice");
  const minDiscount = searchParams.get("minDiscount");
  const maxDiscount = searchParams.get("maxDiscount");
  const search = searchParams.get("search");
  const sortBy = searchParams.get("sortBy");
  const skip = parseInt(searchParams.get("skip")) || 0;
  const take = parseInt(searchParams.get("take")) || 12;

  let where = {
    expiresAt: { gt: new Date() },
  };

  if (isTopDeal) where.isTopDeal = true;
  if (category) where.category = category;

  if (search) {
    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { tags: { hasSome: [search] } }
    ];
  }

  if (minPrice || maxPrice) {
    where.originalPrice = {};
    if (minPrice) where.originalPrice.gte = parseFloat(minPrice);
    if (maxPrice) where.originalPrice.lte = parseFloat(maxPrice);
  }

  if (minDiscount || maxDiscount) {
    where.discountPercentage = {};
    if (minDiscount) where.discountPercentage.gte = parseInt(minDiscount, 10);
    if (maxDiscount) where.discountPercentage.lte = parseInt(maxDiscount, 10);
  }

  let orderBy = {};
  if (sortBy === "price-low-to-high") {
    orderBy = { discountedPrice: "asc" };
  } else if (sortBy === "price-high-to-low") {
    orderBy = { discountedPrice: "desc" };
  } else {
    orderBy = { createdAt: "desc" };
  }

  try {
    const deals = await prisma.deal.findMany({
      where,
      orderBy,
      skip,
      take,
    });

    return Response.json(deals);
  } catch (error) {
    console.error("Error fetching deals:", error);
    return Response.json({ error: "Failed to fetch deals" }, { status: 500 });
  }
}