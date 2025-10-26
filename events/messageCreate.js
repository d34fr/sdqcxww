const config = require('../config');

module.exports = {
    name: "messageCreate",

    async execute(client, message) {
        if (message.author.bot) return;
        if (message.channel.type == "DM") return;

        const prefixKey = `prefix_${message.guild.id}`;
        const prefix = client.db.get(prefixKey) || config.bot.prefixe;

        if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
            message.channel.send(`Mon prefix sur le serveur est : \`${prefix}\``);
        }

        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).trim().split(' ');
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName);

        if (!command) return;

        try {
            command.execute(client, message, args);
        } catch (error) {
            console.error(error);
        }
    }
};
