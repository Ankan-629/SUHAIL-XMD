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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_46_11_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgwLFxuICAgICAgICA0NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMixcbiAgICAgICAgMTE4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjExLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNixcbiAgICAgICAgOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NixcbiAgICAgICAgMjM3LFxuICAgICAgICA4MCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDksXG4gICAgICAgIDk2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNixcbiAgICAgICAgNjQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI5LFxuICAgICAgICAyNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICA2MCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NixcbiAgICAgICAgMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDYyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMixcbiAgICAgICAgNTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxODgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSHJWR1ZUZThGRitXWGFjcjRrMjFkTDFlYmwxTHQvOFpZR2FSUUpmZytJYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZTJrd3RZbmpTbTZuXzY3XzRsbHBkd1wiLFxuICBcInBob25lSWRcIjogXCI0YjNhZGY0ZC1mYjc3LTRiMGQtYjA2Ni01MjYzN2UzMWQ2MjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgMTU0LFxuICAgICAgMjIzLFxuICAgICAgMTUxLFxuICAgICAgMjI5LFxuICAgICAgMTcyLFxuICAgICAgMzEsXG4gICAgICAyMTYsXG4gICAgICAxOTQsXG4gICAgICAxNTksXG4gICAgICA1OCxcbiAgICAgIDE2MSxcbiAgICAgIDE1LFxuICAgICAgMjUsXG4gICAgICAyLFxuICAgICAgMTAyLFxuICAgICAgMTE2LFxuICAgICAgMzQsXG4gICAgICA4NCxcbiAgICAgIDE3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDcsXG4gICAgICAyMjUsXG4gICAgICAxOTcsXG4gICAgICAxNDksXG4gICAgICAxODUsXG4gICAgICA2NSxcbiAgICAgIDExOCxcbiAgICAgIDEwOSxcbiAgICAgIDIyLFxuICAgICAgMTQ1LFxuICAgICAgMTM1LFxuICAgICAgMTQwLFxuICAgICAgMTg0LFxuICAgICAgMTk2LFxuICAgICAgMTM2LFxuICAgICAgOTYsXG4gICAgICAxOTAsXG4gICAgICAyNDIsXG4gICAgICA2LFxuICAgICAgMjM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFQMU5KTjhWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc5MDg0Mjk5NDU6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBIE4gSyBBIE4gwrNcIixcbiAgICBcImxpZFwiOiBcIjEyODg3OTQ1Mjc5OTE2ODoyOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKcWkyb2tFRU55M2tyb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZOeS8rNjRaTHRudmNhM0hGRjJvcjQxTGwraE5nbXB2Vjh1dHFzMTdHVWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ3hQWUpWREd0K01UODhwMktXSUczUkdqUFRjTlFqWG5hN3l4OFFPNlMzd2NxeWtsbmU2RW1vY1lrbDVOeFZNbzhhVFM2U0c3ZUQ5RC9Kam9kUmt1QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieTk1NzhycWtPem9DYzN2MFhXTHdoT1duOGZKZUVIQTZYWS9JWUtuL0FFcUphbDFybHFiVk1PYTFXSUNIejZncW9kU29BS3FaalgzSW1HOWRNTTNGakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3OTA4NDI5OTQ1OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI1NDk2MDFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
