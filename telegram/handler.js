let botUtils = require('./botUtils');

function startHandler(bot, messageOptions){
  console.log(bot);
	bot.on('callback_query', (query) => {
    let clientInfo = botUtils.getClientInfo(query);

		if (query.data === 'start') {
      const text = 'Привет, я Kam_school бот, давай я расскажу немного о своем создателе или перейдем сразу к записи?'
      bot.sendMessage(clientInfo.telegramId, text);
		}
	});
}

