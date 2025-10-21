"use server";
import { prisma } from "@/lib/prisma";
import { postToTelegram } from "@/utils/telegramPoster";

export async function createDeal(formData) {
  const name = formData.get("name");
  const imageSrc = formData.get("imageSrc");
  const originalPrice = parseFloat(formData.get("originalPrice"));
  const discountedPrice = parseFloat(formData.get("discountedPrice"));
  const discountPercentage = parseInt(formData.get("discountPercentage"));
  const link = formData.get("link");
  const rating = parseFloat(formData.get("rating"));
  const tags = formData.get("tags")?.split(",")?.map(tag => tag.trim()) || [];
  const category = formData.get("category");
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
        category,
        tags,
      },
    });

    // Send to Telegram in parallel (telegramPoster exists)
    await postToTelegram(deal);

    // Try optional social posters if they exist (dynamic import)
    try {
      const xMod = await import('@/utils/xPoster');
      if (xMod?.postToX) await xMod.postToX(deal);
    } catch (e) {
      // ignore missing optional module
    }
    try {
      const waMod = await import('@/utils/whatsappPoster');
      if (waMod?.postToWhatsApp) await waMod.postToWhatsApp(deal);
    } catch (e) {
      // ignore missing optional module
    }
    try {
      const igMod = await import('@/utils/instagramPoster');
      if (igMod?.postToInstagram) await igMod.postToInstagram(deal);
    } catch (e) {
      // ignore missing optional module
    }

    return deal;
  } catch (error) {
    console.error("Error creating deal:", error.message);
    throw new Error("Failed to create deal.");
  }
}