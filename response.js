'use strict';

class message{
  constructor(bot){
    this.bot = bot;
  }

  mention(chatId, message, user){
    bot.sendMessage(chatId, this.parseUser(message, user), { parse_mode: "Markdown" });
  }

  reply(chatId, message, user){

  }

  parseUser(message, user){
    return message.replace("${user}", `[${user.first_name}](tg://user?id=${user.id})`);
  }
};

module.exports = message;
