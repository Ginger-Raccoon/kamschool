const TelegramBot = require('node-telegram-bot-api');
const botUtils = require('./botUtils');
const { startHandler } = require('./handler');
const { YOUR_TOKEN } = process.env;


function createBot() {
	const bot = new TelegramBot({ YOUR_TOKEN }, { polling: true });
  bot.on("polling_error", (m) => console.log(m));


	let buttons = [
    botUtils.buildDefaultButton('Инфо', 'info'),
		botUtils.buildDefaultButton('Запись', 'signup'),
	];

	let messageOptions = botUtils.buildMessageOptions(buttons);

  function startHandler(messageOptions){
    bot.on('callback_query', (query) => {
      let clientInfo = botUtils.getClientInfo(query);
      if (query.data === 'start') {
        const text = 'Привет, я Kam_school бот, давай я расскажу немного о своем создателе или перейдем сразу к записи?'
        bot.sendMessage(clientInfo.telegramId, text);
      }
    });
  }

  bot.onText(new RegExp('\/start'), startHandler(messageOptions));

}
module.exports = createBot;