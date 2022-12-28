import config from "@proxtx/config";

import { Client, GatewayIntentBits } from "discord.js";
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

export const kickUser = (pwd, gId, uId) => {
  if (pwd != config.pwd) return;
  const Guild = client.guilds.cache.get(gId);
  const Member = Guild.members.cache.get(uId);
  Member.voice.disconnect();
};

client.login(config.token);
