var express = require('express');
var request = require('supertest');
var chai = require('chai');
var expect = chai.expect;

var addSession = function(obj) {
  return Object.assign({}, {
    "session": {
      "sessionId": "",
      "application": {
        "applicationId": "amzn1.ask.skill.dfae0b18-a33d-48f4-b8f4-a22e4cb898c6"
      },
      "attributes": {},
      "user": {
        "userId": ""
      },
    },
    "request": {
      "type": "Test",
    }
  }, obj);
}

describe('App', function() {
  var server;

  beforeEach(function() {
    var app = express();
    var alexaApp = require('../src/root');
    alexaApp.express({
      expressApp: app,
      router: express.Router(),
      debug: true,
      checkCert: false
    });
    server = app.listen(3000);
  });

  afterEach(function() {
    server.close();
  });

  it('responds to invalid data', function() {
    return request(server)
      .post('/aros')
      .send(addSession({}))
      .expect(200).then(function(response) {
        return expect(response.body).to.eql({
          version: '1.0',
          response: {
            directives: [],
            shouldEndSession: true,
            outputSpeech: {
              type: 'SSML',
              ssml: '<speak>Error: not a valid request</speak>'
            }
          },
          sessionAttributes: {}
        });
      });
  });

  it('responds to a launch event', function() {
    return request(server)
      .post('/aros')
      .send(addSession({
        request: {
          type: 'LaunchRequest',
        }
      }))
      .expect(200).then(function(response) {
        var ssml = response.body.response.outputSpeech.ssml;
        return expect(ssml).to.eql(`<speak>Welcome! Ask me to blast</speak>`);
      });
  });

  it('responds to blast', function() {
    return request(server)
      .post('/aros')
      .send(addSession({
        request: {
          type: 'IntentRequest',
          intent: {
            name: 'Blast'
          }
        }
      }))
      .expect(200).then(function(response) {
        var ssml = response.body.response.outputSpeech;
        return expect(ssml.ssml).to.eql(`<speak>ok</speak>`);
      });
  });

  it('responds to stop', function() {
    return request(server)
      .post('/aros')
      .send(addSession({
        request: {
          type: 'IntentRequest',
          intent: {
            name: 'AMAZON.StopIntent'
          }
        }
      }))
      .expect(200).then(function(response) {
        return expect(response.body.response.shouldEndSession).to.eql(true);
      });
  });
});
