var { arosPUT } = require('../client');
var success = require('../speak/success');

var High = [
  'High',
  {
    'utterances': [
      '{|to} high',
    ]
  },
  (req, res) => {
    return arosPUT({
        powered: true,
        'fan_speed': 1,
    }).then(() => res.say(success()).send())
    .catch((e) => res.say(e).send());
  }
];

module.exports = High;
