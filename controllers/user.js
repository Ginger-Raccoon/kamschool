const User = require('../models/user');
const { YOUR_TOKEN } = process.env;
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(YOUR_TOKEN, { polling: false });
const chatId = '-530346437'
const opt = {
  parse_mode: 'HTML'
}
const ValidErr = require('../errors/valid-err');


module.exports.userData = (req, res, next) => {
  const { name, email, telephone } = req.body;
  User.create({ name, email, telephone })
  .then((data) => {
    let msg = `Новый клиент!\n  <b>Имя:</b> ${data.name}\n  <b>E-mail:</b> ${data.email}\n  <b>Тел.:</b> ${data.telephone}`
    return bot.sendMessage(chatId, msg, opt)
      .then(() =>{res.send('Данные успешно отправлены')})
      .catch((err) => { res.send({ message: 'Проблема с ботом'})});
  })
  .catch((err) => {
    if (err._message === 'user validation failed') {
      res.send({ message: 'Введены неверные данные'});
    }
    next(err)
  })
}