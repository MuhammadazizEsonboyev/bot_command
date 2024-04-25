const TelegramBot = require('node-telegram-bot-api');
const token = '7029072057:AAG0ds2x2zE8i3HA9K7sZZjNRw9TbG1SQgE';
const bot = new TelegramBot(token, { polling: true });
bot.on('message', (msg) => {
    const chatId = msg.chat.id
    if (msg.text === "/start") {
        bot.sendMessage(chatId, "Salom " + msg.chat.first_name + msg.chat.last_name + " bizning botimizga xush kelibsiz!")
    } else if (msg.text === "/help") {
        bot.sendMessage(chatId, "Salom " + msg.chat.first_name + msg.chat.last_name + "  qanday yordam bera olaman")
    } else {
        bot.sendMessage(chatId, "Xato kiritdingiz!")
    }
});``