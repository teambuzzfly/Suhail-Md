uhconst fs = require('fs-extra')
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
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_47_06_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0LFxuICAgICAgICA3NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAwLFxuICAgICAgICA1NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDcsXG4gICAgICAgIDU4LFxuICAgICAgICAyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkyLFxuICAgICAgICA3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI0LFxuICAgICAgICA2MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNixcbiAgICAgICAgMTUxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDM4LFxuICAgICAgICAwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzYsXG4gICAgICAgIDM4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDg1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDYyLFxuICAgICAgICA2NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk1LFxuICAgICAgICA0NixcbiAgICAgICAgNixcbiAgICAgICAgNixcbiAgICAgICAgMTU1LFxuICAgICAgICA1MixcbiAgICAgICAgMTIzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIxLFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDksXG4gICAgICAgIDgxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjIsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsWnFFeGhOOHQ2RmRSUHp1UXlZcWNudWFTZWlub1h1WGdkWjFjMEZZUHF3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMzU0NzE0MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjcwQTJCOUU2QzM4MDQ2MjI1QzUzQUQ2MDRFRTZFQzIwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODY0NjQyMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyYmp4UlFYZVJBNktyajlmQ2pWZzlnXCIsXG4gIFwicGhvbmVJZFwiOiBcImNiMTQ0ZTRiLTQ3OTMtNGZkMy05NDQ5LWY0OTZlZmQ1ZTMzZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICA1NCxcbiAgICAgIDE5NyxcbiAgICAgIDEyNCxcbiAgICAgIDQxLFxuICAgICAgMTA0LFxuICAgICAgMTU0LFxuICAgICAgMTAzLFxuICAgICAgMTMyLFxuICAgICAgMzYsXG4gICAgICA0NCxcbiAgICAgIDE3NixcbiAgICAgIDI2LFxuICAgICAgMjA1LFxuICAgICAgMjUsXG4gICAgICAyMjksXG4gICAgICAxNDgsXG4gICAgICAxODcsXG4gICAgICAxMTAsXG4gICAgICAxMDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEzLFxuICAgICAgNTQsXG4gICAgICA3NyxcbiAgICAgIDE3MyxcbiAgICAgIDE3OCxcbiAgICAgIDY0LFxuICAgICAgMTgsXG4gICAgICAyNTEsXG4gICAgICA4NCxcbiAgICAgIDExNSxcbiAgICAgIDEwMyxcbiAgICAgIDEzNixcbiAgICAgIDE2OCxcbiAgICAgIDEyNyxcbiAgICAgIDIwNixcbiAgICAgIDgxLFxuICAgICAgMTgyLFxuICAgICAgMyxcbiAgICAgIDIyNixcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkY1RFNFQ1ZUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM1NDcxNDI3OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTW92ZVwiLFxuICAgIFwibGlkXCI6IFwiNDQ2ODkzMDI1NDAzNjY6MThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXk3N01FR0VJL3R3Yk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVSkpuZy9vUHVHL1oxeDcyd3JTUnd6enFvZnRxSW5KOWRhK2xIR2YzdjFnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkY3NGo2d1h5bWZaRythWnoxNndHR2VYS2dGWVVBQ2xQOVRJLzNiV1pKY21DczRlMHJNM2VtS3pMNEhkQ04yTldZWjdvWlZNVDBiQ0RTWWZWYk5wV0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlc2ZklHL2lZejZCak05RkZjeXNiOVY5dWM0VDRXYndKeCtTRkhHdjZDNStPcktPejQwQUt1cG93SUo5VXk2Rk5lelR6SnZwSm5CU1ZqUXYxUXdmRUJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzU0NzE0Mjc6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODY0NjQxOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1rVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWtULmpzb24iOiAie1wia2V5RGF0YVwiOlwieTZKblJ4azJFYUxzajdFSjliSzJJclc5TEtFUUI5ODZUaTVpaXkrUmJCdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzQ4NzA0NjUxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE4NjQ2MzUwNTk2XCJ9Igp9"  // PUT your SESSION_ID 


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
