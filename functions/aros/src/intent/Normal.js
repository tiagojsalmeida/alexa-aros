var { arosPUT } = require('../client');
var success = require('../speak/success');

var Normal = [
  'Normal',
  {
    'utterances': [
      '{|to} normal {temperature:AMAZON.NUMBER}',
    ]
  },
  (req, res) => {
    return arosPUT({
        powered: true,
        mode: 'auto_eco',
        'fan_speed': 0.33,
        'max_set_point': req.slot('temperature') || 22,
    }).then(() => res.say(success()).send())
    .catch((e) => res.say(e).send());
  }
];

module.exports = Normal;
