var { random } = require('../utils/math');

function help() {
  var options = [
    "Ask me to blast"
  ];
  return random(options);
}

module.exports = help;
