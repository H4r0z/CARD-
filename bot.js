const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Bin Ready!")
    bot.user.setActivity("Card Bot | c!help")
        
});

bot.on('message', msg => {
    if (msg.author.bot || !msg.content.startsWith("c!")) returns;
    const args = msg.content.slice("c!".length).split(" ");
    const command = args.shift().toLowerCase();

    if (command == "ping"){
        let pingembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("Fear Fear,Boop-Beep Gateway")
        .addField("Gateway", `**${bot.ping}ms**`)
        .setThumbnail(bot.user.avatarURL)
        .setFooter("Card Bot")
        msg.channel.send(pingembed)
    };

})

bot.login("NjA3NTY2MzcwMzYzNjcwNTQ5.XUrSzg.Q_OLkiWGUkdRgAhr6n-HItz-NuU")
