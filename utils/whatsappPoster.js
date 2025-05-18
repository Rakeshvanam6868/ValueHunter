// utils/whatsappPoster.js

import axios from 'axios';

export async function postToWhatsApp(deal) {
  const message = `🔥 *New Deal Alert!* 
*${deal.name}*
₹${deal.discountedPrice} (Was ₹${deal.originalPrice})
🔗 ${deal.link}`;

  const url = `https://api.twilio.com/2010-04-01/Accounts/ ${process.env.TWILIO_ACCOUNT_SID}/Messages.json`;

  const data = new URLSearchParams({
    To: 'whatsapp:+91XXXXXXXXXX', // Replace with your WhatsApp number
    From: process.env.TWILIO_WHATSAPP_NUMBER,
    Body: message,
  });

  try {
    await axios.post(url, data.toString(), {
      auth: {
        username: process.env.TWILIO_ACCOUNT_SID,
        password: process.env.TWILIO_AUTH_TOKEN,
      },
    });

    console.log("✅ Posted to WhatsApp:", deal.name);
  } catch (error) {
    console.error("❌ Failed to post to WhatsApp:", error.message);
  }
}