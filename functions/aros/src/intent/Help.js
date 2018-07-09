var help = require('../speak/help');

var Help = [
  'AMAZON.HelpIntent',
  {
    "slots": {},
    "utterances": [
      "help",
      "help me",
      "what can i ask",
      "what can i say",
    ]
  },
  (req, res) => {
    res.say(help());
    res.shouldEndSession(false, help());
    res.send();
  }
];

module.exports = Help;
