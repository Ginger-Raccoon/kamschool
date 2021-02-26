const EditDate = require('../utils/utils');
const User = require('../models/user');
//Telegram
const { YOUR_TOKEN } = process.env;
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(YOUR_TOKEN, { polling: false });
const chatId = '-530346437'
const opt = {
  parse_mode: 'HTML'
}
//google API
const config = require('../googleSheets/config');
const Googleapi = require('../googleSheets/googleapi');

module.exports.userData = (req, res, next) => {
  let date = new Date();
  let editDate = EditDate.editDataFormat(date.toJSON().slice(0, 10));
  const { name, email, telephone } = req.body;
  req.body.date = editDate;
  const source = 'Сайт'
  req.body.source = source
  User.create({ name, email, telephone, date, source })
  .then((data) => {
    let msg = `Новый клиент!\n  <b>Имя:</b> ${data.name}\n  <b>E-mail:</b> ${data.email}\n  <b>Тел.:</b> ${data.telephone}\n <b>Дата:</b> ${editDate}\n <b>Источник:</b> ${data.source}`
    return bot.sendMessage(chatId, msg, opt)
      .then(() =>{
        Googleapi.updateSheet(data.name, data.email, data.telephone, editDate, data.source)
          .then(() => {res.send({ message: 'Данные успешно сохранены' })})
          .catch((err) => {res.status(400).send(err)})
      })
      .catch((err) => { console.log(err)
        res.send({ message: 'Проблема с ботом'})});
  })
  .catch((err) => {
    if (err._message === 'user validation failed') {
      res.status(400).send({ message: 'Введены неверные данные'});
    }
    next(err)
  })
}

