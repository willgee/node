const http = require('http');
const url = require('url');

// TODO: Implement your server here

const server = http.createServer((req, res) => {
  // TODO: Implement your routes here
  // http header
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const parsedUrl = url.parse(req.url, true)
  const query = parsedUrl.query;

  //const url = req.url;

  if (parsedUrl.pathname === '/create' && req.method === 'POST') {
    res.write('Fantasy character has been created');
    res.end();
  }
  else if (parsedUrl.pathname === '/confirm' && req.method === 'POST') {
    res.write('Character has been confirmed');
    res.end();
  }
  else if (parsedUrl.pathname === '/view' && req.method === 'GET') {
    res.write('Details for the character');
    res.end();
  }
  else {
    res.write('Hello World!');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;