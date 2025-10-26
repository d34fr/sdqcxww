module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(`Bot connecté: ${client.user.username}`);
        console.log(`ID: ${client.user.id}`);
        console.log(`Invitation: https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`);
        console.log(`Serveurs: ${client.guilds.cache.size}`);
    }
};
