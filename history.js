"use strict";

const history = {
  messages: [],
  options: {
    limit: 200
  },
  add: function(message){
    var self = this;

    // only store IMD Fun messages
    if(message.chat.id == process.env['IMD_FUN_CHAT_ID'] || process.env["DEBUG"]){
      if(self.messages.length > self.options.limit){
        self.messages.reverse().pop();
        self.messages.reverse();
      }
      self.messages.push(message);
    }
  }
};

module.exports = history;
