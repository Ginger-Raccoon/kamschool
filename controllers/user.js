const User = require('../models/user');
const TelegramBot = require('node-telegram-bot-api');
const token = '1668615288:AAGoHVny4TGpvSwCyrjDVKjV0IXrGP3W-Zs';
const bot = new TelegramBot(token, { polling: false });
const chatId = '-530346437'
const opt = {
  parse_mode: 'HTML'
}


module.exports.userData = (req, res, next) => {
  const { name, email, telephone } = req.body;
  User.create({ name, email, telephone})
  // .then((data) => {
  //   res.send({data: data})
  // })
  .then((data) => {
    let msg = `Новый клиент!\n  <b>Имя:</b> ${data.name}\n  <b>E-mail:</b> ${data.email}\n  <b>Тел.:</b> ${data.telephone}`
    console.log(msg)
    return bot.sendMessage(chatId, msg, opt)
  })
  .catch((err) => {
    next(err);
  })
}