const TelegramBot = require("node-telegram-bot-api");

// Initialize bot
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false });

// Telegram chat ID from .env
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

/**
 * Sends a deal to Telegram with image and formatted caption
 * @param {Object} deal - Deal object with name, imageSrc, etc.
 */
const postToTelegram = async (deal) => {
  if (!TELEGRAM_CHAT_ID || !process.env.TELEGRAM_BOT_TOKEN) {
    console.warn("Telegram credentials missing. Skipping post.");
    return;
  }

  const offer = deal.discountPercentage;
  const title = deal.name;
  const originalPrice = deal.originalPrice.toFixed(2);
  const price = deal.discountedPrice.toFixed(2);
  const link = `${process.env.NEXT_PUBLIC_SITE_URL}/deals/${deal.id}`;
  const image = deal.imageSrc;

  const caption = `
🛍️ *${title}*  
🎯 ${offer}% OFF!  

💰 MRP: ₹${originalPrice}  
💸 Deal Price: ₹${price}  
🔗 [👉 Buy Now](${link})
`;

  try {
    await bot.sendPhoto(TELEGRAM_CHAT_ID, image, {
      caption,
      parse_mode: "Markdown",
      disable_web_page_preview: true,
    });
    console.log("✅ Posted to Telegram:", title);
  } catch (error) {
    console.error("❌ Failed to send to Telegram:", error.message);
  }
};

module.exports = { postToTelegram };