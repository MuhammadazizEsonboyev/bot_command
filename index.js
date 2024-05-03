const TelegramBot = require('node-telegram-bot-api');
const token = '6872811948:AAF5e9uHurpuwWJin9B31pWpbCpzfAmadd0';
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
