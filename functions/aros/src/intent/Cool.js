var { arosPUT } = require('../client');
var success = require('../speak/success');

var Cool = [
  'Cool',
  {
    'utterances': [
      '{|to} cool',
    ]
  },
  (req, res) => {
    return arosPUT({
        powered: true,
        mode: 'cool_only',
    }).then(() => res.say(success()).send())
    .catch((e) => res.say(e).send());
  }
];

module.exports = Cool;
