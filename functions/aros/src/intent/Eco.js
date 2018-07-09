var { arosPUT } = require('../client');
var success = require('../speak/success');

var Eco = [
  'Eco',
  {
    'utterances': [
      '{|to} Eco',
    ]
  },
  (req, res) => {
    return arosPUT({
        powered: true,
        mode: 'auto_eco',
    }).then(() => res.say(success()).send())
    .catch((e) => res.say(e).send());
  }
];

module.exports = Eco;
