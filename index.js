const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');

const history = require("./history.js");
const nlp = require("./nlp.js");

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env['TELEGRAM_BOT_TOKEN'];
const imdChatId = process.env['IMD_FUN_CHAT_ID'];

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// initialize express for webhook routing
const app = express();

app.get("/api/v1/tldr", (req, res) => {
  console.log("TLDR Request incoming", req);
  res.sendStatus(200);
});

// Listen for any kind of message. There are different kinds of messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  history.add(msg);
  console.log(msg);
  if(msg.text && msg.text.indexOf("tldr") != -1){
    bot.sendMessage(chatId, nlp.analyzeHistory(), { parse_mode: "Markdown" });
  }
});

bot.on('polling_error', (error) => {
  console.error(error);  // => 'EFATAL'
});
