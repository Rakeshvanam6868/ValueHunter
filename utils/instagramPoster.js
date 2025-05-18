// utils/instagramPoster.js

import axios from 'axios';

export async function postToInstagram(deal) {
  const PAGE_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
  const INSTAGRAM_BUSINESS_ACCOUNT_ID = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  const caption = `🔥 New Deal: ${deal.name}
₹${deal.discountedPrice} (Was ₹${deal.originalPrice})
🔗 ${deal.link}

#deals #onlineShopping #discount`;

  try {
    // Step 1: Upload media container
    const creationResponse = await axios.post(
      `https://graph.facebook.com/v19.0/ ${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media`,
      null,
      {
        params: {
          image_url: deal.imageSrc,
          caption,
          access_token: PAGE_ACCESS_TOKEN,
        },
      }
    );

    const creationId = creationResponse.data.id;

    // Step 2: Publish media
    await axios.post(
      `https://graph.facebook.com/v19.0/ ${INSTAGRAM_BUSINESS_ACCOUNT_ID}/media_publish`,
      null,
      {
        params: {
          creation_id: creationId,
          access_token: PAGE_ACCESS_TOKEN,
        },
      }
    );

    console.log("✅ Posted to Instagram:", deal.name);
  } catch (error) {
    console.error("❌ Failed to post to Instagram:", error.message);
  }
}