var Cancel = [
  'AMAZON.CancelIntent',
  {
    "slots": {},
    "utterances": [
      "cancel",
      "nevermind",
      "never mind"
    ]
  },
  (req, res) => {
    res.send();
  }
];

module.exports = Cancel;
