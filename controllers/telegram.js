const TelegramBot = require('node-telegram-bot-api');
const { YOUR_TOKEN } = process.env;
const bot = new TelegramBot(YOUR_TOKEN, { polling:  });

bot.on(/echo (.+)/, function (msg, match) {
  console.log('я родился1')
  var chatId = msg.chat.id; // Получаем ID отправителя
  var resp = match[1]; // Получаем текст после /echo
  bot.sendMessage(chatId, resp);
});