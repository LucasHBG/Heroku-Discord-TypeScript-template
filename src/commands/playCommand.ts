import Command from "./commandInterface";
import { Message } from "discord.js";

export class PlayCommand implements Command {
  commandNames = ["play", "tocar"];

  help(commandPrefix: string): string {
    return `Use ${commandPrefix}play [link] para ouvir uma música.`;
  }

  async run(message: Message, args: Array<String>): Promise<void> {
    const client = message.client;
    const member = message.member;

    const query = args.join('');
    await message.reply("fala carai");
  }

}
