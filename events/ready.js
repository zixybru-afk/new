const { ActivityType } = require('discord.js');

const statuses = [
  { name: '/help', type: ActivityType.Watching },
  { name: 'Diyon On Top', type: ActivityType.Watching },
  { name: 'Ready To Assist', type: ActivityType.Playing },
];

let statusIndex = 0;

module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`✅ Logged in as ${client.user.tag}`);
    console.log(`📡 Serving ${client.guilds.cache.size} guild(s)`);

    function rotate() {
      const s = statuses[statusIndex % statuses.length];
      client.user.setActivity(s.name, { type: s.type });
      statusIndex++;
    }
    rotate();
    setInterval(rotate, 30_000);
  },
};
