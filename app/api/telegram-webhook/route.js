import { bot } from "@/lib/bot";

// Enable Webhook
export async function POST(request) {
  try {
    const body = await request.json();
    await bot.handleUpdate(body);
    return Response.json({ status: "ok" });
  } catch (err) {
    console.error("Webhook error:", err.message);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}