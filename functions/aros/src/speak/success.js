var { random } = require('../utils/math');

function success() {
  var options = [
    "ok"
  ];
  return random(options);
}

module.exports = success;
