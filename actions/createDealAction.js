"use server";
import { prisma } from "@/lib/prisma";
import { postToTelegram } from "@/utils/telegramPoster";
import { postToX } from "@/utils/xPoster";
import { postToWhatsApp } from "@/utils/whatsappPoster";
import { postToInstagram } from "@/utils/instagramPoster";

export async function createDeal(formData) {
  const name = formData.get("name");
  const imageSrc = formData.get("imageSrc");
  const originalPrice = parseFloat(formData.get("originalPrice"));
  const discountedPrice = parseFloat(formData.get("discountedPrice"));
  const discountPercentage = parseInt(formData.get("discountPercentage"));
  const link = formData.get("link");
  const rating = parseFloat(formData.get("rating"));
  // const isTopDeal = formData.get("isTopDeal") === "on";

  // Validate inputs
  if (
    !name ||
    !imageSrc ||
    isNaN(originalPrice) ||
    isNaN(discountedPrice) ||
    isNaN(discountPercentage)||
    !(link)||
    isNaN(rating)
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
        link,
        rating,
        isTopDeal: rating >= 4.0,
        expiresAt,
      },
    });

    // Send to Telegram in parallel
    await postToTelegram(deal);
    // await postToX(deal);
    // Inside try block after creating the deal
    // await postToWhatsApp(deal);
    // await postToInstagram(deal);

    return deal;
  } catch (error) {
    console.error("Error creating deal:", error.message);
    throw new Error("Failed to create deal.");
  }
}