const fs = require ('fs');
const path = require('path');
const handler = require('./handler');
const querystring = require('querystring');
// const filePath = path.join(__dirname, "..", "src",'word.txt');

const router = (request, response) => {
  const url = request.url;
  if (url === '/') {
   handler.handlerHome(request, response);
  } else if (url.indexOf('/public') !== -1) {
    handler.handlerPublic(request, response, url);
  }
  else if (url.indexOf('/search?q=') !== -1) {
   handlers.handlerSearch(request, response, url);
  } else {
    handler.assets(url, response);
    response.writeHead(404, {'Content-Type': 'text/html' });
    response.end('<h1> 404 not found </h1>');
  }
};
module.exports = router;
