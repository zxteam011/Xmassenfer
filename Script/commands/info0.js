module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Ialamick Chat", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/WXQIgMz.jpeg", 
            
            "https://i.postimg.cc/QdgH08j6/Messenger-creation-C2-A39-DCF-A8-E7-4-FC7-8715-2559476-FEEF4.gif", 
            
            "https://i.imgur.com/ybM9Wtr.jpeg",
            
            "https://i.imgur.com/k8nes6h.jpeg"];
  
var callback = () => api.sendMessage({body:`•—»✨𝐀𝐝𝐦𝐢𝐧 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺
•┄┅═════❁🌺❁═════┅┄•

 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭

𝐁𝐨𝐭 𝐀𝐝𝐦𝐢𝐧 : 𝐂𝐘𝐁𝐄𝐑 𝐁𝐎𝐓 𝐂𝐎𝐌𝐌𝐔𝐍𝐈𝐓𝐘

𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 : Ullash ッ

•┄┅══❁CONCATET❁══┅┄• 
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐈𝐝: https://www.facebook.com/9w3bzcf1cr

𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐈𝐝: https://www.facebook.com/profile.php?id=100086680386976

𝐆𝐢𝐭𝐇𝐮𝐛  : https://github.com/cyber-ullash

𝐖𝐏 𝐍𝐮𝐦𝐛𝐞𝐫 : 01859*****58

𝐒𝐞𝐚𝐫𝐜𝐡 𝐆𝐨𝐨𝐠𝐥𝐞 : এখনো এত বড় সেলিব্রিটি হই নাই 🤡, যে কেউ গুগলে সার্চ করবে 💔🌚

𝐖𝐚𝐛 𝐒𝐢𝐭𝐞 𝐋𝐢𝐧𝐤 : https://bio.link/cyber_ullash

•┄┅═════❁🌺❁═════┅┄•\n🌺✨𝐎𝐭𝐡𝐞𝐫𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺\n •┄┅═════❁🌺❁═════┅┄•

TYPE /admin 

𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : ${global.config.BOTNAME}

𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱 : ${global.config.PREFIX} \\নিচের ইনফরমেশন গুলো পরিবর্তন করবেন না 

𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 : Ullash ッ\n\n 𝐁𝐨𝐭 Fork link:- https://github.com/cyber-ullash/CYBER-BOT-COMMUNITY.git \n\n 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 :- https://youtube.com/@cyberbotcommunity?si=vDIyqsB882bcVOt3

•—»✨ 𝐔𝐩𝐭𝐢𝐦𝐞

𝐓𝐨𝐝𝐚𝐲 𝐈𝐬 𝐓𝐢𝐦𝐞 : ${juswa} 

𝐁𝐨𝐭 𝐈𝐬 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 ${hours}:${minutes}:${seconds}.

𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐔𝐬𝐢𝐧𝐠  ༄🌺\n｢🕋｣${global.config.BOTNAME}｢🕋｣`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
