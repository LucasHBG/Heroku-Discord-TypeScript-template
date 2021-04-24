import { Client, RichEmbed } from "discord.js";

/**
 * Create a unique style for your rich-embed
 * or later modify this file to make it use options of
 * styles for various needs
 *
 * @param title is the name of the rich-embed
 * @param client library from discord.js
 */
export function generateRichEmbed(title: string, client: Client) {
  const avatarURL = client.user.avatarURL;
  const richEmbed = new RichEmbed()
    .setColor("#4848FF")
    .setTitle(title)
    .setFooter("Made by @LucasHBG")
    .setTimestamp();

  richEmbed.author = {
    name: client.user.username,
    icon_url: avatarURL,
  };

  return richEmbed;
}
