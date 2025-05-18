// utils/xPoster.js

import { TwitterApi } from 'twitter-api-v2';

export async function postToX(deal) {
  const client = new TwitterApi({
    appKey: process.env.X_API_KEY,
    appSecret: process.env.X_API_SECRET_KEY,
    accessToken: process.env.X_ACCESS_TOKEN,
    accessSecret: process.env.X_ACCESS_TOKEN_SECRET,
  });

  try {
    const tweet = `🔥 New Deal: ${deal.name}
₹${deal.discountedPrice.toFixed(2)} (Was ₹${deal.originalPrice.toFixed(2)})
🔗 ${deal.link}

#${deal.name.replace(/\s+/g, '')} #Deals`;

    const trimmedTweet = tweet.length > 280 ? tweet.slice(0, 277) + "..." : tweet;

    await client.v2.tweet(trimmedTweet);
    console.log("✅ Posted to X:", deal.name);
  } catch (error) {
    console.error("❌ Failed to post to X:", error?.response?.data || error.message);
  }
}