const { Client, Intents, Collection } = require('discord.js');
const config = require('./config');
const { readdirSync } = require('fs');
const SimpleDB = require('./db');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_INVITES
    ],
    partials: ["USER", "CHANNEL", "GUILD_MEMBER", "MESSAGE"]
});

client.db = new SimpleDB('./protection.json');
client.config = config;
client.commands = new Collection();

const antiraidFiles = readdirSync('./antiraid').filter(file => file.endsWith('.js'));
for (const file of antiraidFiles) {
    const command = require(`./antiraid/${file}`);
    client.commands.set(command.name, command);
}

const eventFiles = readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(client, ...args));
    } else {
        client.on(event.name, (...args) => event.execute(client, ...args));
    }
}

process.on("unhandledRejection", (reason, p) => {
    if (reason.code === 50007) return;
    if (reason.code == 10062) return;
    if (reason.code == 10008) return;
    if (reason.code == 50013) return;
    console.log(reason, p);
});

process.on("uncaughtException", (err, origin) => {
    console.log(err, origin);
});

client.login(config.bot.token);
