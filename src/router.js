const fs = require ('fs');
const path = require('path');
const handlers = require('./handlers');
const router = (request, response) => {
  const url = request.url;
  if (url === '/') {
    handlers.handler(request, response);
  } else if (url.indexOf('/public') !== -1) {
    handlers.handler(request, response, url);
  } else {
    response.writeHead(404, {'Content-Type': 'text/html' });
    response.end('<h1> 404 not found </h1>');
  }
};
module.exports = router;
