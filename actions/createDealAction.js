"use server";
import { prisma } from "@/lib/prisma";
import { postToTelegram } from "@/utils/telegramPoster";

export async function createDeal(formData) {
  const name = formData.get("name");
  const imageSrc = formData.get("imageSrc");
  const originalPrice = parseFloat(formData.get("originalPrice"));
  const discountedPrice = parseFloat(formData.get("discountedPrice"));
  const discountPercentage = parseInt(formData.get("discountPercentage"));
  const timeAgo = formData.get("timeAgo") || "Just now";
  const isTopDeal = formData.get("isTopDeal") === "on";

  // Validate inputs
  if (
    !name ||
    !imageSrc ||
    isNaN(originalPrice) ||
    isNaN(discountedPrice) ||
    isNaN(discountPercentage)
  ) {
    throw new Error("All fields are required and must be valid.");
  }

  const expiresAt = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000); // 2 weeks

  try {
    const deal = await prisma.deal.create({
      data: {
        name,
        imageSrc,
        originalPrice,
        discountedPrice,
        discountPercentage,
        timeAgo,
        isTopDeal,
        expiresAt,
      },
    });

    // Send to Telegram in parallel
    await postToTelegram(deal);

    return deal;
  } catch (error) {
    console.error("Error creating deal:", error.message);
    throw new Error("Failed to create deal.");
  }
}