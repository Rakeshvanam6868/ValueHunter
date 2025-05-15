import { Telegraf } from "telegraf";
// import { TELEGRAM_BOT_TOKEN } from "@/utils/env";

export const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.catch((err, ctx) => {
  console.error(`Error while handling update ${ctx.update.update_id}:`, err);
});