require("dotenv").config();
const { Telegraf } = require("telegraf");
const axios = require("axios");

const bot = new Telegraf(process.env.BOT_TOKEN);

async function uploadToImgur(fileUrl) {
    try {
        const response = await axios({
            method: "get",
            url: fileUrl,
            responseType: "arraybuffer",
        });

        const imgurResponse = await axios.post(
            "https://api.imgur.com/3/upload",
            {
                image: Buffer.from(response.data).toString("base64"),
                type: "base64",
            },
            {
                headers: {
                    Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
                },
            }
        );

        return imgurResponse.data.data.link;
    } catch (error) {
        console.error("Imgur Upload Error:", error);
        return null;
    }
}

bot.on("photo", async (ctx) => {
    const fileId = ctx.message.photo[ctx.message.photo.length - 1].file_id;
    const fileLink = await ctx.telegram.getFileLink(fileId);

    const imgurUrl = await uploadToImgur(fileLink.href);
    if (imgurUrl) {
        ctx.reply(`✅ **Uploaded to Imgur:**\n${imgurUrl}`);
    } else {
        ctx.reply("❌ **Failed to upload image to Imgur.**");
    }
});

bot.on("video", async (ctx) => {
    const fileId = ctx.message.video.file_id;
    const fileLink = await ctx.telegram.getFileLink(fileId);

    const imgurUrl = await uploadToImgur(fileLink.href);
    if (imgurUrl) {
        ctx.reply(`🎥 **Uploaded to Imgur:**\n${imgurUrl}`);
    } else {
        ctx.reply("❌ **Failed to upload video to Imgur.**");
    }
});

bot.launch();
console.log("🤖 Bot is running...");
