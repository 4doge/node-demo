const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./certs/server.key'),
  cert: fs.readFileSync('./certs/server.cert')
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.write('Hello world!');
  res.end();
});

server.listen(3000);
