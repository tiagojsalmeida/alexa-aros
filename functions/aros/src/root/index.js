var alexa = require('alexa-app');
var Blast = require('../intent/Blast');
var Normal = require('../intent/Normal');
var Cool = require('../intent/Cool');
var Eco = require('../intent/Eco');
var High = require('../intent/High');
var SetTemperature = require('../intent/SetTemperature');
var Low = require('../intent/Low');
var Cancel = require('../intent/Cancel');
var Stop = require('../intent/Stop');
var Help = require('../intent/Help');
var help = require('../speak/help');

var app = new alexa.app('aros');

app.pre = (request, response, type) => {
  if (request.data.session.application.applicationId != process.env.APP_ID) {
    return response.fail("Invalid applicationId");
  }
};

app.launch((req, res) => {
  res.say(`Welcome! ${help()}`);
  res.shouldEndSession(false, help());
});

app.intent.call(this, ...Blast);
app.intent.call(this, ...Normal);
app.intent.call(this, ...Cool);
app.intent.call(this, ...Eco);
app.intent.call(this, ...High);
app.intent.call(this, ...Low);
app.intent.call(this, ...SetTemperature);
app.intent.call(this, ...Cancel);
app.intent.call(this, ...Stop);
app.intent.call(this, ...Help);

module.exports = app;
