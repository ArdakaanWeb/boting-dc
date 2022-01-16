const Discord-require("discord.js");

const client=new Discord.Client();
clien.login("OTI5NzI5NzcyNDA0MjMyMjQy.YdrkUw.clL3gbvZ7eDVpRLhXtcdOa4k1w0")
client.on("message",message=>{
  console.log("gelem mesaj"+message.content)
  
  if(message==="!sa")
  message.channel.send("as")
  
  if(message==="!profilfotom")
  message.reply(message.auther.displayAvatarURL())
})
