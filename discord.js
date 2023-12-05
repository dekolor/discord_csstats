import { Client, GatewayIntentBits, AttachmentBuilder } from "discord.js";
import "dotenv/config";
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.guilds.fetch("362257960094924801").then((data) => {
    data.channels.fetch("1181623967145009193").then(async (data) => {
      const attachment = new AttachmentBuilder("./pics/76561198255981822.png", {
        name: "hehe.png",
      });
      const attachment2 = new AttachmentBuilder(
        "./pics/76561198078474477.png",
        {
          name: "hehe.png",
        }
      );
      const attachment3 = new AttachmentBuilder(
        "./pics/76561198193500962.png",
        {
          name: "hehe.png",
        }
      );
      const attachment4 = new AttachmentBuilder(
        "./pics/76561198096099429.png",
        {
          name: "hehe.png",
        }
      );
      const attachment5 = new AttachmentBuilder(
        "./pics/76561198056494497.png",
        {
          name: "hehe.png",
        }
      );
      const attachment6 = new AttachmentBuilder(
        "./pics/76561199028571899.png",
        {
          name: "hehe.png",
        }
      );
      await data.bulkDelete(100);
      data.send("Statusuri actualizate: " + new Date().toLocaleString());
      data.send({
        files: [
          attachment,
          attachment2,
          attachment3,
          attachment4,
          attachment5,
          attachment6,
        ],
      });
      client.destroy();
    });
  });
});

client.login(process.env.DISCORD_TOKEN);
