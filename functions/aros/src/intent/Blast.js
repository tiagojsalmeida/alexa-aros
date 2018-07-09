var { arosPUT } = require('../client');
var success = require('../speak/success');

var Blast = [
  'Blast',
  {
    'utterances': [
      '{|to} blast {temperature:AMAZON.NUMBER}',
    ]
  },
  (req, res) => {
    return arosPUT({
        powered: true,
        mode: 'cool_only',
        'fan_speed': 1,
        'max_set_point': req.slot('temperature') || 20,
    }).then(() => res.say(success()).send())
    .catch((e) => res.say(e).send());
  }
];

module.exports = Blast;
