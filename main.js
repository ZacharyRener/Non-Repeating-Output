const https = require('https');
const options = {
  hostname: 'asdfast.beobit.net',
  port: 443,
  path: '/api/?length=9999',
  method: 'GET',
};
const req = https.request(options, res => {
  res.on('data', d => {
    process.stdout.write(d);
  });
});
req.on('error', error => {
  console.error(error);
});
req.end();