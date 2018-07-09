var Stop = [
  'AMAZON.StopIntent',
  {
    "slots": {},
    "utterances": [
      "stop",
    ]
  },
  (req, res) => {
    res.send();
  }
];

module.exports = Stop;
