const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_15_17_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDczLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk4LFxuICAgICAgICA4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDcyLFxuICAgICAgICA5NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDM1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjUxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5LFxuICAgICAgICAyLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI3LFxuICAgICAgICA2NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2MixcbiAgICAgICAgMjU1LFxuICAgICAgICA2NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA2OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM5LFxuICAgICAgICAzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAyNixcbiAgICAgICAgODYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA4NixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTM3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDkwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyLFxuICAgICAgICA2LFxuICAgICAgICA3NixcbiAgICAgICAgMjEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0MixcbiAgICAgICAgMTAxLFxuICAgICAgICA5NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIit5VHhWeDBVcUhlTDBWdlhXTWNsMDZGckl1dlloMzBsMzdXWXE2UmFURVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5YZ2QxT0V0UXFlaU9GUnZGZmU5bFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDk3NTAyMmMtOGI0NS00OGI4LTgxYTMtYWVhOWJkNzYzYTBiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYwLFxuICAgICAgMjIsXG4gICAgICAyNDgsXG4gICAgICAyMTYsXG4gICAgICAxMjUsXG4gICAgICAyOCxcbiAgICAgIDM1LFxuICAgICAgOTcsXG4gICAgICAxMjksXG4gICAgICA3OCxcbiAgICAgIDI0NyxcbiAgICAgIDE1NyxcbiAgICAgIDc1LFxuICAgICAgNzUsXG4gICAgICAyMjUsXG4gICAgICAxMTksXG4gICAgICA1NyxcbiAgICAgIDkzLFxuICAgICAgMTMwLFxuICAgICAgMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICAxMDIsXG4gICAgICAyNTQsXG4gICAgICA5LFxuICAgICAgOTMsXG4gICAgICA1MixcbiAgICAgIDIxLFxuICAgICAgNDAsXG4gICAgICAxNjYsXG4gICAgICAxOTEsXG4gICAgICA3NixcbiAgICAgIDI0NyxcbiAgICAgIDE4OSxcbiAgICAgIDk2LFxuICAgICAgMTU5LFxuICAgICAgMzcsXG4gICAgICAxNTQsXG4gICAgICA5MSxcbiAgICAgIDIyOSxcbiAgICAgIDkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVZOFk0Q1JLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDY4MTM2Mzg2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2Mjk2NDAwMzI2NjYxOToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ082dW42Z0ZFSWp1aGJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidGE5M1A4N29qZ1pUQktnQ1E4bFZxbXVQSDlmb2thN045RTdSdmIzU0NuQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJyK3dPUlI2WDFETEtrbVBiT0puQlVUTkprNnJNaHBPRlJGMWRTRXRUK3V0TFVML3IwOXc0dk8vRzhLM3FvR25jRzFsUmJUY21OdlVFaDNxZ2pEOXdCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHeldieWs0UURGY1B5QVVYcU1ETmw4dzNBZFpnZ1RzdlpuWHo3VHhzczhCNm1NN2p2czlKdFdMbzlJNU9TaEVwNnR6ckNyZW9pU1FXVE9xLzd6N1FpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY4MTM2Mzg2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTc2MDY1MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
