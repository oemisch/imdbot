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
    return "Das kann ich noch nicht. Entwickle mich weiter!";
  }
};

module.exports = nlp;
