## KamSchool
### О проекте
+ Backend проекта Kamcchool

### Технологии
+ Node.js(Express), MongoDB
+ TelegramAPI (Telegraf)
+ GoogleAPI

### Функциональность
По запросу к серверу производится запись в БД, так же информация дублируется в GoogleSheets и ТГ бота  

Запись данных можно осуществлять не только через форму на сайте: http://kam-school.ru/ но и через бота: https://t.me/kamschool_bot  

Так же в боте существует команда помощи: /help  

И информация об авторе: /author

    Запросы к серверу    
    отправлять через Postman

    POST / — Запись данных клиента из БД    
     name, email, telephone

### Развертывание проекта
1. Установить `Node.js`
2. Клонировать репозиторий `https://github.com/Ginger-Raccoon/news-explorer_backend.git`
3. Установить зависимости `npm i`
4. `npm run start` запускает сервер на `localhost:3000`
5. `npm run dev` запускает сервер на `localhost:3000` с хот релоудом
