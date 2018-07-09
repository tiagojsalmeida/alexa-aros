var { arosPUT } = require('../client');
var success = require('../speak/success');

var Low = [
  'Low',
  {
    'utterances': [
      '{|to} Low',
    ]
  },
  (req, res) => {
    return arosPUT({
        powered: true,
        'fan_speed': 0.33,
    }).then(() => res.say(success()).send())
    .catch((e) => res.say(e).send());
  }
];

module.exports = Low;
