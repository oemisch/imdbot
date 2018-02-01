'use strict';
const history = require("./history.js");

const nlp = {
  analyzeHistory: function(){
    if(history.messages && history.messages.length > 0){
      var text = "";

      for(var i in history.messages){
        text += "\n"+history.messages[i].text+".";
      }
    }
    //TODO: summarize text
    var randomUser = history.getRandomUser();
    return `Das kann ich noch nicht. Entwickle mich weiter [${randomUser.first_name}](tg://user?id=${randomUser.id})!`;
  }
};

module.exports = nlp;
