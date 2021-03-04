const Markup = require('telegraf/markup');

let getMainMenu = function() {
  return Markup.keyboard([
    ['Обо мне', 'Хочу поступить']
  ]).resize().extra()
}

let toBegining = function() {
  return Markup.keyboard([
    ['В начало', 'Хочу поступить']
  ]).resize().extra()
}

let yesNoKeyboard = function () {
  return Markup.inlineKeyboard([
      Markup.callbackButton('Да', 'yes'),
      Markup.callbackButton('Изменить данные', 'repeat'),
      Markup.callbackButton('В начало', '/start')
  ], {columns: 2}).extra()
}

let removeKeyBoard = function() {
  return Markup.removeKeyboard().extra()
}

module.exports = {
  getMainMenu: getMainMenu,
  toBegining: toBegining,
  yesNoKeyboard: yesNoKeyboard,
  removeKeyBoard: removeKeyBoard
};