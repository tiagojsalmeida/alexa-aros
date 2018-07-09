var { arosPUT } = require('../client');
var success = require('../speak/success');

var SetTemperature = [
  'SetTemperature',
  {
    'utterances': [
      '{|to} temperature {temperature:AMAZON.NUMBER}',
    ]
  },
  (req, res) => {
    return arosPUT({
        powered: true,
        'max_set_point': req.slot('temperature'),
    }).then(() => res.say(success()).send())
    .catch((e) => res.say(e).send());
  }
];

module.exports = SetTemperature;
