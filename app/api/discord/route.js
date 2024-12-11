import { Client, GatewayIntentBits } from "discord.js";
import { NextResponse } from "next/server";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.login(process.env.DISCORD_BOT_TOKEN);

export async function POST(req) {
  const { messageContent } = await req.json();

  try {
    const channel = await client.channels.fetch("913596259036725268");
    await channel.send(messageContent);

    return NextResponse.json(
      { reply: `Message sent: ${messageContent}` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending message to Discord:", error);
    return NextResponse.json(
      { error: "Failed to send message to Discord bot" },
      { status: 500 }
    );
  }
}
