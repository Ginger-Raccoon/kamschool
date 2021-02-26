function buildDefaultButton(text, callback_data) {
	return [{
		text: text,
		callback_data: callback_data
	}]
}

function buildMessageOptions(buttons) {
	return {
		parse_mode: "HTML",
		disable_web_page_preview: false,
		reply_markup: JSON.stringify({
			inline_keyboard: buttons
		})
	}
}

function getClientInfo(message) {
	return {
		firstName: message.from.first_name,
		lastName: message.from.last_name,
		telegramId: message.hasOwnProperty('chat') ? message.chat.id : message.from.id
	};
}

module.exports = {
  buildDefaultButton,
  buildMessageOptions,
  getClientInfo
}