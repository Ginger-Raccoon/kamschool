const User = require('../models/user');
const TelegramBot = require('node-telegram-bot-api');
const token = '1668615288:AAGoHVny4TGpvSwCyrjDVKjV0IXrGP3W-Zs';
const bot = new TelegramBot(token, { polling: false });
const chatId = '-530346437'


module.exports.userData = (req, res, next) => {
  const { name, email, telephone } = req.body;
  User.create({ name, email, telephone})
  // .then((data) => {
  //   res.send({data: data})
  // })
  .then((data) => {
    let msg = {
      'Имя: ': data.name,
      'E-mail: ': data.email,
      'Телефон: ': data.telephone,
    }
    return bot.sendMessage(chatId, JSON.stringify(msg))
  })
  .catch((err) => {
    next(err);
  })
}