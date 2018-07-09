var rp = require('request-promise');

function arosPUT(params) {
  
  console.error(`${process.env.API_URL}/air_conditioners/${process.env.DEVICE_ID}`, params);
  return rp({
    uri: `${process.env.API_URL}/air_conditioners/${process.env.DEVICE_ID}`,
    headers: {
      'Authorization': `Bearer ${process.env.API_TOKEN}`,
    },
    body: {
      'desired_state': params,
    },
    json: true,
    method: 'PUT',
  });
}

module.exports = {
  arosPUT,
};
