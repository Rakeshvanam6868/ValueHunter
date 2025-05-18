const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false });
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

/**
 * Sends a stylized deal card to Telegram with button
 * @param {Object} deal - Deal object
 */
const postToTelegram = async (deal) => {
  if (!TELEGRAM_CHAT_ID || !process.env.TELEGRAM_BOT_TOKEN) {
    console.warn("Telegram credentials missing. Skipping post.");
    return;
  }

  const { name, imageSrc, originalPrice, discountedPrice, discountPercentage, link} = deal;

  const formattedOriginal = Number(originalPrice).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
  });
  const formattedDiscounted = Number(discountedPrice).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
  });

  // const link = `https://amzn.to/4jT4ipE`;

  const caption = `
🎉 <b>🔥 HOT DEAL ALERT 🔥</b>

🛍️ <b>${name}</b>

❌ <s>MRP:</s> ₹${formattedOriginal}

💰 <b>Deal Price:</b> ₹${formattedDiscounted}
🎯 <b>${discountPercentage}% OFF</b>
`;

  try {
    await bot.sendPhoto(TELEGRAM_CHAT_ID, imageSrc, {
      caption,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "🛒 Buy Now",
              url: link,
            },
          ],
        ],
      },
    });

    console.log("✅ Posted to Telegram:", name);
  } catch (error) {
    console.error("❌ Failed to send to Telegram:", error.message);
  }
};

module.exports = { postToTelegram };
