const User = require('../models/user');
const { YOUR_TOKEN } = process.env;
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(YOUR_TOKEN, { polling: false });
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
    return bot.sendMessage(chatId, msg, opt).then(() =>{res.send('Данные успешно отправлены')}) .catch((err) => { res.send(err)});
  })
  .catch((err) => {
    next(err);
  })
}