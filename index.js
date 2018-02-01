const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const app = express();



// replace the value below with the Telegram token you receive from @BotFather
const token = '420513656:AAGHu-f_RefaPyw-xj2kRAILDp27L9rZ1KU';
const axios = require('axios');

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {
    polling: true
});


// Matches "/echo [whatever]"
bot.onText(/\/echo (.+) (\d{4})/, async (msg, match) => {
    const chatId = msg.chat.id;
    const data = await axios.get('https://statementdog.com/api/v1/fundamentals/2330/2012/1/2017/4/?queried_by_user=true&_=1495282380092');
    const status = {
        name: data.data["1"].data.ticker_name,
        latest_closing_price: data.data["1"].data.latest_closing_price
    }
    bot.sendMessage(chatId, "您現在查詢的是：" + status.name + "最新股價為" + status.latest_closing_price);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
});


app.listen(3000);