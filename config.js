const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "03002975158";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_39_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU2LFxuICAgICAgICA4NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNixcbiAgICAgICAgNTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIzLFxuICAgICAgICA4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDgwLFxuICAgICAgICA4NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjksXG4gICAgICAgIDYyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMCxcbiAgICAgICAgMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODYsXG4gICAgICAgIDU5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjksXG4gICAgICAgIDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDY1LFxuICAgICAgICA4NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMlVDcUUxMEx6YXBwemhlR0Y1OC9vNVp2bTUvWXdEWHkxa2pnY1JQOHBsaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVHpmZHVUYTBRVEdaX1BmZkpzWDAyQVwiLFxuICBcInBob25lSWRcIjogXCI4NDI1ZDg5OS0yZjdiLTQxMGYtYjQ3My03ZjgyMjYzZjE4ZmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzgsXG4gICAgICA5NixcbiAgICAgIDE0NixcbiAgICAgIDE5MixcbiAgICAgIDc4LFxuICAgICAgNTksXG4gICAgICAxNjgsXG4gICAgICA5LFxuICAgICAgMTg2LFxuICAgICAgMjUxLFxuICAgICAgMjQsXG4gICAgICAxNjgsXG4gICAgICAxNDUsXG4gICAgICA4NSxcbiAgICAgIDEwOSxcbiAgICAgIDIwLFxuICAgICAgMTMzLFxuICAgICAgMTYyLFxuICAgICAgMTQ3LFxuICAgICAgMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICAxMTIsXG4gICAgICAyMTMsXG4gICAgICAxNDksXG4gICAgICAxODMsXG4gICAgICAyNDYsXG4gICAgICA3MSxcbiAgICAgIDEwMyxcbiAgICAgIDEyNixcbiAgICAgIDE2NSxcbiAgICAgIDEwNyxcbiAgICAgIDE1MyxcbiAgICAgIDEzOCxcbiAgICAgIDM4LFxuICAgICAgMTQ1LFxuICAgICAgMjQ5LFxuICAgICAgMjMsXG4gICAgICAzNCxcbiAgICAgIDE3LFxuICAgICAgMTU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVEVjhDUkRUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMDI5NzUxNTg6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNYW5ncmlvNHVcIixcbiAgICBcImxpZFwiOiBcIjg5OTc5ODY2ODQ1MjY1OjYyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p1R212RUhFUGZmLzdjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTDYxbjBsdENYNHpXOFNzZ3ZEUEg1VW1yTVlWYVZsSlZHSThXM0VaVUwxMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1ZFRldU5vaUgwNk1aQmtGNFRJMVNLK2hPWU1zNDlmTDBVQVlydll2VjlHZTZDSDBiNEpUUTVIQm9hbVp5bjFSREJWWGVScmVsNUVsUkl2cGRwYVpDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxaEMrSnNhWFFvWWF2USt2d0xYeTBKOUhnWDh3S1JMMnhmelBHdXM3ckcyRFBBN1NZQVpId0h1WmY0NktUMDNsSHFXeEx2RVZsVU54Rlp2R1piZEtpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMDI5NzUxNTg6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODA0OTE0OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mangrio4u ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Mangrio4u",
  packname: process.env.PACK_NAME || "Mangrio4u",
  botname : process.env.BOT_NAME  || "Mangrio4u",
  ownername:process.env.OWNER_NAME|| "Mangrio4u",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
