const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Muhammed Demirel Yardım Menüsü`, client.user.avatarURL())
  .setColor("green")
  .setThumbnail(client.user.avatarURL())
  .setDescription("Bu Bot Muhammed Demirel Tarafından Paylaşılmıştır!")
  .addField(" • Kategoriler:", `> • !kullanıcı: **Kullanıcı yardım menüsünü gösterir.**\n > • !moderasyon: **Moderasyon yardım menüsünü gösterir.**\n > • !kayıtsistemi: ** Kayıt sistemi yardım menüsünü gösterir.**\n > • !korumasistemi** Koruma sistemi yardım menüsünü gösterir.**\n > • !logosistemi: ** Logo sistemi yardım menüsünü gösterir.**\n > • !çekilişsistemi: ** Çekiliş sistemi yardım menüsünü gösterir.**\n > • !özelodasistemi: ** Özel Oda sistemi yardım menüsünü gösterir.** \n > • !profilsiistemi: **Profila sistemi yardım menüsünü gösterir.** \n > • !ekonomisistemi: ** Ekonomi sistemi yardım menüsünü gösterir.**  \n > • !radyo: ** Radyo sistemi yardım menüsünü gösterir.**`)
  .addField("youtube.com/asreaper" ,"Bu Bot Muhammed Demirel Kanalında Paylaşılmıştır!")
  .addField(" • Linkler:", "• [Muhammed Demirel](https://youtube.com/asreaper)")
  .setImage("")
.setFooter("Muhammed Demirel", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "",
    usage: ""
}